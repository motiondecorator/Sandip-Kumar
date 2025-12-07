import React from 'react';
import { personalInfo, socialLinks } from '../data';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            {/* Left: Info */}
            <div>
                <h2 className="text-3xl font-bold mb-6">Let's work together</h2>
                <p className="text-slate-400 mb-8 max-w-md">
                    I'm currently available for freelance projects and open to full-time opportunities. If you have a project that needs some creative touch, get in touch.
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-400 mb-1">Email</p>
                            <a href={`mailto:${personalInfo.email}`} className="text-lg font-medium hover:text-indigo-400 transition-colors">
                                {personalInfo.email}
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                            <Phone size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-400 mb-1">Phone</p>
                            <div className="flex flex-col">
                                {personalInfo.phone.map(phone => (
                                    <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="text-lg font-medium hover:text-indigo-400 transition-colors">
                                        {phone}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-400 mb-1">Address</p>
                            <p className="text-lg font-medium text-slate-200 max-w-xs">
                                {personalInfo.address}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700/50">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                            <input type="text" id="name" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                            <input type="email" id="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors" placeholder="john@example.com" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                        <textarea id="message" rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors" placeholder="Tell me about your project..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                        <Send size={18} />
                        Send Message
                    </button>
                </form>
            </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
                {socialLinks.map(link => (
                    <a key={link.platform} href={link.url} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                        {link.platform}
                    </a>
                ))}
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;