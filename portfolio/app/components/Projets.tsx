'use client';

import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import musicrateimg from '@/app/assets/projets/musicrate.png';
import warframeimg from '@/app/assets/projets/warframefake.png';

export function Projects() {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: t('projects.musicrate.title'),
      description: t('projects.musicrate.desc'),
      image: musicrateimg.src,
      tags: ['React', 'Laravel', 'PostgreSQL', 'Docker', 'Spotify API'],
      liveUrl: 'https://music-rate.vercel.app/',
      githubUrl: 'https://github.com/MestreWil/musicRATE'
    },
    {
      title: t('projects.warframe.title'),
      description: t('projects.warframe.desc'),
      image: warframeimg.src,
      tags: ['HTML', 'CSS'],
      liveUrl: 'https://projeto-final-mobile-sage.vercel.app/',
      githubUrl: 'https://github.com/oThisgo/projeto_final_mobile'
    },
    {
      title: t('projects.task.title'),
      description: t('projects.task.desc'),
      image: 'https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njg1MjM3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: t('projects.analytics.title'),
      description: t('projects.analytics.desc'),
      image: 'https://images.unsplash.com/photo-1739343338040-2dae68f6bdf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzY4NTc0OTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-slate-900 dark:text-white">
            {t('projects.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-4"></div>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 gap-4">
                    <a
                      href={project.liveUrl}
                      className="px-4 py-2 bg-white text-slate-900 rounded-lg flex items-center gap-2 hover:bg-slate-100 transition-colors"
                    >
                      <ExternalLink size={18} />
                      {t('projects.liveDemo')}
                    </a>
                    <a
                      href={project.githubUrl}
                      className="px-4 py-2 bg-slate-900 text-white rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors"
                    >
                      <Github size={18} />
                      {t('projects.code')}
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-3 text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 text-cyan-700 dark:text-cyan-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}