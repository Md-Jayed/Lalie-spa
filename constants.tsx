
import { Service, Package, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: { en: 'Home', ar: 'الرئيسية' } },
  { id: 'about', label: { en: 'About', ar: 'من نحن' } },
  { id: 'services', label: { en: 'Services', ar: 'الخدمات' } },
  { id: 'packages', label: { en: 'Packages', ar: 'الباقات' } },
  { id: 'gallery', label: { en: 'Gallery', ar: 'المعرض' } },
  { id: 'contact', label: { en: 'Contact', ar: 'اتصل بنا' } },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    category: { en: 'Care', ar: 'عناية' },
    name: { en: 'Hand Paraffin', ar: 'شمع البارافين اليدوي' },
    price: '143',
    duration: { en: '30 Min', ar: '٣٠ دقيقة' },
    image: 'https://glamerastorage.b-cdn.net/ServiceImgs/tbl_articles_article_29991_56572e0dd63-97fa-4352-ad5b-9d4bf83e00ee_20251021050957215.jpg'
  },
  {
    id: 's2',
    category: { en: 'Care', ar: 'عناية' },
    name: { en: 'Foot Paraffin', ar: 'برافين القدمين' },
    price: '143',
    duration: { en: '30 Min', ar: '٣٠ دقيقة' },
    image: 'https://glamerastorage.b-cdn.net/ServiceImgs/71YM27SS+gL_20251021051018154._SL1500__20251021051018154.jpg'
  },
  {
    id: 's3',
    category: { en: 'Nails', ar: 'الأظافر' },
    name: { en: 'Classic Manicure', ar: 'مانيكير كلاسيك' },
    price: '100',
    duration: { en: '30 Min', ar: '٣٠ دقيقة' },
    image: 'https://i.ibb.co/TB83b9rL/Untitled-design-9.png'
  },
  {
    id: 's4',
    category: { en: 'Nails', ar: 'الأظافر' },
    name: { en: 'Classic Pedicure', ar: 'باديكير كلاسيك' },
    price: '125',
    duration: { en: '30 Min', ar: '٣٠ دقيقة' },
    image: 'https://i.ibb.co/TB83b9rL/Untitled-design-9.png'
  },
  {
    id: 's5',
    category: { en: 'Lashes', ar: 'الرموش' },
    name: { en: 'Classic Lashes', ar: 'رموش كلاسيك' },
    price: '385',
    duration: { en: '120 Min', ar: '١٢٠ دقيقة' },
    image: 'https://glamerastorage.b-cdn.net/ServiceImgs/x5zDEo8mjwveR69Mgnt3IHLlKDRCpiqpNn6JzcFt_20251021072917227.webp'
  },
  {
    id: 's6',
    category: { en: 'Body Care', ar: 'عناية بالجسم' },
    name: { en: 'Face Cleaning (Razor)', ar: 'تنظيف الوجه (شفرة)' },
    price: '50',
    duration: { en: '30 Min', ar: '٣٠ دقيقة' },
    image: 'https://glamerastorage.b-cdn.net/ServiceImgs/7d4b5728-6aa5-4c7b-b5d5-befbf0f30e2f_20251021092335822.__CR0,0,1500,1500_PT0_SX300_V1____20251021092335822.jpg'
  },
];

export const PACKAGES: Package[] = [
  {
    id: 'p1',
    name: { en: 'Paraffin Package', ar: 'بكج البرافين' },
    price: '400',
    duration: { en: '120 Min', ar: '١٢٠ دقيقة' },
    description: { en: 'Intense hydration for hands and feet with our signature paraffin treatment.', ar: 'ترطيب عميق لليدين والقدمين مع علاج البرافين الخاص بنا.' }
  },
  {
    id: 'p2',
    name: { en: 'Glow Up Package', ar: 'بكج التوهج' },
    price: '199',
    duration: { en: '60 Min', ar: '٦٠ دقيقة' },
    description: { en: 'Russian manicure and gel color for a stunning finish.', ar: 'مانيكير روسي ولون جل للحصول على لمسة نهائية مذهلة.' }
  },
  {
    id: 'p3',
    name: { en: 'Full Lash & Brows', ar: 'بكج الرموش والحواجب' },
    price: '300',
    duration: { en: '180 Min', ar: '١٨٠ دقيقة' },
    description: { en: 'Complete lift and tint for both lashes and brows.', ar: 'رفع وصبغ كامل لكل من الرموش والحواجب.' }
  },
];

export const GALLERY_IMAGES = [
  'https://glamerastorage.b-cdn.net/ServiceImgs/10_20251021053247725.jpg',
  'https://glamerastorage.b-cdn.net/ServiceImgs/20_20251021053114819.jpg',
  'https://glamerastorage.b-cdn.net/ServiceImgs/30_20251021053302561.jpg',
  'https://glamerastorage.b-cdn.net/ServiceImgs/40_20251021053320109.jpg',
  'https://glamerastorage.b-cdn.net/ServiceImgs/50_20251021053335337.jpg',
  'https://instagram.fjed4-4.fna.fbcdn.net/v/t51.82787-15/613133981_17896153998381351_7499967859252912274_n.jpg?stp=dst-jpg_e35_p480x480_tt6&_nc_cat=108&ig_cache_key=MzgxNDE1OTAxNDA3OTM1ODAwNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNDl4MTY4NS5zZHIuQzMifQ%3D%3D&_nc_ohc=DOVXJIYfM2EQ7kNvwHORB8Y&_nc_oc=AdnAZrXfvflYRXcH65Bid8ZmWTM0f1PwSjSbVfdNuNdUedtyRNgNyXDMJSrZedMke7YMzvb5NnSQ05spmoiQDN_N&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fjed4-4.fna&_nc_gid=m6CSNVAI94BWNGXlLX9KvA&oh=00_Afp60tCaGkGGJuZHeKUZ_4mbXeuP6_Sc7PigJAEelz1zjA&oe=6976941C',
];

export const CONTACT_INFO = {
  address: "Sultan Mall, Al Batarji, Al Zahra, Jeddah 23522",
  phone: "0547738385",
  whatsapp: "966547738385",
  instagram: "laliespa_jeddah",
  email: "info@laliespa.com"
};

export const WORKING_HOURS = [
  { day: { en: 'Wednesday', ar: 'الأربعاء' }, hours: '2–10 PM' },
  { day: { en: 'Thursday', ar: 'الخميس' }, hours: '2–10 PM' },
  { day: { en: 'Friday', ar: 'الجمعة' }, hours: { en: 'Closed', ar: 'مغلق' } },
  { day: { en: 'Saturday', ar: 'السبت' }, hours: '2–10 PM' },
  { day: { en: 'Sunday', ar: 'الأحد' }, hours: '2–10 PM' },
  { day: { en: 'Monday', ar: 'الاثنين' }, hours: '2–10 PM' },
  { day: { en: 'Tuesday', ar: 'الثلاثاء' }, hours: '2–10 PM' },
];
