import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS for local development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Content paths
const CONTENT_PATH = path.join(__dirname, '../src/content');

// Get all content from a collection
app.get('/api/:collection', async (req, res) => {
  try {
    const { collection } = req.params;
    const collectionPath = path.join(CONTENT_PATH, collection);
    
    const files = await fs.readdir(collectionPath);
    const content = await Promise.all(
      files
        .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
        .map(async (file) => {
          const filePath = path.join(collectionPath, file);
          const fileContent = await fs.readFile(filePath, 'utf-8');
          const { data, content } = matter(fileContent);
          
          return {
            slug: file.replace(/\.(md|mdx)$/, ''),
            frontmatter: data,
            content,
            file
          };
        })
    );
    
    res.json({ success: true, data: content });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get single content item
app.get('/api/:collection/:slug', async (req, res) => {
  try {
    const { collection, slug } = req.params;
    const filePath = path.join(CONTENT_PATH, collection, `${slug}.md`);
    
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    res.json({
      success: true,
      data: {
        slug,
        frontmatter: data,
        content
      }
    });
  } catch (error) {
    res.status(404).json({ success: false, error: 'Content not found' });
  }
});

// Create new content
app.post('/api/:collection', async (req, res) => {
  try {
    const { collection } = req.params;
    const { slug, frontmatter, content } = req.body;
    
    if (!slug) {
      return res.status(400).json({ success: false, error: 'Slug is required' });
    }
    
    const filePath = path.join(CONTENT_PATH, collection, `${slug}.md`);
    
    // Add timestamps
    frontmatter.createdAt = frontmatter.createdAt || new Date().toISOString();
    frontmatter.updatedAt = new Date().toISOString();
    
    const fileContent = matter.stringify(content || '', frontmatter);
    await fs.writeFile(filePath, fileContent);
    
    res.json({
      success: true,
      data: { slug, frontmatter, content }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update content
app.put('/api/:collection/:slug', async (req, res) => {
  try {
    const { collection, slug } = req.params;
    const { frontmatter, content } = req.body;
    
    const filePath = path.join(CONTENT_PATH, collection, `${slug}.md`);
    
    // Read existing file to preserve some metadata
    const existing = await fs.readFile(filePath, 'utf-8');
    const { data: existingFrontmatter } = matter(existing);
    
    // Merge frontmatter
    const updatedFrontmatter = {
      ...existingFrontmatter,
      ...frontmatter,
      updatedAt: new Date().toISOString()
    };
    
    const fileContent = matter.stringify(content || '', updatedFrontmatter);
    await fs.writeFile(filePath, fileContent);
    
    res.json({
      success: true,
      data: { slug, frontmatter: updatedFrontmatter, content }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Delete content
app.delete('/api/:collection/:slug', async (req, res) => {
  try {
    const { collection, slug } = req.params;
    const filePath = path.join(CONTENT_PATH, collection, `${slug}.md`);
    
    await fs.unlink(filePath);
    
    res.json({ success: true, message: 'Content deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'CMS API is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 CMS API running on http://localhost:${PORT}`);
});
