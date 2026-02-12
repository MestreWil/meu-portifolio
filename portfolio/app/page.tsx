import { ThemeProvider } from '@/app/contexts/ThemeContext';
import { LanguageProvider } from '@/app/contexts/LanguageContext';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';

export default function Home() {
  return (
   <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
          <Header />
          <Hero />
        </div>
      </LanguageProvider>
    </ThemeProvider>
   );
}
