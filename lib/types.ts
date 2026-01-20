export interface CarConfig {
  paint: string;
  wheels: string;
  env: string;
  cam: string;
}

export interface Build {
  id: string;
  name: string;
  config: CarConfig;
  thumbnail?: string;
  createdAt: string;
}

export const DEFAULT_CONFIG: CarConfig = {
  paint: 'red',
  wheels: 'sport',
  env: 'studio',
  cam: 'default'
};

export const PAINT_OPTIONS = [
  { value: 'red', label: 'Red', color: 'bg-red-500' },
  { value: 'blue', label: 'Blue', color: 'bg-blue-500' },
  { value: 'black', label: 'Black', color: 'bg-black' },
  { value: 'white', label: 'White', color: 'bg-white' },
  { value: 'silver', label: 'Silver', color: 'bg-gray-400' }
];

export const WHEEL_OPTIONS = [
  { value: 'sport', label: 'Sport' },
  { value: 'luxury', label: 'Luxury' },
  { value: 'performance', label: 'Performance' }
];

export const ENV_OPTIONS = [
  { value: 'studio', label: 'Studio' },
  { value: 'outdoor', label: 'Outdoor' },
  { value: 'night', label: 'Night' }
];

export const CAM_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'front', label: 'Front' },
  { value: 'side', label: 'Side' },
  { value: 'rear', label: 'Rear' }
];