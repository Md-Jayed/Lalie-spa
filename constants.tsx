
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
    name: { en: 'Hand Paraffin', ar: 'برافين اليدين' },
    price: '143',
    duration: { en: '30 Min', ar: '٣٠ دقيقة' },
    image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=400&h=300&fit=crop'
  },
  {
    id: 's2',
    category: { en: 'Care', ar: 'عناية' },
    name: { en: 'Foot Paraffin', ar: 'برافين القدمين' },
    price: '143',
    duration: { en: '30 Min', ar: '٣٠ دقيقة' },
    image: 'https://images.unsplash.com/photo-1519415568184-e53805407000?q=80&w=400&h=300&fit=crop'
  },
  {
    id: 's3',
    category: { en: 'Nails', ar: 'الأظافر' },
    name: { en: 'Classic Manicure', ar: 'مانيكير كلاسيك' },
    price: '100',
    duration: { en: '30 Min', ar: '٣٠ دقيقة' },
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=400&h=300&fit=crop'
  },
  {
    id: 's4',
    category: { en: 'Nails', ar: 'الأظافر' },
    name: { en: 'Classic Pedicure', ar: 'باديكير كلاسيك' },
    price: '125',
    duration: { en: '30 Min', ar: '٣٠ دقيقة' },
    image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=400&h=300&fit=crop'
  },
  {
    id: 's5',
    category: { en: 'Lashes', ar: 'الرموش' },
    name: { en: 'Classic Lashes', ar: 'رموش كلاسيك' },
    price: '385',
    duration: { en: '120 Min', ar: '١٢٠ دقيقة' },
    image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=400&h=300&fit=crop'
  },
  {
    id: 's6',
    category: { en: 'Body Care', ar: 'عناية بالجسم' },
    name: { en: 'Face Cleaning (Razor)', ar: 'تنظيف الوجه (شفرة)' },
    price: '50',
    duration: { en: '30 Min', ar: '٣٠ دقيقة' },
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=400&h=300&fit=crop'
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
  'https://images.unsplash.com/photo-1544161515-4af6b1d4640b?q=80&w=800&fit=crop',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&fit=crop',
  'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800&fit=crop',
];

export const CONTACT_INFO = {
  address: "Sultan Mall, Al Batarji, Al Zahra, Jeddah 23522",
  phone: "0547738385",
  whatsapp: "966547738385",
  instagram: "laura_spa_jeddah",
  email: "info@lauraspa.com"
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
