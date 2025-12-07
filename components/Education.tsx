import React from 'react';
import { education } from '../data';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
                <GraduationCap size={16} />
                <span>Academic Background</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu) => (
            <div key={edu.id} className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap size={64} className="text-emerald-600" />
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold mb-4 uppercase tracking-wide">
                    {edu.period}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight min-h-[3rem]">{edu.degree}</h3>
                <p className="text-slate-500 font-medium border-t border-slate-100 pt-4 mt-2">
                    {edu.institution}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;