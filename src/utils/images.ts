import content from '../data/content.json';

export function getImageUrl(imageName: string, transformations?: string): string {
  // If in development, use local images
  if (import.meta.env.DEV) {
    return content.images.localPath + imageName;
  }
  
  // In production, use Cloudinary CDN with optional transformations
  const baseUrl = content.images.cdn;
  const transforms = transformations || 'q_auto,f_auto';
  
  // Build Cloudinary URL: base/transformations/image-name
  return `${baseUrl}${transforms}/${imageName}`;
}

// Responsive image helper
export function getResponsiveImageUrl(imageName: string, width: number): string {
  return getImageUrl(imageName, `w_${width},q_auto,f_auto`);
}

// Hero image with blur-up effect
export function getHeroImageUrl(imageName: string): string {
  return getImageUrl(imageName, 'q_auto,f_auto,c_limit,w_1920');
}

// Thumbnail for carousel
export function getThumbnailUrl(imageName: string): string {
  return getImageUrl(imageName, 'w_400,h_300,c_fill,q_auto,f_auto');
}