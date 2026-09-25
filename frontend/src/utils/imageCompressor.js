/**
 * Client-Side Image Compression Utility
 * Resizes images to max dimensions and compresses to WebP/JPEG Base64 Data URL
 * Keeps payload lightweight (<50KB) for seamless database persistence
 */

export const compressImage = (file, maxWidth = 320, maxHeight = 320, quality = 0.85) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      return reject(new Error('No file provided'));
    }

    if (!file.type.startsWith('image/')) {
      return reject(new Error('Selected file is not an image'));
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();

      img.onload = () => {
        let width = img.width;
        let height = img.height;

        // Calculate aspect ratio preserving dimensions
        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          return reject(new Error('Failed to create canvas context'));
        }

        // Optional smooth image smoothing
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        ctx.drawImage(img, 0, 0, width, height);

        // Try exporting as image/webp first, fallback to image/jpeg
        try {
          const dataUrl = canvas.toDataURL('image/webp', quality);
          if (dataUrl && dataUrl.startsWith('data:image/webp')) {
            return resolve(dataUrl);
          }
        } catch (e) {}

        const fallbackDataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(fallbackDataUrl);
      };

      img.onerror = () => {
        reject(new Error('Failed to load image for processing'));
      };

      img.src = event.target.result;
    };

    reader.onerror = () => {
      reject(new Error('Failed to read image file'));
    };

    reader.readAsDataURL(file);
  });
};
