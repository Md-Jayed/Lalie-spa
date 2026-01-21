
export type Language = 'en' | 'ar';

export interface NavItem {
  id: string;
  label: { en: string; ar: string };
}

export interface Service {
  id: string;
  category: { en: string; ar: string };
  name: { en: string; ar: string };
  price: string;
  duration: { en: string; ar: string };
  image: string;
}

export interface Package {
  id: string;
  name: { en: string; ar: string };
  price: string;
  duration: { en: string; ar: string };
  description: { en: string; ar: string };
}

export interface Translation {
  [key: string]: {
    en: string;
    ar: string;
  };
}
