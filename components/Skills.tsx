import React from 'react';
import { skillCategories, courses, personalInfo } from '../data';
import { Cpu, Award, Zap, Heart } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Col: Skills */}
            <div className="lg:col-span-2">
                <div className="mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                        <Zap size={16} />
                        <span>Expertise</span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">Technical & Professional Skills</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category) => (
                    <div key={category.title} className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                           <div className={`w-2 h-6 rounded-full ${category.colorClass.split(" ")[0]} opacity-80`}></div>
                           {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                            <span 
                            key={skill} 
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${category.colorClass}`}
                            >
                            {skill}
                            </span>
                        ))}
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            {/* Right Col: Courses & Hobbies */}
            <div className="space-y-8">
                
                {/* Courses */}
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                        <Award className="text-orange-500" />
                        <h3 className="text-xl font-bold text-slate-900">Certifications</h3>
                    </div>
                    <div className="space-y-4">
                        {courses.map((course) => (
                            <div key={course.id} className="pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                                <h4 className="font-semibold text-slate-800">{course.name}</h4>
                                <p className="text-sm text-slate-500">{course.provider}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hobbies */}
                <div className="p-6 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl text-white shadow-lg">
                    <div className="flex items-center gap-2 mb-6">
                        <Heart className="text-pink-300" />
                        <h3 className="text-xl font-bold">Hobbies</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {personalInfo.hobbies.map(hobby => (
                            <span key={hobby} className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm border border-white/10">
                                {hobby}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;