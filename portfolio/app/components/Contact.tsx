'use client';

import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert(t('contact.success'));
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email.label'),
      value: 'william.tavares@example.com',
      href: 'mailto:william.tavares@example.com'
    },
    {
      icon: Phone,
      label: t('contact.phone.label'),
      value: '+55 (92) 98147-1090',
      href: 'tel:+5592981471090'
    },
    {
      icon: MapPin,
      label: t('contact.location.label'),
      value: t('contact.location.value'),
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/MestreWil', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/william-tavares-de-moura/', label: 'LinkedIn' },
    
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-slate-900 dark:text-white">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-4"></div>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-700 dark:text-slate-300 mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-700 dark:text-slate-300 mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-slate-700 dark:text-slate-300 mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  {t('contact.send')}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl mb-6 text-slate-900 dark:text-white">{t('contact.getInTouch')}</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{info.label}</p>
                        <p className="text-slate-900 dark:text-white">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl mb-6 text-slate-900 dark:text-white">{t('contact.followMe')}</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all duration-300 group"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl">
                <h4 className="text-xl mb-2 text-slate-900 dark:text-white">{t('contact.opportunities')}</h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {t('contact.opportunitiesDesc')}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}