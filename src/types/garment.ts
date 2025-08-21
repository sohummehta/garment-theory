export interface UserMeasurements {
  chest: number; // in inches
  length: number; // in inches
  sleeve: number; // in inches
  waist?: number; // in inches
  hips?: number; // in inches
}

export interface GarmentSize {
  chest: number;
  length: number;
  sleeve: number;
  fit: 'slim' | 'regular' | 'oversized';
}

export interface GarmentColorway {
  id: string;
  name: string;
  hexCode: string;
  imageUrl: string;
  maskUrl: string; // binary mask for the clothing
}

export interface GarmentLandmarks {
  neckline: { x: number; y: number }[];
  hem: { x: number; y: number }[];
  sleeve: { x: number; y: number }[];
}

export interface Garment {
  id: string;
  sku: string;
  name: string;
  category: 'tops' | 'outerwear' | 'dresses';
  subcategory: string;
  brand: string;
  price: number;
  material: string;
  thickness: 'light' | 'medium' | 'heavy';
  stretch: boolean;
  colorways: GarmentColorway[];
  sizes: GarmentSize[];
  landmarks: GarmentLandmarks;
  sizeChart: Record<string, GarmentSize>;
  rights: {
    usage: string;
    restrictions: string[];
  };
}

export interface TryOnSession {
  id: string;
  userId: string;
  bodyScanUrl: string;
  measurements: UserMeasurements;
  selectedGarment: Garment | null;
  selectedColorway: GarmentColorway | null;
  selectedSize: GarmentSize | null;
  resultUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface TryOnHistory {
  id: string;
  sessionId: string;
  garmentId: string;
  resultUrl: string;
  rating: number | null;
  feedback: string | null;
  createdAt: Date;
}

export interface WishlistItem {
  id: string;
  userId: string;
  garmentId: string;
  garment: Garment;
  addedAt: Date;
}

export interface PoseQualityCheck {
  isGoodPose: boolean;
  isGoodLighting: boolean;
  isFaceVisible: boolean;
  isTorsoVisible: boolean;
  warnings: string[];
  score: number; // 0-100
}
