import { ThemeProvider } from '@/app/contexts/ThemeContext';
import { LanguageProvider } from '@/app/contexts/LanguageContext';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projets';
export default function Home() {
  return (
   <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
        </div>
      </LanguageProvider>
    </ThemeProvider>
   );
}
