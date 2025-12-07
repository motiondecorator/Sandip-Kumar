import React from 'react';
import { personalInfo, socialLinks } from '../data';
import { Mail, Phone, MapPin, Download, Globe, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  const getIcon = (name: string) => {
    switch(name.toLowerCase()) {
      case 'linkedin': return <Linkedin size={20} />;
      case 'facebook': return <Facebook size={20} />;
      case 'instagram': return <Instagram size={20} />;
      case 'twitter': return <Twitter size={20} />;
      default: return <Globe size={20} />;
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full p-2 bg-gradient-to-tr from-purple-400 to-blue-400 shadow-2xl">
            <img 
              src="https://picsum.photos/400/400" 
              alt={personalInfo.name} 
              className="w-full h-full rounded-full object-cover border-4 border-slate-900"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <div>
            <h2 className="text-indigo-300 font-semibold tracking-wider text-sm uppercase mb-2">Hello, I am</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight text-white">{personalInfo.name}</h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light">{personalInfo.role}</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
              <Mail size={16} className="text-indigo-400" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
              <Phone size={16} className="text-indigo-400" />
              <span>{personalInfo.phone[0]}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
              <MapPin size={16} className="text-indigo-400" />
              <span>Ludhiana, India</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 pt-4">
             {/* Social Links */}
             <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.platform} 
                  href={link.url}
                  className="p-3 bg-white/5 rounded-full hover:bg-indigo-500 hover:scale-110 transition-all duration-300 text-slate-300 hover:text-white border border-white/10"
                  aria-label={link.platform}
                >
                  {getIcon(link.iconName)}
                </a>
              ))}
            </div>

            <a 
              href={personalInfo.resumeUrl}
              download
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 cursor-pointer"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;