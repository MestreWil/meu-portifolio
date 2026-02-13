'use client';

import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function Experience() {
  const { t } = useLanguage();
  
  const experiences = [
    {
      type: 'work',
      title: t('experience.senior.title'),
      company: t('experience.senior.company'),
      period: t('experience.senior.period'),
      description: t('experience.senior.desc'),
      achievements: [
        t('experience.senior.ach1'),
        t('experience.senior.ach2'),
        t('experience.senior.ach3')
      ]
    },
    {
      type: 'work',
      title: t('experience.fullstack.title'),
      company: t('experience.fullstack.company'),
      period: t('experience.fullstack.period'),
      description: t('experience.fullstack.desc'),
      achievements: [
        t('experience.fullstack.ach1'),
        t('experience.fullstack.ach2'),
        t('experience.fullstack.ach3')
      ]
    },
    {
      type: 'work',
      title: t('experience.junior.title'),
      company: t('experience.junior.company'),
      period: t('experience.junior.period'),
      description: t('experience.junior.desc'),
      achievements: [
        t('experience.junior.ach1'),
        t('experience.junior.ach2'),
        t('experience.junior.ach3')
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-slate-900 dark:text-white">
            {t('experience.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-16"></div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -ml-3 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-slate-50 dark:border-slate-800 z-10"></div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-20 md:pl-0`}>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        {exp.type === 'work' ? (
                          <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                            <Briefcase className="text-cyan-600 dark:text-cyan-400" size={20} />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <GraduationCap className="text-blue-600 dark:text-blue-400" size={20} />
                          </div>
                        )}
                        <div>
                          <h3 className="text-xl text-slate-900 dark:text-white">{exp.title}</h3>
                          <p className="text-slate-600 dark:text-slate-400">{exp.company}</p>
                        </div>
                      </div>
                      <p className="text-sm text-cyan-600 dark:text-cyan-400 mb-3">{exp.period}</p>
                      <p className="text-slate-700 dark:text-slate-300 mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}