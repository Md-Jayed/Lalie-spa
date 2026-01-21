
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

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isScrolled, setIsScrolled] = useState(false);

  // Update direction and font based on language
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = useCallback((key: string) => content[key] ? content[key][lang] : key, [lang]);

  const toggleLang = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    // Native smooth scroll using hash handled by scroll-padding-top in CSS
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

        {/* Mobile Sidebar Overlay */}
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

            <div className="mt-auto pt-10 border-t border-gray-100 flex flex-col gap-6">
               <button 
                onClick={toggleLang}
                className="flex items-center gap-3 text-gray-800 font-bold"
              >
                <Globe size={20} className="text-[#C5A383]" />
                {lang === 'en' ? 'Switch to العربية' : 'التحويل إلى English'}
              </button>
              <div className="flex gap-4">
                <a href={`https://instagram.com/${CONTACT_INFO.instagram}`} target="_blank" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#C5A383] hover:bg-[#C5A383] hover:text-white transition-all"><Instagram size={20} /></a>
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all"><MessageCircle size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-[95vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          {/* Using provided flyer images as a background slider or static featured image */}
          <img 
            src="https://glamerastorage.b-cdn.net/ServiceImgs/30_20251021053302561.jpg" 
            alt="Spa flyer background" 
            className="w-full h-full object-cover scale-100 animate-[ken-burns_30s_infinite_alternate]"
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-5xl pt-20">
          <div className="inline-block px-4 py-1 mb-6 border border-white/30 rounded-full text-white/90 text-xs tracking-[0.4em] uppercase backdrop-blur-sm animate-[fade-in-up_1s_ease-out_forwards]">
            {lang === 'en' ? 'Premier Wellness Destination' : 'وجهة الرفاهية الأولى'}
          </div>
          <h1 className="text-6xl md:text-9xl font-serif text-white mb-8 tracking-tight drop-shadow-2xl opacity-0 animate-[fade-in-up_1s_ease-out_0.2s_forwards] leading-[1.1]">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md opacity-0 animate-[fade-in-up_1s_ease-out_0.4s_forwards] font-light">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-[fade-in-up_1s_ease-out_0.6s_forwards]">
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
              target="_blank"
              className="group bg-[#C5A383] hover:bg-[#B38D6A] text-white px-12 py-5 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3"
            >
              {t('bookNow')}
              <MessageCircle size={20} />
            </a>
            <a 
              href="#services" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/40 px-12 py-5 rounded-full text-lg font-medium transition-all hover:border-white"
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
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://glamerastorage.b-cdn.net/ServiceImgs/10_20251021053247725.jpg" 
                alt="Spa care flyer" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#F8F3F0] rounded-[2.5rem] flex flex-col items-center justify-center p-8 shadow-2xl hidden xl:flex border-8 border-white">
              <span className="text-5xl font-serif text-[#C5A383] mb-2">10+</span>
              <p className="text-center font-bold text-gray-800 text-sm uppercase tracking-widest">
                {lang === 'en' ? 'Years of Luxury' : 'سنوات من الفخامة'}
              </p>
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="w-20 h-1 bg-[#C5A383]"></div>
              <h2 className="text-[#C5A383] font-bold tracking-[0.3em] uppercase text-sm">{t('aboutTitle')}</h2>
              <h3 className="text-5xl md:text-6xl font-serif text-gray-900 leading-[1.1]">
                {lang === 'en' ? 'A Sanctuary for the Soul' : 'ملاذ للروح والجمال'}
              </h3>
            </div>
            <p className="text-gray-500 text-xl leading-relaxed font-light">
              {t('aboutDesc')}
            </p>
            <div className="grid sm:grid-cols-2 gap-8 pt-6">
              <div className="bg-[#F8F3F0]/50 p-8 rounded-[2rem] hover:bg-[#F8F3F0] transition-colors border border-transparent hover:border-[#C5A383]/20">
                <h4 className="text-xl font-serif font-bold text-gray-900 mb-3">{t('missionTitle')}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">{t('missionDesc')}</p>
              </div>
              <div className="bg-[#F8F3F0]/50 p-8 rounded-[2rem] hover:bg-[#F8F3F0] transition-colors border border-transparent hover:border-[#C5A383]/20">
                <h4 className="text-xl font-serif font-bold text-gray-900 mb-3">{lang === 'en' ? 'Our Values' : 'قيمنا'}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {lang === 'en' ? 'Excellence in hygiene, premium products, and personalized care for every guest.' : 'التميز في النظافة، والمنتجات الفاخرة، والعناية الشخصية لكل ضيفة.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 bg-[#F8F3F0]/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-[#C5A383] font-bold tracking-[0.3em] uppercase text-sm">{t('servicesTitle')}</h2>
            <h3 className="text-5xl md:text-6xl font-serif text-gray-900">{lang === 'en' ? 'Exclusive Menu' : 'قائمة الخدمات الحصرية'}</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full transition-all text-sm font-bold uppercase tracking-widest border ${
                  activeCategory === cat 
                  ? 'bg-gray-900 text-white border-gray-900 shadow-xl' 
                  : 'bg-white text-gray-400 border-gray-100 hover:border-[#C5A383] hover:text-[#C5A383]'
                }`}
              >
                {cat === 'all' ? (lang === 'en' ? 'All Services' : 'جميع الخدمات') : cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.filter(s => activeCategory === 'all' || s.category.en === activeCategory).map((service) => (
              <div key={service.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 group border border-gray-50/50 flex flex-col">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name[lang]} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className={`absolute top-6 ${lang === 'ar' ? 'right-6' : 'left-6'} bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black text-[#C5A383] uppercase tracking-widest shadow-lg`}>
                    {service.category[lang]}
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-2xl font-serif text-gray-900 group-hover:text-[#C5A383] transition-colors leading-tight pr-4">{service.name[lang]}</h4>
                    <div className="text-right">
                       <span className="block text-2xl font-serif text-gray-900 font-bold">SAR {service.price}</span>
                       <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">inc. tax</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 text-xs mb-8 font-medium">
                    <Clock size={14} className={`${lang === 'ar' ? 'ml-2' : 'mr-2'}`} />
                    <span>{service.duration[lang]}</span>
                  </div>
                  <button 
                    onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=I'd like to book ${service.name.en}`, '_blank')}
                    className="mt-auto w-full py-4 rounded-2xl border border-gray-100 text-gray-900 font-bold uppercase tracking-widest text-xs hover:bg-[#C5A383] hover:text-white hover:border-[#C5A383] transition-all flex items-center justify-center gap-3 group/btn shadow-sm"
                  >
                    {t('bookNow')}
                    {lang === 'en' ? <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" /> : <ArrowLeft size={16} className="transition-transform group-hover/btn:-translate-x-1" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-32 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-[#C5A383] font-bold tracking-[0.3em] uppercase text-sm">{t('packagesTitle')}</h2>
                <h3 className="text-5xl font-serif text-gray-900 leading-[1.1]">{lang === 'en' ? 'Curated Luxury Experiences' : 'تجارب فخامة مختارة'}</h3>
              </div>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                {lang === 'en' ? 'Our packages combine multiple signature treatments to offer significant value and a truly immersive wellness session.' : 'تجمع باقاتنا بين علاجات مميزة متعددة لتقديم قيمة كبيرة وجلسة رفاهية غامرة حقاً.'}
              </p>
              <div className="p-8 bg-[#F8F3F0] rounded-[2.5rem] border-r-8 border-[#C5A383] rtl:border-r-0 rtl:border-l-8">
                <p className="text-gray-800 font-medium italic">
                  {lang === 'en' ? `"Perfect for gifts or special occasions. Treat your loved ones to Lalie Spa."` : `"مثالي للهدايا أو المناسبات الخاصة. دللي أحبائك في لالي سبا."`}
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
              {PACKAGES.map((pkg, idx) => (
                <div key={pkg.id} className={`relative p-10 rounded-[3rem] transition-all group shadow-sm hover:shadow-2xl flex flex-col ${idx === 0 ? 'bg-gray-900 text-white' : 'bg-[#FDFCFB] border border-gray-100'}`}>
                  <h4 className={`text-2xl font-serif mb-2 ${idx === 0 ? 'text-white' : 'text-gray-900'}`}>{pkg.name[lang]}</h4>
                  <div className={`text-4xl font-serif font-bold mb-6 ${idx === 0 ? 'text-[#C5A383]' : 'text-gray-900'}`}>SAR {pkg.price}</div>
                  <p className={`text-sm mb-8 leading-relaxed font-light ${idx === 0 ? 'text-gray-400' : 'text-gray-500'}`}>
                    {pkg.description[lang]}
                  </p>
                  <button 
                    onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=I'd like to book package: ${pkg.name.en}`, '_blank')}
                    className={`mt-auto w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all ${idx === 0 ? 'bg-[#C5A383] text-white hover:bg-white hover:text-gray-900' : 'bg-gray-900 text-white hover:bg-[#C5A383]'}`}
                  >
                    {t('bookNow')}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 px-4 bg-[#F8F3F0]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-[#C5A383] font-bold tracking-[0.3em] uppercase text-sm">{t('galleryTitle')}</h2>
            <h3 className="text-5xl md:text-6xl font-serif text-gray-900">{lang === 'en' ? 'Lalie Spa Gallery' : 'معرض لالي سبا'}</h3>
          </div>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {GALLERY_IMAGES.map((img, idx) => (
              <div key={idx} className="break-inside-avoid rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 group relative">
                <img 
                  src={img} 
                  alt={`Gallery item ${idx}`} 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center text-white backdrop-blur-sm">
                      <ArrowRight className={`${lang === 'ar' ? 'rotate-180' : ''}`} />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <div className="space-y-16">
              <div className="space-y-4">
                <h2 className="text-[#C5A383] font-bold tracking-[0.3em] uppercase text-sm">{t('contactTitle')}</h2>
                <h3 className="text-5xl md:text-6xl font-serif text-gray-900 leading-[1.1]">{lang === 'en' ? 'Visit our Oasis' : 'تفضلي بزيارة واحتنا'}</h3>
              </div>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-[#F8F3F0] rounded-2xl flex items-center justify-center flex-shrink-0 text-[#C5A383] group-hover:bg-[#C5A383] group-hover:text-white transition-all duration-300">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-2 uppercase tracking-widest text-sm">{lang === 'en' ? 'Our Location' : 'موقعنا'}</h5>
                    <p className="text-gray-500 text-lg font-light leading-relaxed">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-[#F8F3F0] rounded-2xl flex items-center justify-center flex-shrink-0 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300">
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-2 uppercase tracking-widest text-sm">WhatsApp</h5>
                    <p className="text-gray-500 text-lg font-light leading-relaxed">{CONTACT_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-[#F8F3F0] rounded-2xl flex items-center justify-center flex-shrink-0 text-[#C5A383] group-hover:bg-[#C5A383] group-hover:text-white transition-all duration-300">
                    <Clock size={28} />
                  </div>
                  <div className="w-full">
                    <h5 className="font-bold text-gray-900 mb-4 uppercase tracking-widest text-sm">{t('workingHours')}</h5>
                    <div className="space-y-3 max-w-sm">
                      {WORKING_HOURS.map((wh, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                          <span className="text-gray-400 font-medium">{wh.day[lang]}</span>
                          <span className={`font-bold ${typeof wh.hours === 'string' ? 'text-gray-900' : 'text-[#C5A383]'}`}>
                            {typeof wh.hours === 'string' ? wh.hours : wh.hours[lang]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-[#F8F3F0] rounded-[3.5rem] -z-10 rotate-3"></div>
              <div className="h-full min-h-[600px] rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.995098939634!2d39.12456307525203!3d21.62483108018679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3da4369e8b919%3A0xe54359560f787e9!2sSultan%20Mall!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  title="Google Maps Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-32 pb-12 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-12 gap-16 pb-20 border-b border-white/5">
            <div className="md:col-span-5 space-y-10">
              <img 
                src="https://glamerastorage.b-cdn.net/CompanyImgs/1050971983681057%20(1)_20251015084921067.png" 
                alt="Logo" 
                className="h-20 w-auto brightness-0 invert" 
              />
              <p className="text-gray-400 max-w-sm text-xl italic font-serif leading-relaxed">
                "{t('footerDesc')}"
              </p>
              <div className="flex gap-6">
                <a href={`https://instagram.com/${CONTACT_INFO.instagram}`} target="_blank" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-500"><Instagram size={24} /></a>
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-500"><MessageCircle size={24} /></a>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <h6 className="text-xs font-bold mb-10 text-[#C5A383] uppercase tracking-[0.3em]">{lang === 'en' ? 'Discover' : 'اكتشفي'}</h6>
              <ul className="space-y-6">
                {NAV_ITEMS.map(item => (
                  <li key={item.id}><a href={`#${item.id}`} className="text-gray-400 hover:text-white transition-colors text-lg font-light" onClick={() => handleNavClick(item.id)}>{item.label[lang]}</a></li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h6 className="text-xs font-bold mb-10 text-[#C5A383] uppercase tracking-[0.3em]">{lang === 'en' ? 'Newsletter' : 'النشرة البريدية'}</h6>
              <p className="text-gray-400 mb-8 font-light leading-relaxed">{lang === 'en' ? 'Subscribe to receive exclusive offers and wellness tips.' : 'اشتركي للحصول على عروض حصرية ونصائح للرفاهية.'}</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder={lang === 'en' ? 'Email Address' : 'البريد الإلكتروني'} 
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex-grow focus:outline-none focus:border-[#C5A383] text-sm"
                />
                <button className="bg-[#C5A383] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#b38d6a] transition-all"><ArrowRight className={`${lang === 'ar' ? 'rotate-180' : ''}`} /></button>
              </div>
            </div>
          </div>
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm font-medium">
            <p>&copy; {new Date().getFullYear()} Lalie Spa. Jeddah, Saudi Arabia.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">{lang === 'en' ? 'Privacy' : 'الخصوصية'}</a>
              <a href="#" className="hover:text-white transition-colors">{lang === 'en' ? 'Terms' : 'الشروط'}</a>
            </div>
          </div>
        </div>
        {/* Background Decorative Text */}
        <div className="absolute -bottom-10 left-0 w-full opacity-[0.03] select-none pointer-events-none overflow-hidden whitespace-nowrap">
           <span className="text-[20vw] font-serif font-bold uppercase tracking-tighter">LALIE SPA JEDDAH</span>
        </div>
      </footer>

      {/* Fixed Call Button (Mobile) */}
      <a 
        href={`tel:${CONTACT_INFO.phone}`}
        className="md:hidden fixed bottom-24 right-8 z-[90] bg-gray-900 text-white p-4 rounded-full shadow-2xl transition-all"
      >
        <ArrowRight className="-rotate-45" size={28} />
      </a>

      {/* Global CSS for animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes ken-burns {
          from { transform: scale(1) rotate(0.01deg); }
          to { transform: scale(1.15) rotate(0.01deg); }
        }
      `}</style>
    </div>
  );
};

export default App;
