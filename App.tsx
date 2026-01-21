import React, { useState, useEffect, useCallback } from 'react';
import { 
  Menu as MenuIcon, 
  X, 
  Globe, 
  Instagram, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Plus,
  Sparkles
} from 'lucide-react';
import { Language } from './types';
import { content } from './translations';
import { 
  NAV_ITEMS, 
  SERVICES, 
  GALLERY_IMAGES, 
  CONTACT_INFO, 
  WORKING_HOURS
} from './constants';

// Declare AOS for global usage
declare var AOS: any;

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMainTab, setActiveMainTab] = useState('service');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Categories derived from data
  const categories = ['all', ...Array.from(new Set(SERVICES.map(s => s.category.en)))];

  // Update direction and font based on language
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, [lang]);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Initialize AOS
  useEffect(() => {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1200,
        once: true,
        easing: 'ease-in-out',
        offset: 50,
        delay: 50,
      });
    }
  }, []);

  const t = useCallback((key: string) => content[key] ? content[key][lang] : key, [lang]);

  const toggleLang = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
  };

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category.en === activeCategory);

  return (
    <div className={`min-h-screen bg-[#FDFCFB] text-gray-900 transition-colors duration-500 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      
      {/* Navigation */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md h-20 shadow-md' : 'bg-transparent h-24'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <a href="#home" className="flex-shrink-0 flex items-center transition-transform hover:scale-105" onClick={() => handleNavClick('home')}>
              <img 
                src="https://glamerastorage.b-cdn.net/CompanyImgs/1050971983681057%20(1)_20251015084921067.png" 
                alt="Lalie Spa Logo" 
                className={`h-12 w-auto transition-all ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`}
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`transition-colors font-medium text-xs tracking-[0.2em] uppercase ${isScrolled ? 'text-gray-600 hover:text-[#C5A383]' : 'text-white/90 hover:text-white'}`}
                >
                  {item.label[lang]}
                </a>
              ))}
              <button 
                onClick={toggleLang}
                className={`flex items-center space-x-2 rtl:space-x-reverse px-5 py-2 rounded-full border transition-all ${isScrolled ? 'border-gray-200 text-gray-800 hover:bg-gray-50' : 'border-white/30 text-white hover:bg-white/10'}`}
              >
                <Globe size={16} className="text-[#C5A383]" />
                <span className="font-bold text-xs uppercase tracking-widest">{lang === 'en' ? 'العربية' : 'English'}</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center gap-2">
              <button onClick={toggleLang} className={`p-2 rounded-full border transition-colors ${isScrolled ? 'border-gray-200 text-gray-800' : 'border-white/30 text-white'}`}>
                <Globe size={20} />
              </button>
              <button onClick={() => setIsMenuOpen(true)} className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                <MenuIcon size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-[999] transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`fixed top-0 bottom-0 ${lang === 'ar' ? 'left-0' : 'right-0'} w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 flex flex-col ${isMenuOpen ? 'translate-x-0' : (lang === 'ar' ? '-translate-x-full' : 'translate-x-full')}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 flex justify-between items-center border-b border-gray-100">
            <img src="https://glamerastorage.b-cdn.net/CompanyImgs/1050971983681057%20(1)_20251015084921067.png" alt="Logo" className="h-10" />
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X size={32} />
            </button>
          </div>

          <nav className="flex-grow flex flex-col p-8 gap-8 mt-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className="text-3xl font-serif text-gray-800 hover:text-[#C5A383] transition-colors border-b border-gray-50 pb-4 flex justify-between items-center"
              >
                {item.label[lang]}
                <span className="text-gray-300 text-lg">→</span>
              </a>
            ))}
          </nav>

          <div className="p-8 border-t border-gray-100 bg-gray-50/50 space-y-6">
             <button 
              onClick={toggleLang}
              className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 py-4 rounded-2xl shadow-sm text-gray-800 font-bold uppercase tracking-widest text-sm hover:border-[#C5A383] transition-all"
            >
              <Globe size={20} className="text-[#C5A383]" />
              {lang === 'en' ? 'SWITCH TO العربية' : 'التحويل إلى English'}
            </button>
            <div className="flex justify-center gap-6 text-gray-400">
               <a href={`https://instagram.com/${CONTACT_INFO.instagram}`} target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
               <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle size={24} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <header id="home" className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src="https://i.ibb.co/tTngxrFr/Untitled-design-8.png" 
            alt="Hero" 
            className="w-full h-full object-cover animate-[ken-burns_30s_infinite_alternate]"
          />
        </div>
        <div className="relative z-20 text-center px-4 pt-20" data-aos="fade">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 drop-shadow-xl leading-tight">{t('heroTitle')}</h1>
          <p className="text-white/90 mb-10 max-w-2xl mx-auto font-light">{t('heroSubtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" className="bg-[#C5A383] text-white px-8 py-3 rounded-full text-sm font-bold transition-all hover:bg-[#B38D6A]">{t('bookNow')}</a>
            <a href="#services" className="bg-white/10 backdrop-blur-md text-white border border-white/40 px-8 py-3 rounded-full text-sm font-medium">Explore Services</a>
          </div>
        </div>
      </header>

      {/* Our Story Section */}
      <section id="about" className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative" data-aos="fade-right">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://glamerastorage.b-cdn.net/ServiceImgs/10_20251021053247725.jpg" 
                alt="Our Story" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-32 h-32 md:w-48 md:h-48 bg-[#F8F3F0] rounded-3xl flex flex-col items-center justify-center p-4 shadow-xl border-4 border-white">
              <span className="text-3xl md:text-5xl font-serif text-[#C5A383]">10+</span>
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-center font-bold mt-1">{lang === 'en' ? 'Years of Luxury' : 'سنوات من الفخامة'}</p>
            </div>
          </div>
          <div className="space-y-8" data-aos="fade-left">
            <div className="space-y-4">
              <div className="w-16 h-1 bg-[#C5A383]"></div>
              <h2 className="text-[#C5A383] font-bold tracking-[0.3em] uppercase text-xs">{t('aboutTitle')}</h2>
              <h3 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
                {lang === 'en' ? 'A Sanctuary for the Soul' : 'ملاذ للروح والجمال'}
              </h3>
            </div>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              {t('aboutDesc')}
            </p>
            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              <div className="bg-[#F8F3F0]/60 p-6 rounded-2xl border border-transparent hover:border-[#C5A383]/10 transition-all">
                <h4 className="text-xl font-serif font-bold text-gray-900 mb-2">{t('missionTitle')}</h4>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{t('missionDesc')}</p>
              </div>
              <div className="bg-[#F8F3F0]/60 p-6 rounded-2xl border border-transparent hover:border-[#C5A383]/10 transition-all">
                <h4 className="text-xl font-serif font-bold text-gray-900 mb-2">{lang === 'en' ? 'Our Values' : 'قيمنا'}</h4>
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  {lang === 'en' ? 'Integrity, excellence, and a commitment to personalized care for every guest.' : 'النزاهة والتميز والالتزام بالرعاية الشخصية لكل ضيفة.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-[#F8F3F0]/30">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex items-center space-x-12 rtl:space-x-reverse mb-8 border-b border-gray-100 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {['service', 'package', 'giftCard'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveMainTab(tab)}
                className={`pb-4 text-lg font-medium transition-all relative ${activeMainTab === tab ? 'text-black' : 'text-gray-400'}`}
              >
                {tab === 'service' ? (lang === 'en' ? 'Service' : 'الخدمة') : 
                 tab === 'package' ? (lang === 'en' ? 'Package' : 'الباقات') : 
                 (lang === 'en' ? 'Gift Card' : 'بطاقة هدية')}
                {activeMainTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black rounded-full" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-4 whitespace-nowrap scrollbar-hide no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all border ${
                  activeCategory === cat 
                  ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]' 
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                }`}
              >
                {cat === 'all' ? (lang === 'en' ? 'All' : 'الكل') : 
                 SERVICES.find(s => s.category.en === cat)?.category[lang] || cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredServices.map((service, idx) => (
              <div 
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={idx * 50}
                className="bg-white rounded-xl p-3 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-50 flex gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-lg overflow-hidden">
                  <img src={service.image} alt={service.name[lang]} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col flex-grow py-1">
                  <h4 className="text-[15px] font-bold text-gray-900 mb-1">{service.name[lang]}</h4>
                  <p className="text-[12px] text-gray-400 mb-auto">{service.duration[lang]}</p>
                  
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium">SAR</span>
                      <span className="text-lg font-bold">{service.price}</span>
                    </div>
                    <button 
                      onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=Booking request for ${service.name.en}`, '_blank')}
                      className="w-9 h-9 bg-[#E2E8E4] hover:bg-[#C5A383] text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade">
             <h2 className="text-[#C5A383] font-bold tracking-[0.3em] uppercase text-xs mb-2">{t('galleryTitle')}</h2>
             <h3 className="text-4xl font-serif text-gray-900">{lang === 'en' ? 'Lalie Essence' : 'جوهر لالي'}</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <div key={i} data-aos="zoom-in" data-aos-delay={i*50} className="aspect-square rounded-2xl overflow-hidden shadow-md">
                <img src={img} alt="Spa" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Contact Section - Matches Reference Image */}
      <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:items-center">
          
          {/* Left Side: Contact Info */}
          <div className="flex-1 space-y-12" data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              {t('contactTitle')}
            </h2>
            
            <div className="space-y-10">
              {/* Location */}
              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 mt-1">
                  <MapPin size={28} className="text-[#C5A383] group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-gray-600 text-lg leading-relaxed font-light">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 mt-1">
                  <MessageCircle size={28} className="text-[#25D366] group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 text-lg leading-relaxed font-light hover:text-[#C5A383] transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Map */}
          <div className="flex-1 lg:h-[500px]" data-aos="zoom-in">
            <div className="w-full h-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] relative border-[12px] border-gray-50/30">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.664960391232!2d39.14208490000001!3d21.5989973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3db7ce1ba71bd%3A0x6069ec299c8f90cb!2zTGFsaWUgc3BhINmE2KfZhNmKINiz2KjYpw!5e0!3m2!1sen!2ssa!4v1769002112417!5m2!1sen!2ssa" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Map"
                className="grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-white/5 pb-16">
          <div className="space-y-6">
            <img src="https://glamerastorage.b-cdn.net/CompanyImgs/1050971983681057%20(1)_20251015084921067.png" alt="Logo" className="h-16 brightness-0 invert" />
            <p className="text-gray-400 font-serif italic">"{t('footerDesc')}"</p>
          </div>
          <div>
            <h4 className="text-[#C5A383] font-serif text-lg mb-6 uppercase tracking-widest">{t('workingHours')}</h4>
            <div className="space-y-3">
              {WORKING_HOURS.map((h, i) => (
                <div key={i} className="flex justify-between text-sm border-b border-white/5 pb-1">
                  <span className="text-gray-400">{h.day[lang]}</span>
                  <span className={typeof h.hours === 'object' && h.hours.en === 'Closed' ? 'text-red-400' : 'text-gray-500'}>
                    {typeof h.hours === 'string' ? h.hours : h.hours[lang]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-[#C5A383] font-serif text-lg uppercase tracking-widest">{lang === 'en' ? 'Connect' : 'تواصل'}</h4>
            <div className="flex gap-4">
              <a href={`https://instagram.com/${CONTACT_INFO.instagram}`} target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all"><Instagram size={18} /></a>
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all"><MessageCircle size={18} /></a>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-600 text-[10px] mt-10 uppercase tracking-widest">&copy; {new Date().getFullYear()} Lalie Spa Jeddah. All Rights Reserved.</p>
      </footer>

      <style>{`
        @keyframes ken-burns { from { transform: scale(1); } to { transform: scale(1.1); } }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default App;