// Image optimization utilities
export const generateSrcSet = (baseUrl, sizes = [320, 640, 1024, 1280]) => {
  return sizes.map(size => `${baseUrl}?w=${size} ${size}w`).join(', ');
};

export const getOptimizedImageUrl = (url, width = 800, quality = 80) => {
  if (!url) return '';
  return `${url}?w=${width}&q=${quality}&f=avif`;
};

export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = src;
  });
};