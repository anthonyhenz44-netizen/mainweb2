
export interface Message {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
}
