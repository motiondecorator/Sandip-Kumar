import React from 'react';
import { experience } from '../data';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                <Briefcase size={16} />
                <span>Career Path</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Work Experience</h2>
        </div>

        <div className="space-y-12 relative before:content-[''] before:absolute before:left-4 md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-200 before:-translate-x-1/2">
          {experience.map((job, index) => (
            <div key={job.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 bg-indigo-600 rounded-full border-4 border-white shadow-md transform -translate-x-1/2 z-10 flex items-center justify-center">
                 <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-1/2 relative group">
                <div className={`p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right md:items-end'}`}>
                  
                  <div className={`flex flex-col mb-4 ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-2">
                        <Calendar size={14} />
                        {job.period}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                    <p className="text-slate-500 font-medium">{job.company}</p>
                  </div>

                  <ul className="space-y-2">
                    {job.description.map((desc, i) => (
                      <li key={i} className={`text-slate-600 text-sm leading-relaxed flex items-start gap-2 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                        <CheckCircle2 size={16} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>

              {/* Empty Space for Timeline Layout */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;