import React from 'react';
import { ProjectItem } from './ProjectItem';
import extensions from '../../public/assets/extensions.png';

export const Blog = () => {
  return (
    <>
      <div className="flex justify-center items-center" id="blog">
        <h3 className="text-center tracking-widest font-extrabold text-2xl pt-5 pb-3 m-4 mt-16 text-[#5651e5] border-b-4 border-[#5651e5]">
          Artigos
        </h3>
      </div>
      <div className="w-full">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="10 extensões do Visual Studio Code para facilitar o seu dia a dia."
              img={extensions}
              linkLive="https://devgo.com.br/10-extensoes-do-visual-studio-code-para-facilitar-o-seu-dia-a-dia"
            />
          </div>
        </div>
      </div>
    </>
  );
};
