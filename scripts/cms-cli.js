#!/usr/bin/env node

import { createInterface } from 'readline';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_PATH = path.join(__dirname, '../src/content');

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function createContent() {
  console.log('\n🌀 CODIO CMS - Create New Content\n');
  
  const collection = await question('Collection (posts/projects/pages): ');
  const title = await question('Title: ');
  const slug = await question('Slug (URL-friendly): ');
  const description = await question('Description: ');
  
  let frontmatter = {
    title,
    description,
    publishDate: new Date()
  };
  
  if (collection === 'projects') {
    frontmatter.status = await question('Status (active/completed/planned): ');
    frontmatter.iacNumber = await question('IAC Number (e.g., IAC-001): ');
    const tech = await question('Technologies (comma-separated): ');
    frontmatter.technologies = tech.split(',').map(t => t.trim());
  }
  
  const content = await question('Content (or press Enter to edit later): ');
  
  const filePath = path.join(CONTENT_PATH, collection, `${slug}.md`);
  const fileContent = matter.stringify(content || '# ' + title + '\n\nContent coming soon...', frontmatter);
  
  await fs.writeFile(filePath, fileContent);
  console.log(`\n✅ Created: ${filePath}\n`);
  
  rl.close();
}

createContent().catch(console.error);
