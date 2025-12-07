import React from 'react';
import { personalInfo } from '../data';
import { User, Flag, Globe2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          <div className="flex-1">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
                <User size={16} />
                <span>About Me</span>
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
               Crafting visual stories & digital strategies.
             </h2>
             <p className="text-lg text-slate-600 leading-relaxed mb-6">
               {personalInfo.summary}
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-3">
                    <Flag className="text-indigo-500" />
                    <div>
                        <p className="text-xs text-slate-500 uppercase font-semibold">Nationality</p>
                        <p className="font-medium text-slate-800">{personalInfo.nationality}</p>
                    </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-3">
                    <Globe2 className="text-indigo-500" />
                    <div>
                        <p className="text-xs text-slate-500 uppercase font-semibold">Languages</p>
                        <p className="font-medium text-slate-800">{personalInfo.languages.join(", ")}</p>
                    </div>
                </div>
             </div>
          </div>
          
          <div className="w-full md:w-1/3">
             <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100/50">
                <h3 className="font-bold text-xl mb-6 text-slate-800">Highlights</h3>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 font-bold shadow-sm">12+</span>
                        <span className="text-slate-600">Years Experience</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 font-bold shadow-sm">20+</span>
                        <span className="text-slate-600">Brand Projects</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 font-bold shadow-sm">∞</span>
                        <span className="text-slate-600">Creative Solutions</span>
                    </li>
                </ul>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;