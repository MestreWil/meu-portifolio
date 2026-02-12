"use client";

import { motion } from 'motion/react';
import { Code2, Rocket, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Code2,
      title: t('about.professional'),
      description: t('about.professionalDesc')
    },
    {
      icon: Rocket,
      title: t('about.innovation'),
      description: t('about.innovationDesc')
    },
    {
      icon: Lightbulb,
      title: t('about.creative'),
      description: t('about.creativeDesc')
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-slate-900 dark:text-white">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                {t('about.p1')}
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                {t('about.p2')}
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                {t('about.p3')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njg1MjM3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Developer workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl -z-10"></div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl mb-3 text-slate-900 dark:text-white">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}