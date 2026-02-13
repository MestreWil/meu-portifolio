'use client';

import { Heart } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400">
            © {new Date().getFullYear()} | William Tavares de Moura. {t('footer.rights')}
          </p>
          <p className="flex items-center gap-2 text-slate-400">
            {t('footer.builtWith')} <Heart size={16} className="text-red-500" /> {t('footer.using')}
          </p>
        </div>
      </div>
    </footer>
  );
}