import React, { useState, useEffect, useCallback } from 'react';
import { 
  Menu as MenuIcon, 
  X, 
  Globe, 
  Instagram, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ArrowRight, 
  ArrowLeft 
} from 'lucide-react';
import { Language } from './types';
import { content } from './translations';
import { 
  NAV_ITEMS, 
  SERVICES, 
  PACKAGES, 
  GALLERY_IMAGES, 
  CONTACT_INFO, 
  WORKING_HOURS
} from './constants';

// Declare AOS for global usage
declare var AOS: any;

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Update direction and font based on language
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Refresh AOS on language change as layout shifts
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

  // Initialize AOS
  useEffect(() => {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1200,
        once: true,
        easing: 'ease-in-out',
        offset: 100,
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

  const categories = ['all', ...Array.from(new Set(SERVICES.map(s => s.category.en)))];

  return (
    <div className={`min-h-screen bg-[#FDFCFB] text-gray-900 transition-colors duration-500 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      
      {/* Navigation */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md h-20 shadow-md' : 'bg-transparent h-24'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <a href="#home" className="flex-shrink-0 flex items-center transition-transform hover:scale-105" onClick={() => handleNavClick('home')}>
              <img 
                src="https://glamerastorage.b-cdn.net/CompanyImgs/1050971983681057%20(1)_20251015084921067.png" 
                alt="Lalie Spa Logo" 
                className={`h-12 w-auto transition-all ${!isScrolled && 'brightness-0 invert'}`}
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

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={toggleLang}
                className={`p-2 rounded-full border ${isScrolled ? 'border-gray-200 text-gray-800' : 'border-white/30 text-white'}`}
              >
                <Globe size={20} />
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)}>
          <div 
            className={`fixed top-0 bottom-0 ${lang === 'ar' ? 'left-0' : 'right-0'} w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-500 flex flex-col p-8 ${isMenuOpen ? 'translate-x-0' : (lang === 'ar' ? '-translate-x-full' : 'translate-x-full')}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-12">
              <img src="https://glamerastorage.b-cdn.net/CompanyImgs/1050971983681057%20(1)_20251015084921067.png" alt="Logo" className="h-10" />
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-gray-900"><X size={24} /></button>
            </div>
            <nav className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className="text-2xl font-serif text-gray-800 hover:text-[#C5A383] transition-colors border-b border-gray-50 pb-2"
                >
                  {item.label[lang]}
                </a>
              ))}
            </nav>
            <div className="mt-auto pt-8 border-t border-gray-100">
               <button 
                onClick={toggleLang}
                className="flex items-center gap-3 text-gray-800 font-bold uppercase tracking-widest text-sm"
              >
                <Globe size={20} className="text-[#C5A383]" />
                {lang === 'en' ? 'Switch to العربية' : 'التحويل إلى English'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-[95vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/45 z-10"></div>
          <img 
            src="https://i.ibb.co/tTngxrFr/Untitled-design-8.png" 
            alt="Lalie Spa Background" 
            className="w-full h-full object-cover scale-100 animate-[ken-burns_30s_infinite_alternate]"
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-5xl pt-20">
          <div 
            data-aos="fade"
            className="inline-block px-4 py-1 mb-6 border border-white/30 rounded-full text-white/90 text-[10px] tracking-[0.4em] uppercase backdrop-blur-sm"
          >
            {lang === 'en' ? 'Premier Wellness Destination' : 'وجهة الرفاهية الأولى'}
          </div>
          <h1 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 tracking-tight drop-shadow-2xl leading-[1.15]"
          >
            {t('heroTitle')}
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-base md:text-lg text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-light"
          >
            {t('heroSubtitle')}
          </p>
          <div 
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
              target="_blank"
              className="group bg-[#C5A383] hover:bg-[#B38D6A] text-white px-7 py-3 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2"
            >
              {t('bookNow')}
              <MessageCircle size={16} />
            </a>
            <a 
              href="#services" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/40 px-7 py-3 rounded-full text-sm font-medium transition-all hover:border-white"
            >
              {t('viewServices')}
            </a>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer" onClick={() => handleNavClick('about')}>
          <div className="w-7 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/80 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group" data-aos="zoom-in">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://glamerastorage.b-cdn.net/ServiceImgs/10_20251021053247725.jpg" 
                alt="Spa care" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div 
              data-aos="zoom-in"
              data-aos-delay="400"
              className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#F8F3F0] rounded-[2rem] hidden lg:flex flex-col items-center justify-center p-6 shadow-xl border-4 border-white"
            >
              <span className="text-4xl font-serif text-[#C5A383] mb-1">10+</span>
              <p className="text-center font-bold text-gray-800 text-[10px] uppercase tracking-widest">{lang === 'en' ? 'Years of Luxury' : 'سنوات من الفخامة'}</p>
            </div>
          </div>
          <div className="space-y-10" data-aos="fade-up">
            <div className="space-y-4">
              <div className="w-20 h-1 bg-[#C5A383]"></div>
              <h2 className="text-[#C5A383] font-bold tracking-[0.3em] uppercase text-sm">{t('aboutTitle')}</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-[1.1]">{lang === 'en' ? 'A Sanctuary for the Soul' : 'ملاذ للروح والجمال'}</h3>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed font-light">{t('aboutDesc')}</p>
            <div className="grid sm:grid-cols-2 gap-8 pt-6">
              <div 
                data-aos="fade-up"
                data-aos-delay="200"
                className="bg-[#F8F3F0]/50 p-8 rounded-[2rem] border border-transparent hover:border-[#C5A383]/20 transition-all"
              >
                <h4 className="text-xl font-serif font-bold text-gray-900 mb-3">{t('missionTitle')}</h4>
                <p className="text-gray-500 leading-relaxed text-sm font-light">{t('missionDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 bg-[#F8F3F0]/40 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4" data-aos="fade-up">
            <h2 className="text-[#C5A383] font-bold tracking-[0.3em] uppercase text-sm">{t('servicesTitle')}</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900">{lang === 'en' ? 'Exclusive Menu' : 'قائمة الخدمات الحصرية'}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, idx) => (
              <div 
                key={service.id} 
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 group border border-gray-50/50 flex flex-col"
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={service.image} alt={service.name[lang]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-xl font-serif text-gray-900 group-hover:text-[#C5A383] transition-colors leading-tight pr-4">{service.name[lang]}</h4>
                    <div className="text-right">
                       <span className="block text-xl font-serif text-gray-900 font-bold whitespace-nowrap">SAR {service.price}</span>
                    </div>
                  </div>
                  <button onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=I'd like to book ${service.name.en}`, '_blank')} className="mt-auto w-full py-3.5 rounded-2xl border border-gray-100 text-gray-900 font-bold uppercase tracking-widest text-xs hover:bg-[#C5A383] hover:text-white hover:border-[#C5A383] transition-all flex items-center justify-center gap-3">
                    {t('bookNow')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 bg-white border-t border-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
            <div className="space-y-16" data-aos="fade-up">
              <div className="space-y-4">
                <h2 className="text-[#C5A383] font-bold tracking-[0.3em] uppercase text-sm">{t('contactTitle')}</h2>
                <h3 className="text-4xl md:text-5xl font-serif text-gray-900 leading-[1.1]">{lang === 'en' ? 'Visit our Oasis' : 'تفضلي بزيارة واحتنا'}</h3>
              </div>
              <div className="space-y-10">
                <div className="flex items-start gap-6 group" data-aos="fade-up" data-aos-delay="200">
                  <div className="w-14 h-14 bg-[#F8F3F0] rounded-2xl flex items-center justify-center flex-shrink-0 text-[#C5A383] group-hover:bg-[#C5A383] group-hover:text-white transition-all"><MapPin size={28} /></div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-2 uppercase tracking-widest text-[10px]">{lang === 'en' ? 'Our Location' : 'موقعنا'}</h5>
                    <p className="text-gray-500 text-lg font-light leading-snug">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group" data-aos="fade-up" data-aos-delay="300">
                  <div className="w-14 h-14 bg-[#F8F3F0] rounded-2xl flex items-center justify-center flex-shrink-0 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all"><MessageCircle size={28} /></div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-2 uppercase tracking-widest text-[10px]">WhatsApp</h5>
                    <p className="text-gray-500 text-lg font-light">{CONTACT_INFO.phone}</p>
                  </div>
                </div>
              </div>
            </div>
            <div 
              className="h-full min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.664960391232!2d39.14208490000001!3d21.5989973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3db7ce1ba71bd%3A0x6069ec299c8f90cb!2zTGFsaWUgc3BhINmE2KfZhNmKINiz2KjYpw!5e0!3m2!1sen!2ssa!4v1769002112417!5m2!1sen!2ssa" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" title="Lalie Spa Map"
              ></iframe>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-32 pb-12 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start border-b border-white/5 pb-20 gap-16">
            <div className="space-y-10 max-w-sm" data-aos="fade">
              <img src="https://glamerastorage.b-cdn.net/CompanyImgs/1050971983681057%20(1)_20251015084921067.png" alt="Logo" className="h-20 brightness-0 invert" />
              <p className="text-gray-400 text-xl italic font-serif leading-relaxed">"{t('footerDesc')}"</p>
            </div>
            <div className="flex gap-6" data-aos="fade" data-aos-delay="200">
              <a href={`https://instagram.com/${CONTACT_INFO.instagram}`} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all"><Instagram size={24} /></a>
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all"><MessageCircle size={24} /></a>
            </div>
          </div>
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-[10px] uppercase tracking-widest font-bold">
            <p>&copy; {new Date().getFullYear()} Lalie Spa Jeddah. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[#C5A383] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#C5A383] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-10 left-0 w-full opacity-[0.03] select-none pointer-events-none whitespace-nowrap">
          <span className="text-[20vw] font-serif font-bold uppercase tracking-tighter">LALIE SPA JEDDAH</span>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ken-burns { from { transform: scale(1); } to { transform: scale(1.15); } }
      `}</style>
    </div>
  );
};

export default App;