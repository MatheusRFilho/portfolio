import React from 'react';
import { SocialLinks } from './SocialLinks';
import { socialLinks } from '@/data/social';
import { useApp } from '@/context/AppContext';

const Main = () => {
  const { t } = useApp();
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-gray-400">
            {t('main.welcome')}
          </p>
          <h1 className="py-4 text-gray-700 dark:text-gray-200">
            {t('main.hello')} <span className="text-primary">Matheus 😊</span>
          </h1>
          <h1 className="py-4 text-gray-700 dark:text-gray-200">
            {t('main.title')}
          </h1>
          <p className="py-4 text-gray-600 dark:text-gray-400 max-w-[70%] m-auto">
            {t('main.description')}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <SocialLinks links={socialLinks} size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
