'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { 
  SiReact, 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiBootstrap,
  SiPython,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiFigma,
  SiPhp,
  SiDotnet,
  SiLaravel,
  SiCodeigniter,
  SiDjango,
  SiMysql,
  SiJquery,
  SiHtml5,
  SiCss3

} from 'react-icons/si';
import { LuWorkflow } from 'react-icons/lu';

export function Skills() {
  const { t } = useLanguage();
  
  const skillCategories = [
    {
      category: t('skills.frontend'),
      skills: [
        { name: 'React', icon: SiReact },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Bootstrap', icon: SiBootstrap },
        { name: 'JQuery', icon: SiJquery },
        { name: 'HTML5', icon: SiHtml5 },
        { name: 'CSS3', icon: SiCss3 },

      ]
    },
    {
      category: t('skills.backend'),
      skills: [
        { name: 'PHP', icon: SiPhp },
        { name: 'Python', icon: SiPython },
        { name: '.NET', icon: SiDotnet },
        { name: 'Laravel', icon: SiLaravel },
        { name: 'CodeIgniter', icon: SiCodeigniter },
        { name: 'Django', icon: SiDjango },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MySQL', icon: SiMysql }
       
      ]
    },
    {
      category: t('skills.tools'),
      skills: [
        { name: 'Git', icon: SiGit },
        { name: 'Docker', icon: SiDocker },
        { name: 'CI/CD', icon: LuWorkflow },
        { name: 'Figma', icon: SiFigma }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-slate-900 dark:text-white">
            {t('skills.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl mb-6 text-slate-900 dark:text-white">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skill.name} className="flex items-center gap-3">
                        <Icon className="text-2xl text-cyan-500" />
                        <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}