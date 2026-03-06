import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import Main from '@/components/Main';
import Navbar from '@/components/Navbar';
import { Projects } from '@/components/Projects';
import { SectionTitle } from '@/components/SectionTitle';
import { Skills } from '@/components/Skills';
import { TimeLine } from '@/components/TimeLine';
import Head from 'next/head';
import { useEffect } from 'react';
import { useApp } from '@/context/AppContext';

export default function Home() {
  const { t, lang } = useApp();

  useEffect(() => {
    const hash = window.location.hash?.slice(1);
    if (hash && document.getElementById(hash)) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }, []);
  const metaDesc = lang === 'pt'
    ? 'Portfólio de Matheus Filho - Desenvolvedor Full Stack com mais de 7 anos de experiência em React, Next.js, Node.js e NestJS. Conheça meus projetos e entre em contato.'
    : 'Matheus Filho Portfolio - Full Stack Developer with over 7 years of experience in React, Next.js, Node.js and NestJS. Check out my projects and get in touch.';

  return (
    <div>
      <Head>
        <title>{`Matheus Filho | ${t('main.title')}`}</title>
        <meta name="description" content={metaDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`Matheus Filho | ${t('main.title')}`} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <div className="flex justify-center flex-col items-center py-8">
        <div className="flex justify-center items-center">
          <SectionTitle>{t('sections.career')}</SectionTitle>
        </div>
        <TimeLine />
      </div>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
