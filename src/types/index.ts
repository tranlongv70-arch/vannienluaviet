export type CostumeCategory = 
  | 'hair'
  | 'outerwear'
  | 'main'
  | 'underlayer'
  | 'bottom'
  | 'headwear'
  | 'accessory'
  | 'footwear'
  | 'background';

export type HistoricalPeriod = 
  | 'Thời kỳ Văn Lang - Âu Lạc (Thế kỷ VII TCN – 179 TCN)'
  | 'Thời kỳ Bắc thuộc & Ngô - Đinh - Tiền Lê (179 TCN – 1009)'
  | 'Thời Lý - Trần - Hồ (1009 – 1407)'
  | 'Thời Hậu Lê & Triều Mạc (1428 – 1789)'
  | 'Triều Tây Sơn (1778 – 1802)'
  | 'Triều Nguyễn (1802 – 1945)'
  | 'Thế kỷ XXI (TK XXI - Hiện Đại & Cách Tân)';

export type CulturalRegion = 
  | 'Đồng Bằng Sông Hồng'
  | 'Bắc Bộ'
  | 'Trung Bộ (Cung Đình Huế)'
  | 'Nam Bộ'
  | 'Tây Bắc & Đông Bắc'
  | 'Toàn Quốc (Đại Việt)'
  | 'Hiện Đại Đương Thời';

export interface CostumeItem {
  id: string;
  name: string;
  category: CostumeCategory;
  period: HistoricalPeriod;
  eraNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  region: CulturalRegion;
  gender: 'female' | 'male' | 'unisex';
  material: string;
  description: string;
  culturalSignificance: string; // Ý nghĩa văn hóa & triết lý nhân sinh
  historicalStory: string;       // Câu chuyện lịch sử gắn liền
  structuralFeatures: string;    // Đặc điểm cấu trúc, đường nét cắt may
  usagePurpose: string;          // Mục đích sử dụng (Lễ phục, Tiện phục, Quân phục...)
  defaultColor: string;
  availableColors: string[];
  patternType: 'lotus' | 'cloud' | 'phoenix' | 'dragon' | 'dongson' | 'brocade' | 'plain' | 'geometric';
  iconSvg?: string;
  imageThumbnail?: string;
}

export interface BackgroundScene {
  id: string;
  name: string;
  location: string;
  era: string;
  description: string;
  bgGradient: string;
  accentColor: string;
  previewUrl?: string;
}

export interface DressingState {
  id?: string;
  presetId?: string;
  fittingOutfit?: {
    hat: string | null;
    top: string | null;
    bottom: string | null;
    shoes: string | null;
  };
  name: string;
  gender: 'female' | 'male';
  hairId: string;
  outerwearId: string | null;
  mainId: string;
  underlayerId: string | null;
  bottomId: string;
  headwearId: string | null;
  accessoryId: string | null;
  footwearId: string;
  backgroundId: string;
  colors: {
    outerwear: string;
    main: string;
    underlayer: string;
    bottom: string;
    headwear: string;
  };
  pattern: string;
  createdAt?: string;
  author?: string;
}

export interface PresetOutfit {
  id: string;
  title: string;
  subtitle: string;
  period: HistoricalPeriod;
  eraNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  gender: 'female' | 'male';
  region: string;
  description: string;
  culturalSignificance: string;
  historicalStory: string;
  structuralFeatures: string;
  usagePurpose: string;
  dressingState: DressingState;
  culturalContext: string;
  featuredImage?: string;
}

export interface CommunityPost {
  id: string;
  title: string;
  author: string;
  avatar: string;
  date: string;
  likes: number;
  isLiked?: boolean;
  shares: number;
  commentsCount: number;
  description: string;
  dressingState: DressingState;
  tags: string[];
  comments: {
    id: string;
    user: string;
    avatar: string;
    text: string;
    time: string;
  }[];
}

export interface HeritageArticle {
  id: string;
  eraNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  title: string;
  subtitle: string;
  era: HistoricalPeriod;
  category: string;
  readTime: string;
  excerpt: string;
  contentParagraphs: string[];
  quote: string;
  quoteAuthor: string;
  imageUrl?: string;
  craftVillages?: string[];
  symbolismKeypoints: {
    element: string;
    meaning: string;
  }[];
}
