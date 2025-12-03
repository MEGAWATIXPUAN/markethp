import type { Product } from './types';
import PlaceHolderImages from './placeholder-images.json';

const products: Product[] = [
  {
    id: 'pixel-8-pro',
    name: 'Pixel 8 Pro',
    brand: 'Google',
    price: 999,
    description: 'The Pixel 8 Pro is the most powerful and versatile Pixel phone yet, with a pro-level camera system, a brilliant display, and the new Google Tensor G3 chip.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'pixel-8-pro')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'pixel-8-pro')?.imageHint || '',
    specs: {
      Display: '6.7" Super Actua LTPO OLED',
      Processor: 'Google Tensor G3',
      RAM: '12 GB',
      Storage: '128GB / 256GB / 512GB',
      Camera: '50MP Wide, 48MP Ultrawide, 48MP Telephoto',
    }
  },
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    price: 999,
    description: 'Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'iphone-15-pro')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'iphone-15-pro')?.imageHint || '',
    specs: {
      Display: '6.1" Super Retina XDR ProMotion',
      Processor: 'A17 Pro',
      RAM: '8 GB',
      Storage: '128GB / 256GB / 512GB / 1TB',
      Camera: '48MP Main, 12MP Ultrawide, 12MP Telephoto',
    }
  },
  {
    id: 'galaxy-s24-ultra',
    name: 'Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 1299,
    description: 'Meet the new Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with a new titanium exterior and a 6.8" flat display. It\'s an absolute marvel of design.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'galaxy-s24-ultra')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'galaxy-s24-ultra')?.imageHint || '',
    specs: {
      Display: '6.8" Dynamic AMOLED 2X',
      Processor: 'Snapdragon 8 Gen 3 for Galaxy',
      RAM: '12 GB',
      Storage: '256GB / 512GB / 1TB',
      Camera: '200MP Wide, 12MP Ultrawide, 10MP & 50MP Telephoto',
    }
  },
  {
    id: 'oneplus-12',
    name: 'OnePlus 12',
    brand: 'OnePlus',
    price: 799,
    description: 'The OnePlus 12 is a true flagship, featuring a stunning 2K 120Hz ProXDR display, the latest Snapdragon 8 Gen 3, and a 4th Gen Hasselblad Camera for Mobile.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'oneplus-12')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'oneplus-12')?.imageHint || '',
    specs: {
      Display: '6.82" 2K 120Hz ProXDR',
      Processor: 'Snapdragon 8 Gen 3',
      RAM: '12GB / 16GB',
      Storage: '256GB / 512GB',
      Camera: '50MP Main, 48MP Ultrawide, 64MP Telephoto',
    }
  },
  {
    id: 'xperia-1-v',
    name: 'Xperia 1 V',
    brand: 'Sony',
    price: 1399,
    description: 'Experience the next level of imaging with the Xperia 1 V, featuring a next-gen Exmor T for mobile sensor and a 21:9 Wide 4K HDR OLED 120Hz Refresh rate display.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'xperia-1-v')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'xperia-1-v')?.imageHint || '',
    specs: {
      Display: '6.5" 4K HDR OLED 120Hz',
      Processor: 'Snapdragon 8 Gen 2',
      RAM: '12 GB',
      Storage: '256GB',
      Camera: '48MP Wide, 12MP Ultrawide, 12MP Telephoto',
    }
  },
  {
    id: 'nothing-phone-2',
    name: 'Nothing Phone (2)',
    brand: 'Nothing',
    price: 599,
    description: 'A smartphone that dares to be different. With the iconic Glyph Interface, a premium dual camera, and the powerful Snapdragon 8+ Gen 1 chipset.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'nothing-phone-2')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'nothing-phone-2')?.imageHint || '',
    specs: {
      Display: '6.7" LTPO OLED flexible',
      Processor: 'Snapdragon 8+ Gen 1',
      RAM: '8GB / 12GB',
      Storage: '128GB / 256GB / 512GB',
      Camera: '50MP Main, 50MP Ultrawide',
    }
  },
  {
    id: 'galaxy-z-fold-5',
    name: 'Galaxy Z Fold 5',
    brand: 'Samsung',
    price: 1799,
    description: 'Unfold an immersive screen and experience a PC-like experience in your pocket. The Galaxy Z Fold 5 is the ultimate productivity powerhouse.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'galaxy-z-fold-5')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'galaxy-z-fold-5')?.imageHint || '',
    specs: {
      Display: '7.6" Main, 6.2" Cover',
      Processor: 'Snapdragon 8 Gen 2 for Galaxy',
      RAM: '12 GB',
      Storage: '256GB / 512GB / 1TB',
      Camera: '50MP Wide, 12MP Ultrawide, 10MP Telephoto',
    }
  },
  {
    id: 'asus-rog-8',
    name: 'ASUS ROG Phone 8',
    brand: 'ASUS',
    price: 1099,
    description: 'The ROG Phone 8 redefines mobile gaming. It features a revamped design, the latest Snapdragon 8 Gen 3, and an advanced thermal system for peak performance.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'asus-rog-8')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'asus-rog-8')?.imageHint || '',
    specs: {
      Display: '6.78" AMOLED 165Hz',
      Processor: 'Snapdragon 8 Gen 3',
      RAM: '12GB / 16GB / 24GB',
      Storage: '256GB / 512GB',
      Camera: '50MP Main, 13MP Ultrawide, 32MP Telephoto',
    }
  }
];

export async function getProducts(): Promise<Product[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return products.find(p => p.id === id);
}
