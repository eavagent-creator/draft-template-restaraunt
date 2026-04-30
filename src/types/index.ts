
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  tags?: string[];
  isAvailable: boolean;
}

export interface BusinessConfig {
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  hours: string[];
  socials: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  delivery: {
    available: boolean;
    fee: number;
    minOrder: number;
    estimatedTime: string;
  };
  pickup: {
    available: boolean;
    estimatedTime: string;
  };
  menu: MenuItem[];
  faqs: { question: string; answer: string }[];
}

export interface CartItem extends MenuItem {
  quantity: number;
  notes?: string;
}
