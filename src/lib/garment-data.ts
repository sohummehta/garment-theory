import { Garment } from '@/types/garment';

export const mockGarments: Garment[] = [
  // Tops
  {
    id: 'top-001',
    sku: 'TSH-001',
    name: 'Classic Crew Neck T-Shirt',
    category: 'tops',
    subcategory: 't-shirts',
    brand: 'Essentials',
    price: 29.99,
    material: '100% Cotton',
    thickness: 'light',
    stretch: false,
    colorways: [
      {
        id: 'top-001-white',
        name: 'White',
        hexCode: '#FFFFFF',
        imageUrl: '/api/placeholder/1500/2000/FFFFFF/000000?text=White+T-Shirt',
        maskUrl: '/api/placeholder/1500/2000/000000/FFFFFF?text=Mask'
      },
      {
        id: 'top-001-black',
        name: 'Black',
        hexCode: '#000000',
        imageUrl: '/api/placeholder/1500/2000/000000/FFFFFF?text=Black+T-Shirt',
        maskUrl: '/api/placeholder/1500/2000/000000/FFFFFF?text=Mask'
      },
      {
        id: 'top-001-navy',
        name: 'Navy',
        hexCode: '#1B365D',
        imageUrl: '/api/placeholder/1500/2000/1B365D/FFFFFF?text=Navy+T-Shirt',
        maskUrl: '/api/placeholder/1500/2000/000000/FFFFFF?text=Mask'
      }
    ],
    sizes: [
      { chest: 36, length: 28, sleeve: 8, fit: 'regular' },
      { chest: 38, length: 29, sleeve: 8.5, fit: 'regular' },
      { chest: 40, length: 30, sleeve: 9, fit: 'regular' },
      { chest: 42, length: 31, sleeve: 9.5, fit: 'regular' }
    ],
    landmarks: {
      neckline: [{ x: 0.5, y: 0.1 }],
      hem: [{ x: 0.5, y: 0.8 }],
      sleeve: [{ x: 0.2, y: 0.3 }, { x: 0.8, y: 0.3 }]
    },
    sizeChart: {
      'S': { chest: 36, length: 28, sleeve: 8, fit: 'regular' },
      'M': { chest: 38, length: 29, sleeve: 8.5, fit: 'regular' },
      'L': { chest: 40, length: 30, sleeve: 9, fit: 'regular' },
      'XL': { chest: 42, length: 31, sleeve: 9.5, fit: 'regular' }
    },
    rights: {
      usage: 'commercial',
      restrictions: []
    }
  },
  {
    id: 'top-002',
    sku: 'POLO-001',
    name: 'Premium Polo Shirt',
    category: 'tops',
    subcategory: 'polo-shirts',
    brand: 'Classic',
    price: 49.99,
    material: 'Pique Cotton',
    thickness: 'medium',
    stretch: false,
    colorways: [
      {
        id: 'top-002-white',
        name: 'White',
        hexCode: '#FFFFFF',
        imageUrl: '/api/placeholder/1500/2000/FFFFFF/000000?text=White+Polo',
        maskUrl: '/api/placeholder/1500/2000/000000/FFFFFF?text=Mask'
      },
      {
        id: 'top-002-blue',
        name: 'Navy Blue',
        hexCode: '#1B365D',
        imageUrl: '/api/placeholder/1500/2000/1B365D/FFFFFF?text=Blue+Polo',
        maskUrl: '/api/placeholder/1500/2000/000000/FFFFFF?text=Mask'
      }
    ],
    sizes: [
      { chest: 36, length: 28, sleeve: 8, fit: 'slim' },
      { chest: 38, length: 29, sleeve: 8.5, fit: 'slim' },
      { chest: 40, length: 30, sleeve: 9, fit: 'slim' },
      { chest: 42, length: 31, sleeve: 9.5, fit: 'slim' }
    ],
    landmarks: {
      neckline: [{ x: 0.5, y: 0.1 }],
      hem: [{ x: 0.5, y: 0.8 }],
      sleeve: [{ x: 0.2, y: 0.3 }, { x: 0.8, y: 0.3 }]
    },
    sizeChart: {
      'S': { chest: 36, length: 28, sleeve: 8, fit: 'slim' },
      'M': { chest: 38, length: 29, sleeve: 8.5, fit: 'slim' },
      'L': { chest: 40, length: 30, sleeve: 9, fit: 'slim' },
      'XL': { chest: 42, length: 31, sleeve: 9.5, fit: 'slim' }
    },
    rights: {
      usage: 'commercial',
      restrictions: []
    }
  },
  {
    id: 'top-003',
    sku: 'OXF-001',
    name: 'Oxford Button-Down',
    category: 'tops',
    subcategory: 'dress-shirts',
    brand: 'Professional',
    price: 79.99,
    material: 'Oxford Cotton',
    thickness: 'medium',
    stretch: false,
    colorways: [
      {
        id: 'top-003-white',
        name: 'White',
        hexCode: '#FFFFFF',
        imageUrl: '/api/placeholder/1500/2000/FFFFFF/000000?text=White+Oxford',
        maskUrl: '/api/placeholder/1500/2000/000000/FFFFFF?text=Mask'
      },
      {
        id: 'top-003-light-blue',
        name: 'Light Blue',
        hexCode: '#87CEEB',
        imageUrl: '/api/placeholder/1500/2000/87CEEB/000000?text=Light+Blue+Oxford',
        maskUrl: '/api/placeholder/1500/2000/000000/FFFFFF?text=Mask'
      }
    ],
    sizes: [
      { chest: 36, length: 30, sleeve: 8, fit: 'regular' },
      { chest: 38, length: 31, sleeve: 8.5, fit: 'regular' },
      { chest: 40, length: 32, sleeve: 9, fit: 'regular' },
      { chest: 42, length: 33, sleeve: 9.5, fit: 'regular' }
    ],
    landmarks: {
      neckline: [{ x: 0.5, y: 0.1 }],
      hem: [{ x: 0.5, y: 0.85 }],
      sleeve: [{ x: 0.2, y: 0.3 }, { x: 0.8, y: 0.3 }]
    },
    sizeChart: {
      'S': { chest: 36, length: 30, sleeve: 8, fit: 'regular' },
      'M': { chest: 38, length: 31, sleeve: 8.5, fit: 'regular' },
      'L': { chest: 40, length: 32, sleeve: 9, fit: 'regular' },
      'XL': { chest: 42, length: 33, sleeve: 9.5, fit: 'regular' }
    },
    rights: {
      usage: 'commercial',
      restrictions: []
    }
  },
  // Outerwear
  {
    id: 'outer-001',
    sku: 'HOOD-001',
    name: 'Classic Hoodie',
    category: 'outerwear',
    subcategory: 'hoodies',
    brand: 'Comfort',
    price: 59.99,
    material: 'Cotton Blend',
    thickness: 'medium',
    stretch: true,
    colorways: [
      {
        id: 'outer-001-grey',
        name: 'Heather Grey',
        hexCode: '#808080',
        imageUrl: '/api/placeholder/1500/2000/808080/FFFFFF?text=Grey+Hoodie',
        maskUrl: '/api/placeholder/1500/2000/000000/FFFFFF?text=Mask'
      },
      {
        id: 'outer-001-black',
        name: 'Black',
        hexCode: '#000000',
        imageUrl: '/api/placeholder/1500/2000/000000/FFFFFF?text=Black+Hoodie',
        maskUrl: '/api/placeholder/1500/2000/000000/FFFFFF?text=Mask'
      }
    ],
    sizes: [
      { chest: 38, length: 28, sleeve: 9, fit: 'regular' },
      { chest: 40, length: 29, sleeve: 9.5, fit: 'regular' },
      { chest: 42, length: 30, sleeve: 10, fit: 'regular' },
      { chest: 44, length: 31, sleeve: 10.5, fit: 'regular' }
    ],
    landmarks: {
      neckline: [{ x: 0.5, y: 0.1 }],
      hem: [{ x: 0.5, y: 0.75 }],
      sleeve: [{ x: 0.15, y: 0.25 }, { x: 0.85, y: 0.25 }]
    },
    sizeChart: {
      'S': { chest: 38, length: 28, sleeve: 9, fit: 'regular' },
      'M': { chest: 40, length: 29, sleeve: 9.5, fit: 'regular' },
      'L': { chest: 42, length: 30, sleeve: 10, fit: 'regular' },
      'XL': { chest: 44, length: 31, sleeve: 10.5, fit: 'regular' }
    },
    rights: {
      usage: 'commercial',
      restrictions: []
    }
  },
  {
    id: 'outer-002',
    sku: 'JACKET-001',
    name: 'Denim Jacket',
    category: 'outerwear',
    subcategory: 'jackets',
    brand: 'Vintage',
    price: 89.99,
    material: 'Denim',
    thickness: 'heavy',
    stretch: false,
    colorways: [
      {
        id: 'outer-002-blue',
        name: 'Classic Blue',
        hexCode: '#1E3A8A',
        imageUrl: '/api/placeholder/1500/2000/1E3A8A/FFFFFF?text=Blue+Denim+Jacket',
        maskUrl: '/api/placeholder/1500/2000/000000/FFFFFF?text=Mask'
      },
      {
        id: 'outer-002-black',
        name: 'Black',
        hexCode: '#000000',
        imageUrl: '/api/placeholder/1500/2000/000000/FFFFFF?text=Black+Denim+Jacket',
        maskUrl: '/api/placeholder/1500/2000/000000/FFFFFF?text=Mask'
      }
    ],
    sizes: [
      { chest: 38, length: 26, sleeve: 9, fit: 'regular' },
      { chest: 40, length: 27, sleeve: 9.5, fit: 'regular' },
      { chest: 42, length: 28, sleeve: 10, fit: 'regular' },
      { chest: 44, length: 29, sleeve: 10.5, fit: 'regular' }
    ],
    landmarks: {
      neckline: [{ x: 0.5, y: 0.1 }],
      hem: [{ x: 0.5, y: 0.7 }],
      sleeve: [{ x: 0.15, y: 0.25 }, { x: 0.85, y: 0.25 }]
    },
    sizeChart: {
      'S': { chest: 38, length: 26, sleeve: 9, fit: 'regular' },
      'M': { chest: 40, length: 27, sleeve: 9.5, fit: 'regular' },
      'L': { chest: 42, length: 28, sleeve: 10, fit: 'regular' },
      'XL': { chest: 44, length: 29, sleeve: 10.5, fit: 'regular' }
    },
    rights: {
      usage: 'commercial',
      restrictions: []
    }
  },
  {
    id: 'outer-003',
    sku: 'BLAZER-001',
    name: 'Slim Fit Blazer',
    category: 'outerwear',
    subcategory: 'blazers',
    brand: 'Professional',
    price: 199.99,
    material: 'Wool Blend',
    thickness: 'medium',
    stretch: false,
    colorways: [
      {
        id: 'outer-003-navy',
        name: 'Navy',
        hexCode: '#1B365D',
        imageUrl: '/api/placeholder/1500/2000/1B365D/FFFFFF?text=Navy+Blazer',
        maskUrl: '/api/placeholder/1500/2000/000000/FFFFFF?text=Mask'
      },
      {
        id: 'outer-003-grey',
        name: 'Charcoal Grey',
        hexCode: '#4B5563',
        imageUrl: '/api/placeholder/1500/2000/4B5563/FFFFFF?text=Grey+Blazer',
        maskUrl: '/api/placeholder/1500/2000/000000/FFFFFF?text=Mask'
      }
    ],
    sizes: [
      { chest: 36, length: 29, sleeve: 8.5, fit: 'slim' },
      { chest: 38, length: 30, sleeve: 9, fit: 'slim' },
      { chest: 40, length: 31, sleeve: 9.5, fit: 'slim' },
      { chest: 42, length: 32, sleeve: 10, fit: 'slim' }
    ],
    landmarks: {
      neckline: [{ x: 0.5, y: 0.1 }],
      hem: [{ x: 0.5, y: 0.8 }],
      sleeve: [{ x: 0.15, y: 0.25 }, { x: 0.85, y: 0.25 }]
    },
    sizeChart: {
      'S': { chest: 36, length: 29, sleeve: 8.5, fit: 'slim' },
      'M': { chest: 38, length: 30, sleeve: 9, fit: 'slim' },
      'L': { chest: 40, length: 31, sleeve: 9.5, fit: 'slim' },
      'XL': { chest: 42, length: 32, sleeve: 10, fit: 'slim' }
    },
    rights: {
      usage: 'commercial',
      restrictions: []
    }
  },
  // Dresses
  {
    id: 'dress-001',
    sku: 'DRESS-001',
    name: 'A-Line Dress',
    category: 'dresses',
    subcategory: 'casual-dresses',
    brand: 'Elegant',
    price: 79.99,
    material: 'Cotton Blend',
    thickness: 'light',
    stretch: true,
    colorways: [
      {
        id: 'dress-001-black',
        name: 'Black',
        hexCode: '#000000',
        imageUrl: '/api/placeholder/1500/2000/000000/FFFFFF?text=Black+Dress',
        maskUrl: '/api/placeholder/1500/2000/000000/FFFFFF?text=Mask'
      },
      {
        id: 'dress-001-red',
        name: 'Red',
        hexCode: '#DC2626',
        imageUrl: '/api/placeholder/1500/2000/DC2626/FFFFFF?text=Red+Dress',
        maskUrl: '/api/placeholder/1500/2000/000000/FFFFFF?text=Mask'
      }
    ],
    sizes: [
      { chest: 36, length: 40, sleeve: 0, fit: 'regular' },
      { chest: 38, length: 41, sleeve: 0, fit: 'regular' },
      { chest: 40, length: 42, sleeve: 0, fit: 'regular' },
      { chest: 42, length: 43, sleeve: 0, fit: 'regular' }
    ],
    landmarks: {
      neckline: [{ x: 0.5, y: 0.1 }],
      hem: [{ x: 0.5, y: 0.9 }],
      sleeve: []
    },
    sizeChart: {
      'S': { chest: 36, length: 40, sleeve: 0, fit: 'regular' },
      'M': { chest: 38, length: 41, sleeve: 0, fit: 'regular' },
      'L': { chest: 40, length: 42, sleeve: 0, fit: 'regular' },
      'XL': { chest: 42, length: 43, sleeve: 0, fit: 'regular' }
    },
    rights: {
      usage: 'commercial',
      restrictions: []
    }
  }
];

export const getGarmentsByCategory = (category: Garment['category']) => {
  return mockGarments.filter(garment => garment.category === category);
};

export const getGarmentById = (id: string) => {
  return mockGarments.find(garment => garment.id === id);
};
