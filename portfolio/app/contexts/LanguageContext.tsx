"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title1': 'William Tavares de Moura',
    'hero.title2': 'Software Developer',
    'hero.subtitle': 'Transforming complex problems into modern web applications using Laravel, CodeIgniter, React, Django, JavaScript, TypeScript and Docker.',
    'hero.viewWork': 'View Projects',
    'hero.contact': 'Contact Me',
    
    // About
    'about.title': 'About Me',
    'about.professional': 'Professional',
    'about.professionalDesc': 'Software development with a focus on clean, sustainable code aligned with industry best practices, always with high standards of quality and attention to detail',
    'about.innovation': 'Innovation',
    'about.innovationDesc': 'Strategic application of modern technologies to build robust, scalable, and future-proof solutions',
    'about.creative': 'Creative',
    'about.creativeDesc': 'Thinking outside the box to solve complex problems with elegant solutions',
    'about.p1': "I'm a software developer focused on creating digital solutions that solve real problems and deliver value to people and businesses. Throughout my journey, I've built a strong foundation in web systems development, working on projects for the financial market, industrial property market, internal platforms, and management systems, always with attention to quality, performance, and scalability.",
    'about.p2': "Graduated in Systems Analysis and Development from Centro Universitário UNISENAC RS in 2025, which provided me with a structured view of architecture, best practices, and software engineering, while practical experience consolidated my ability to transform complex requirements into clear, functional, and well-architected solutions.",
    'about.p3': "I like to understand the problem before writing the first line of code. I believe quality software is born from the combination of planning, communication, and consistent technical execution. Therefore, I strive to develop clean, organized, and easy-to-evolve applications.",
    'about.p4': "I'm committed to continuous improvement, staying updated with the latest industry trends, and delivering solutions that exceed expectations.",
    
    // Skills
    'skills.title': 'Skills & Expertise',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools & Others',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'A showcase of my recent work demonstrating expertise in full-stack development, modern frameworks, and innovative solutions',
    'projects.liveDemo': 'Live Demo',
    'projects.code': 'Code',
    'projects.ecommerce.title': 'E-Commerce Platform',
    'projects.ecommerce.desc': 'A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built with React, Node.js, and PostgreSQL.',
    'projects.ai.title': 'AI Content Generator',
    'projects.ai.desc': 'An AI-powered content creation tool that leverages GPT-4 to generate marketing copy, blog posts, and social media content with custom tone and style.',
    'projects.task.title': 'Task Management App',
    'projects.task.desc': 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
    'projects.analytics.title': 'Analytics Dashboard',
    'projects.analytics.desc': 'A comprehensive analytics platform with interactive charts, real-time data visualization, and customizable reporting features.',
    
    // Experience
    'experience.title': 'Experience & Education',
    'experience.senior.title': 'Senior Full-Stack Developer',
    'experience.senior.company': 'Tech Innovations Inc.',
    'experience.senior.period': '2022 - Present',
    'experience.senior.desc': 'Leading development of enterprise-level applications, mentoring junior developers, and architecting scalable solutions for Fortune 500 clients.',
    'experience.senior.ach1': 'Improved application performance by 60%',
    'experience.senior.ach2': 'Led team of 5 developers',
    'experience.senior.ach3': 'Implemented CI/CD pipeline reducing deployment time by 80%',
    'experience.fullstack.title': 'Full-Stack Developer',
    'experience.fullstack.company': 'Digital Solutions Co.',
    'experience.fullstack.period': '2020 - 2022',
    'experience.fullstack.desc': 'Developed and maintained web applications using React, Node.js, and cloud technologies. Collaborated with cross-functional teams to deliver high-quality products.',
    'experience.fullstack.ach1': 'Built 15+ client projects from scratch',
    'experience.fullstack.ach2': 'Reduced bug rate by 40% through testing automation',
    'experience.fullstack.ach3': 'Implemented responsive design system',
    'experience.education.title': 'Bachelor of Computer Science',
    'experience.education.company': 'University of Technology',
    'experience.education.period': '2016 - 2020',
    'experience.education.desc': 'Graduated with honors. Focused on software engineering, data structures, and algorithms. Active member of coding club and hackathon participant.',
    'experience.education.ach1': 'GPA: 3.8/4.0',
    'experience.education.ach2': 'Winner of university hackathon 2019',
    'experience.education.ach3': 'Published research on machine learning optimization',
    'experience.junior.title': 'Junior Developer',
    'experience.junior.company': 'StartUp Studio',
    'experience.junior.period': '2019 - 2020',
    'experience.junior.desc': 'Started career as an intern and quickly promoted to junior developer. Contributed to multiple projects and learned modern development practices.',
    'experience.junior.ach1': 'Developed 3 mobile-responsive websites',
    'experience.junior.ach2': 'Contributed to open-source projects',
    'experience.junior.ach3': 'Received "Rising Star" award',
    
    // Contact
    'contact.title': "Let's Work Together",
    'contact.subtitle': "Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together!",
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell me about your project...',
    'contact.send': 'Send Message',
    'contact.getInTouch': 'Get In Touch',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Phone',
    'contact.location.label': 'Location',
    'contact.location.value': 'San Francisco, CA',
    'contact.followMe': 'Follow Me',
    'contact.opportunities': 'Open to Opportunities',
    'contact.opportunitiesDesc': "I'm currently available for freelance projects and full-time positions. Let's discuss how we can work together to bring your ideas to life.",
    'contact.success': 'Thank you for your message! I will get back to you soon.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.builtWith': 'Built with',
    'footer.using': 'using React & Tailwind CSS',
  },
  pt: {
    // Navigation
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Projetos',
    'nav.experience': 'Experiência',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.title1': 'William Tavares de Moura',
    'hero.title2': 'Desenvolvedor de Software',
    'hero.subtitle': 'Transformo problemas complexos em aplicações web modernas, utilizando Laravel, CodeIgniter, React, Django, JavaScript, TypeScript e Docker.',
    'hero.viewWork': 'Ver Projetos',
    'hero.contact': 'Entrar em Contato',
    
    // About
    'about.title': 'Sobre Mim',
    'about.professional': 'Profissional',
    'about.professionalDesc': 'Desenvolvimento de software com foco em código limpo, sustentável e alinhado às melhores práticas da indústria, sempre com alto padrão de qualidade e atenção aos detalhes.',
    'about.innovation': 'Inovação',
    'about.innovationDesc': 'Aplicação estratégica de tecnologias modernas para criar soluções robustas, escaláveis e preparadas para o futuro.',
    'about.creative': 'Criativo',
    'about.creativeDesc': 'Resolução de problemas complexos por meio de abordagens inteligentes e soluções elegantes.',
    'about.p1': 'Sou desenvolvedor de software focado em criar soluções digitais que resolvem problemas reais e geram valor para pessoas e negócios. Ao longo da minha trajetória, construí uma base sólida em desenvolvimento de sistemas web, atuando em projetos para o mercado financeiro, para o mercado de propriedade industrial, plataformas internas e sistemas de gestão, sempre com atenção à qualidade, desempenho e escalabilidade.',
    'about.p2': 'Me formei em Análise e Desenvolvimento de Sistemas no Centro Universitário UNISENAC RS em 2025, o que me proporcionou uma visão estruturada sobre arquitetura, boas práticas e engenharia de software, enquanto a experiência prática consolidou minha capacidade de transformar requisitos complexos em soluções claras, funcionais e bem arquitetadas.',
    'about.p3': 'Gosto de entender o problema antes de escrever a primeira linha de código. Acredito que software de qualidade nasce da combinação entre planejamento, comunicação e execução técnica consistente. Por isso, busco desenvolver aplicações limpas, organizadas e fáceis de evoluir.',
    'about.p4': 'Seja no backend, construindo APIs e regras de negócio robustas, ou no frontend, criando interfaces modernas e intuitivas, atuo com profissionalismo, senso de responsabilidade e compromisso com entregas que realmente fazem a diferença para o cliente.',
    
    // Skills
    'skills.title': 'Habilidades & Expertise',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Ferramentas & Outros',
    
    // Projects
    'projects.title': 'Projetos em Destaque',
    'projects.subtitle': 'Uma vitrine do meu trabalho recente demonstrando expertise em desenvolvimento full-stack, frameworks modernos e soluções inovadoras',
    'projects.liveDemo': 'Demo ao Vivo',
    'projects.code': 'Código',
    'projects.ecommerce.title': 'Plataforma E-Commerce',
    'projects.ecommerce.desc': 'Uma solução e-commerce full-stack com inventário em tempo real, processamento de pagamentos e painel de administração. Construído com React, Node.js e PostgreSQL.',
    'projects.ai.title': 'Gerador de Conteúdo IA',
    'projects.ai.desc': 'Uma ferramenta de criação de conteúdo alimentada por IA que aproveita GPT-4 para gerar textos de marketing, posts de blog e conteúdo para redes sociais com tom e estilo personalizados.',
    'projects.task.title': 'App de Gerenciamento de Tarefas',
    'projects.task.desc': 'Uma ferramenta de gerenciamento de projetos colaborativa com atualizações em tempo real, funcionalidade de arrastar e soltar e recursos de colaboração em equipe.',
    'projects.analytics.title': 'Painel de Analytics',
    'projects.analytics.desc': 'Uma plataforma de analytics abrangente com gráficos interativos, visualização de dados em tempo real e recursos de relatórios personalizáveis.',
    
    // Experience
    'experience.title': 'Experiência & Educação',
    'experience.senior.title': 'Desenvolvedor Full-Stack Sênior',
    'experience.senior.company': 'Tech Innovations Inc.',
    'experience.senior.period': '2022 - Presente',
    'experience.senior.desc': 'Liderando desenvolvimento de aplicações de nível empresarial, mentorando desenvolvedores júnior e arquitetando soluções escaláveis para clientes Fortune 500.',
    'experience.senior.ach1': 'Melhorou a performance da aplicação em 60%',
    'experience.senior.ach2': 'Liderou equipe de 5 desenvolvedores',
    'experience.senior.ach3': 'Implementou pipeline CI/CD reduzindo tempo de deploy em 80%',
    'experience.fullstack.title': 'Desenvolvedor Full-Stack',
    'experience.fullstack.company': 'Digital Solutions Co.',
    'experience.fullstack.period': '2020 - 2022',
    'experience.fullstack.desc': 'Desenvolveu e manteve aplicações web usando React, Node.js e tecnologias em nuvem. Colaborou com equipes multifuncionais para entregar produtos de alta qualidade.',
    'experience.fullstack.ach1': 'Construiu mais de 15 projetos do zero',
    'experience.fullstack.ach2': 'Reduziu taxa de bugs em 40% através de automação de testes',
    'experience.fullstack.ach3': 'Implementou sistema de design responsivo',
    'experience.education.title': 'Bacharelado em Ciência da Computação',
    'experience.education.company': 'Universidade de Tecnologia',
    'experience.education.period': '2016 - 2020',
    'experience.education.desc': 'Graduado com honras. Focado em engenharia de software, estruturas de dados e algoritmos. Membro ativo do clube de programação e participante de hackathons.',
    'experience.education.ach1': 'Média: 3.8/4.0',
    'experience.education.ach2': 'Vencedor do hackathon universitário 2019',
    'experience.education.ach3': 'Publicou pesquisa sobre otimização de machine learning',
    'experience.junior.title': 'Desenvolvedor Júnior',
    'experience.junior.company': 'StartUp Studio',
    'experience.junior.period': '2019 - 2020',
    'experience.junior.desc': 'Iniciou a carreira como estagiário e rapidamente promovido a desenvolvedor júnior. Contribuiu para múltiplos projetos e aprendeu práticas modernas de desenvolvimento.',
    'experience.junior.ach1': 'Desenvolveu 3 sites responsivos para mobile',
    'experience.junior.ach2': 'Contribuiu para projetos open-source',
    'experience.junior.ach3': 'Recebeu prêmio "Estrela em Ascensão"',
    
    // Contact
    'contact.title': 'Vamos Trabalhar Juntos',
    'contact.subtitle': 'Tem um projeto em mente ou quer colaborar? Eu adoraria ouvir de você. Vamos criar algo incrível juntos!',
    'contact.name': 'Nome',
    'contact.namePlaceholder': 'Seu nome',
    'contact.email': 'E-mail',
    'contact.emailPlaceholder': 'seu.email@exemplo.com',
    'contact.message': 'Mensagem',
    'contact.messagePlaceholder': 'Conte-me sobre seu projeto...',
    'contact.send': 'Enviar Mensagem',
    'contact.getInTouch': 'Entre em Contato',
    'contact.email.label': 'E-mail',
    'contact.phone.label': 'Telefone',
    'contact.location.label': 'Localização',
    'contact.location.value': 'São Francisco, CA',
    'contact.followMe': 'Siga-me',
    'contact.opportunities': 'Aberto a Oportunidades',
    'contact.opportunitiesDesc': 'Estou atualmente disponível para projetos freelance e posições tempo integral. Vamos discutir como podemos trabalhar juntos para dar vida às suas ideias.',
    'contact.success': 'Obrigado pela sua mensagem! Entrarei em contato em breve.',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.builtWith': 'Feito com',
    'footer.using': 'usando React & Tailwind CSS',
  },
  es: {
    // Navigation
    'nav.about': 'Acerca',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title1': 'William Tavares de Moura',
    'hero.title2': 'Desarrollador de Software',
    'hero.subtitle': 'Desarrollando aplicaciones web de alto rendimiento utilizando PHP, React, Next.js, SQL y principios de arquitectura limpia.',
    'hero.viewWork': 'Ver Proyectos',
    'hero.contact': 'Contactar',
    
    // About
    'about.title': 'Sobre Mí',
    'about.professional': 'Profesional',
    'about.professionalDesc': 'Desarrollo de software con enfoque en código limpio, sostenible y alineado con las mejores prácticas de la industria, siempre con altos estándares de calidad y atención al detalle.',
    'about.innovation': 'Innovación',
    'about.innovationDesc': 'Aprovechando tecnologías de punta para construir aplicaciones preparadas para el futuro',
    'about.creative': 'Creativo',
    'about.creativeDesc': 'Resolviendo problemas complejos mediante enfoques inteligentes y soluciones elegantes.',
    'about.p1': 'Soy un desarrollador de software enfocado en crear soluciones digitales que resuelven problemas reales y generan valor para personas y negocios. A lo largo de mi trayectoria, he construido una base sólida en el desarrollo de sistemas web, trabajando en proyectos para el mercado financiero, el mercado de propiedad industrial, plataformas internas y sistemas de gestión, siempre con atención a la calidad, el rendimiento y la escalabilidad.',
    'about.p2': 'Me gradué en Análisis y Desarrollo de Sistemas en el Centro Universitario UNISENAC RS en 2025, lo que me proporcionó una visión estructurada sobre arquitectura, buenas prácticas e ingeniería de software, mientras que la experiencia práctica consolidó mi capacidad para transformar requisitos complejos en soluciones claras, funcionales y bien arquitectadas.',
    'about.p3': 'Me gusta entender el problema antes de escribir la primera línea de código. Creo que el software de calidad nace de la combinación de planificación, comunicación y ejecución técnica consistente. Por eso, busco desarrollar aplicaciones limpias, organizadas y fáciles de evolucionar.',
    'about.p4': 'Estoy comprometido con la mejora continua, manteniéndome actualizado con las últimas tendencias de la industria y entregando soluciones que superen las expectativas.',
    
    // Skills
    'skills.title': 'Habilidades & Experiencia',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Herramientas & Otros',
    
    // Projects
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': 'Una muestra de mi trabajo reciente demostrando experiencia en desarrollo full-stack, frameworks modernos y soluciones innovadoras',
    'projects.liveDemo': 'Demo en Vivo',
    'projects.code': 'Código',
    'projects.ecommerce.title': 'Plataforma E-Commerce',
    'projects.ecommerce.desc': 'Una solución e-commerce full-stack con inventario en tiempo real, procesamiento de pagos y panel de administración. Construido con React, Node.js y PostgreSQL.',
    'projects.ai.title': 'Generador de Contenido IA',
    'projects.ai.desc': 'Una herramienta de creación de contenido impulsada por IA que aprovecha GPT-4 para generar textos de marketing, publicaciones de blog y contenido de redes sociales con tono y estilo personalizados.',
    'projects.task.title': 'App de Gestión de Tareas',
    'projects.task.desc': 'Una herramienta de gestión de proyectos colaborativa con actualizaciones en tiempo real, funcionalidad de arrastrar y soltar y características de colaboración en equipo.',
    'projects.analytics.title': 'Panel de Analytics',
    'projects.analytics.desc': 'Una plataforma de analytics integral con gráficos interactivos, visualización de datos en tiempo real y características de informes personalizables.',
    
    // Experience
    'experience.title': 'Experiencia & Educación',
    'experience.senior.title': 'Desarrollador Full-Stack Senior',
    'experience.senior.company': 'Tech Innovations Inc.',
    'experience.senior.period': '2022 - Presente',
    'experience.senior.desc': 'Liderando desarrollo de aplicaciones a nivel empresarial, mentorizando desarrolladores junior y arquitectando soluciones escalables para clientes Fortune 500.',
    'experience.senior.ach1': 'Mejoró el rendimiento de la aplicación en un 60%',
    'experience.senior.ach2': 'Lideró equipo de 5 desarrolladores',
    'experience.senior.ach3': 'Implementó pipeline CI/CD reduciendo tiempo de despliegue en un 80%',
    'experience.fullstack.title': 'Desarrollador Full-Stack',
    'experience.fullstack.company': 'Digital Solutions Co.',
    'experience.fullstack.period': '2020 - 2022',
    'experience.fullstack.desc': 'Desarrolló y mantuvo aplicaciones web usando React, Node.js y tecnologías en la nube. Colaboró con equipos multifuncionales para entregar productos de alta calidad.',
    'experience.fullstack.ach1': 'Construyó más de 15 proyectos desde cero',
    'experience.fullstack.ach2': 'Redujo tasa de errores en un 40% mediante automatización de pruebas',
    'experience.fullstack.ach3': 'Implementó sistema de diseño responsivo',
    'experience.education.title': 'Licenciatura en Ciencias de la Computación',
    'experience.education.company': 'Universidad de Tecnología',
    'experience.education.period': '2016 - 2020',
    'experience.education.desc': 'Graduado con honores. Enfocado en ingeniería de software, estructuras de datos y algoritmos. Miembro activo del club de programación y participante de hackathons.',
    'experience.education.ach1': 'Promedio: 3.8/4.0',
    'experience.education.ach2': 'Ganador del hackathon universitario 2019',
    'experience.education.ach3': 'Publicó investigación sobre optimización de machine learning',
    'experience.junior.title': 'Desarrollador Junior',
    'experience.junior.company': 'StartUp Studio',
    'experience.junior.period': '2019 - 2020',
    'experience.junior.desc': 'Comenzó la carrera como pasante y rápidamente promovido a desarrollador junior. Contribuyó a múltiples proyectos y aprendió prácticas modernas de desarrollo.',
    'experience.junior.ach1': 'Desarrolló 3 sitios web responsivos para móviles',
    'experience.junior.ach2': 'Contribuyó a proyectos de código abierto',
    'experience.junior.ach3': 'Recibió premio "Estrella en Ascenso"',
    
    // Contact
    'contact.title': 'Trabajemos Juntos',
    'contact.subtitle': '¿Tienes un proyecto en mente o quieres colaborar? Me encantaría saber de ti. ¡Creemos algo increíble juntos!',
    'contact.name': 'Nombre',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'tu.email@ejemplo.com',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': 'Cuéntame sobre tu proyecto...',
    'contact.send': 'Enviar Mensaje',
    'contact.getInTouch': 'Contactar',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Teléfono',
    'contact.location.label': 'Ubicación',
    'contact.location.value': 'San Francisco, CA',
    'contact.followMe': 'Sígueme',
    'contact.opportunities': 'Abierto a Oportunidades',
    'contact.opportunitiesDesc': 'Actualmente estoy disponible para proyectos freelance y posiciones a tiempo completo. Hablemos sobre cómo podemos trabajar juntos para dar vida a tus ideas.',
    'contact.success': '¡Gracias por tu mensaje! Me pondré en contacto pronto.',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.builtWith': 'Hecho con',
    'footer.using': 'usando React & Tailwind CSS',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
