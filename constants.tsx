
import { Service, Package, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: { en: 'Home', ar: 'الرئيسية' } },
  { id: 'about', label: { en: 'About', ar: 'من نحن' } },
  { id: 'services', label: { en: 'Services', ar: 'الخدمات' } },
  { id: 'gallery', label: { en: 'Gallery', ar: 'المعرض' } },
  { id: 'contact', label: { en: 'Contact', ar: 'اتصل بنا' } },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    category: { en: 'Care', ar: 'عناية' },
    name: { en: 'Hand Paraffin', ar: 'بكج البرافين' },
    price: '400',
    duration: { en: '120 Min', ar: '١٢٠ دقيقة' },
    image: 'https://glamerastorage.b-cdn.net/ServiceImgs/tbl_articles_article_29991_56572e0dd63-97fa-4352-ad5b-9d4bf83e00ee_20251021050957215.jpg'
  },
  {
    id: 's2',
    category: { en: 'Care', ar: 'عناية' },
    name: { en: 'Amber Package', ar: 'بكج الكهرمان' },
    price: '408',
    duration: { en: '120 Min', ar: '١٢٠ دقيقة' },
    image: 'https://glamerastorage.b-cdn.net/ServiceImgs/71YM27SS+gL_20251021051018154._SL1500__20251021051018154.jpg'
  },
  {
    id: 's3',
    category: { en: 'Nails', ar: 'الأظافر' },
    name: { en: 'Russian Manicure + Gel', ar: 'مانيكير روسي + لون جل' },
    price: '199',
    duration: { en: '60 Min', ar: '٦٠ دقيقة' },
    image: 'https://i.ibb.co/TB83b9rL/Untitled-design-9.png'
  },
  {
    id: 's4',
    category: { en: 'Lashes', ar: 'الرموش' },
    name: { en: 'Lashes lifting + brows lifting', ar: 'Lashes lifting+ brows lifting' },
    price: '300',
    duration: { en: '180 Min', ar: '١٨٠ دقيقة' },
    image: 'https://glamerastorage.b-cdn.net/ServiceImgs/x5zDEo8mjwveR69Mgnt3IHLlKDRCpiqpNn6JzcFt_20251021072917227.webp'
  },
  {
    id: 's5',
    category: { en: 'Nails', ar: 'الأظافر' },
    name: { en: 'Color with Design', ar: 'بكج لون مع ديزاين' },
    price: '200',
    duration: { en: '120 Min', ar: '١٢٠ دقيقة' },
    image: 'https://i.ibb.co/TB83b9rL/Untitled-design-9.png'
  },
  {
    id: 's6',
    category: { en: 'Body Care', ar: 'عناية بالجسم' },
    name: { en: 'Classic Pedicure + Monthly Lashes', ar: 'مناكير باديكير + رموش شهرية كلاسيك' },
    price: '500',
    duration: { en: '180 Min', ar: '١٨٠ دقيقة' },
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
  'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
];

export const CONTACT_INFO = {
  address: "Sultan Mall, Al Batarji, Al Zahra, Jeddah 23522",
  phone: "0547738385",
  whatsapp: "966547738385",
  instagram: "lalie.spa25",
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
