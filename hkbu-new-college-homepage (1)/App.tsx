import React, { useState, useEffect } from 'react';
import { 
  X, Globe, Search, Share2, User, ChevronRight, Menu, 
  Megaphone, ArrowRight, MapPin, Instagram, Linkedin, 
  PlayCircle
} from 'lucide-react';
import { NEWS_ITEMS, EVENT_ITEMS, SOCIAL_POSTS } from './constants';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-hkbu-purple selection:text-white">
      
      {/* Top Alert Bar */}
      {showAlert && (
        <div className="bg-yellow-400 text-slate-900 text-sm py-2 px-4 relative z-50">
          <div className="container mx-auto flex justify-between items-center max-w-7xl">
            <div className="flex items-center gap-2 font-medium animate-pulse">
              <span className="font-bold">ALERT:</span> 
              <span>Severe Weather Arrangement - Campus currently closed.</span>
              <a href="#" className="underline decoration-slate-900/50 hover:decoration-slate-900 ml-1">Read More</a>
            </div>
            <button onClick={() => setShowAlert(false)} className="hover:bg-yellow-500/20 rounded p-1 transition-colors">
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'}`}>
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          {/* Top Utilities */}
          <div className="flex justify-end items-center gap-6 text-xs font-medium text-slate-500 mb-3 border-b border-slate-100 pb-2 hidden md:flex">
            <button className="flex items-center gap-1 hover:text-hkbu-blue transition-colors">
              <Globe size={14} /> EN / 繁 / 簡
            </button>
            <button className="hover:text-hkbu-blue transition-colors">
              <Search size={14} />
            </button>
            <button className="hover:text-hkbu-blue transition-colors">
              <Share2 size={14} />
            </button>
            <div className="flex items-center gap-1 relative group cursor-pointer hover:text-hkbu-blue transition-colors">
              <User size={14} /> 
              <span>Audience Shortcuts</span>
              <div className="absolute top-full right-0 w-32 bg-white shadow-lg border border-slate-100 rounded-md py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50">
                <a href="#" className="block px-4 py-1 hover:bg-slate-50 hover:text-hkbu-purple">Students</a>
                <a href="#" className="block px-4 py-1 hover:bg-slate-50 hover:text-hkbu-purple">Staff</a>
              </div>
            </div>
            <button className="bg-hkbu-gold hover:bg-hkbu-gold-hover text-white px-4 py-1.5 uppercase tracking-wide font-bold transition-colors shadow-sm">
              Giving
            </button>
          </div>

          {/* Main Nav */}
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              {/* SVG Recreation of the Book Logo */}
              <div className="h-12 w-auto flex items-center">
                 <svg viewBox="0 0 100 100" className="h-full w-auto text-hkbu-blue fill-current">
                    {/* Simplified Book/Shield Shape */}
                    <path d="M10,20 L45,20 L45,85 L10,85 C5,85 5,20 10,20 Z" fill="#0f204b" />
                    <path d="M55,10 L90,10 L90,85 L55,85 L55,10 Z" fill="none" stroke="#0f204b" strokeWidth="8" />
                    <path d="M55,30 L80,30" stroke="#0f204b" strokeWidth="5" />
                    <path d="M55,50 L80,50" stroke="#0f204b" strokeWidth="5" />
                    <text x="18" y="65" fill="white" fontSize="35" fontWeight="bold" fontFamily="serif">B</text>
                    <text x="50" y="70" fill="#0f204b" fontSize="30" fontWeight="bold" fontFamily="serif">U</text>
                 </svg>
              </div>
              <div className="flex flex-col border-l border-slate-300 pl-4">
                <span className="text-hkbu-blue font-bold text-lg leading-tight tracking-tight font-serif">HONG KONG BAPTIST UNIVERSITY</span>
                <span className="text-hkbu-purple text-sm tracking-widest uppercase font-semibold">New College</span>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-700">
              {['Admissions', 'Programmes', 'Academic Units', 'Research', 'Campus Life', 'About Us'].map((item) => (
                <a key={item} href="#" className="relative group py-2">
                  <span className="group-hover:text-hkbu-purple transition-colors">{item}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hkbu-purple transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden text-slate-700">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[600px] lg:h-[700px] overflow-hidden bg-slate-900 group">
        <div className="absolute inset-0">
            {/* Updated Hero Image: Asian students in modern atrium */}
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e0e1addf7860?auto=format&fit=crop&w=2000&q=80" 
              alt="Students Collaborating in Atrium" 
              className="w-full h-full object-cover opacity-90 transition-transform duration-10000 group-hover:scale-105"
            />
             {/* Gradient Overlay: Blue & Purple mix */}
            <div className="absolute inset-0 bg-gradient-to-r from-hkbu-blue/90 via-hkbu-purple/40 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-hkbu-blue/80 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            <div className="max-w-3xl animate-in slide-in-from-left-10 fade-in duration-1000">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
                A New Era of Learning: <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-hkbu-gold">Fusing SCE & CIE</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl font-light leading-relaxed">
                Discover a premier institution dedicated to lifelong education and innovation. 
                Where tradition meets the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-hkbu-gold hover:bg-hkbu-gold-hover text-white px-8 py-3.5 font-bold tracking-wide transition-all transform hover:-translate-y-0.5 hover:shadow-lg rounded-sm border-2 border-transparent">
                  Explore Programmes
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-hkbu-purple px-8 py-3.5 font-bold tracking-wide transition-all flex items-center justify-center gap-2 rounded-sm group/btn">
                  <PlayCircle size={20} />
                  Watch Our Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Announcements */}
      <div className="bg-white border-b border-slate-100 shadow-sm relative z-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row items-start md:items-center py-4 gap-4 md:gap-8">
          <div className="flex items-center gap-3 text-hkbu-purple font-bold whitespace-nowrap">
            <div className="bg-purple-50 p-2 rounded-full">
              <Megaphone size={20} className="text-hkbu-purple"/>
            </div>
            <span className="uppercase tracking-wider text-sm">Important Announcements</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full overflow-x-auto text-sm font-medium text-slate-600 scrollbar-hide">
            {["System Maintenance Schedule", "Term 2 Registration Deadline", "New Campus Access Policy"].map((announcement, idx) => (
              <a key={idx} href="#" className="flex items-center gap-2 hover:text-hkbu-purple whitespace-nowrap transition-colors group">
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full group-hover:bg-hkbu-purple"></span>
                {announcement}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <main className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          
          {/* News & Events Split Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
            
            {/* News Carousel */}
            <div className="flex flex-col gap-8">
              <div className="flex justify-between items-end border-b-2 border-slate-200 pb-2">
                <h2 className="text-3xl font-serif font-bold text-hkbu-blue">Latest News</h2>
                <div className="flex gap-2 mb-1">
                  <button className="p-2 border border-slate-300 hover:bg-hkbu-purple hover:text-white hover:border-hkbu-purple transition-colors rounded-sm"><ChevronRight className="rotate-180" size={18}/></button>
                  <button className="p-2 border border-slate-300 hover:bg-hkbu-purple hover:text-white hover:border-hkbu-purple transition-colors rounded-sm"><ChevronRight size={18}/></button>
                </div>
              </div>
              
              <div className="grid gap-6">
                {NEWS_ITEMS.slice(0, 3).map((news) => (
                  <div key={news.id} className="group flex gap-4 md:gap-6 items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-32 h-24 md:w-48 md:h-32 overflow-hidden rounded-md shrink-0">
                      <img src={news.image} alt={news.headline} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="flex flex-col justify-between h-full">
                      <div className="text-xs font-bold text-hkbu-purple mb-1">{news.date}</div>
                      <h3 className="text-base md:text-lg font-bold text-slate-800 leading-tight group-hover:text-hkbu-blue transition-colors mb-2">
                        {news.headline}
                      </h3>
                      <a href={news.link} className="text-sm font-medium text-slate-500 flex items-center gap-1 group-hover:gap-2 transition-all mt-auto group-hover:text-hkbu-purple">
                        Read More <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Events Carousel */}
            <div className="flex flex-col gap-8">
              <div className="flex justify-between items-end border-b-2 border-slate-200 pb-2">
                <h2 className="text-3xl font-serif font-bold text-hkbu-blue">Upcoming Events</h2>
                <a href="#" className="text-sm font-bold text-slate-500 hover:text-hkbu-purple transition-colors mb-2">View Full Calendar</a>
              </div>

              <div className="flex overflow-x-auto gap-4 pb-4 snap-x hide-scrollbar">
                {EVENT_ITEMS.map((event) => (
                  <div key={event.id} className="min-w-[280px] bg-white rounded-lg p-6 shadow-sm border-t-4 border-hkbu-purple hover:shadow-lg transition-shadow snap-start">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col items-center bg-slate-50 px-3 py-2 rounded border border-slate-100">
                        <span className="text-xs font-bold text-slate-400 uppercase">{event.month}</span>
                        <span className="text-2xl font-serif font-bold text-hkbu-blue">{event.day}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 h-14">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                      <MapPin size={16} className="text-hkbu-purple" />
                      {event.location}
                    </div>
                    <button className="w-full py-2 border border-slate-200 text-slate-700 font-bold text-sm hover:bg-hkbu-purple hover:text-white hover:border-hkbu-purple transition-colors rounded-sm">
                      Register Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Wall */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-hkbu-blue mb-2">Campus Connect</h2>
              <p className="text-hkbu-purple font-bold tracking-wide">#HKBUNewCollege</p>
            </div>

            <div className="columns-1 md:columns-3 gap-6 space-y-6">
              {SOCIAL_POSTS.map((post) => (
                <div key={post.id} className="break-inside-avoid relative group overflow-hidden rounded-xl shadow-md">
                  <img src={post.image} alt="Social Post" className="w-full h-auto transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-hkbu-blue/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="absolute top-4 right-4 text-white">
                      {post.type === 'instagram' ? <Instagram size={24} /> : <Linkedin size={24} />}
                    </div>
                    <p className="text-white text-sm font-medium mb-2 line-clamp-2">{post.caption}</p>
                    <div className="flex items-center gap-2 text-white/80 text-xs">
                       <span>❤️ {post.likes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
               <button className="px-8 py-3 border border-hkbu-blue text-hkbu-blue font-bold hover:bg-hkbu-blue hover:text-white transition-colors rounded-sm">
                 Load More Stories
               </button>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-hkbu-blue text-white pt-20 pb-10">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Contact Us */}
            <div>
              <h4 className="font-serif font-bold text-lg mb-6 text-hkbu-gold">Contact Us</h4>
              <p className="text-blue-100/80 mb-2 leading-relaxed">
                New College, Hong Kong Baptist University<br/>
                Kowloon Tong, Hong Kong
              </p>
              <div className="space-y-1 text-blue-100/80 mt-4">
                <p>Phone: (852) 3411 1234</p>
                <p>Email: ncinquiry@hkbu.edu.hk</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-bold text-lg mb-6 text-hkbu-gold">Quick Links</h4>
              <ul className="space-y-3 text-blue-100/80 text-sm">
                {['Sitemap', 'A-Z Index', 'Campus Map', 'Directory', 'Library', 'e-Learning'].map(link => (
                  <li key={link}><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">{link}</a></li>
                ))}
              </ul>
            </div>

             {/* Legal */}
             <div>
              <h4 className="font-serif font-bold text-lg mb-6 text-hkbu-gold">Legal</h4>
              <ul className="space-y-3 text-blue-100/80 text-sm">
                {['Privacy Policy', 'Disclaimer', 'Accessibility Statement', 'Equal Opportunities'].map(link => (
                  <li key={link}><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">{link}</a></li>
                ))}
              </ul>
            </div>

            {/* Logo/Identity */}
            <div className="flex flex-col items-start lg:items-end">
               <div className="w-16 h-20 bg-white text-hkbu-blue flex items-center justify-center font-serif font-bold text-3xl mb-4">
                BU
              </div>
              <p className="text-blue-200 text-sm lg:text-right max-w-xs">
                A premier institution fusing liberal arts education with cutting-edge innovation.
              </p>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-blue-300">© 2025 Hong Kong Baptist University New College. All rights reserved.</p>
            <div className="flex gap-6">
               <a href="#" className="text-blue-300 hover:text-white transition-colors"><Instagram size={20} /></a>
               <a href="#" className="text-blue-300 hover:text-white transition-colors"><Linkedin size={20} /></a>
               <a href="#" className="text-blue-300 hover:text-white transition-colors"><PlayCircle size={20} /></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating AI Assistant */}
      <ChatWidget />
    </div>
  );
};

export default App;