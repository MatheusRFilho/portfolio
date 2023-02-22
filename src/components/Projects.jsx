import React from 'react';
import { ProjectItem } from './ProjectItem';
import { TbBrandReactNative } from 'react-icons/tb';
import { SiNodedotjs, SiTypescript } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import ecoleta from '../../public/assets/ecoleta.png';
import proffy from '../../public/assets/proffy.png';
import teste from '../../public/assets/compras.jpeg';
import moveit from '../../public/assets/moveit.png';
import webcrawler from '../../public/assets/webcrawler.png';
import nodemailer from '../../public/assets/nodemailer.png';
import bethehero from '../../public/assets/bethehero.png';
import zarpar from '../../public/assets/zarpar.png';
import eburguer from '../../public/assets/eburguer.png';

export const Projects = () => {
  return (
    <>
      <div className="flex justify-center items-center " id="projects">
        <h3 className="text-center tracking-widest font-extrabold text-2xl pt-5 pb-3 m-4 mt-16 text-[#5651e5] border-b-4 border-[#5651e5]">
          Projetos
        </h3>
      </div>
      <div className="w-full">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="Teste para entrar na Devnology"
              tech={
                <div className="flex flex-row gap-2 justify-center items-center m-auto">
                  <GrReactjs />
                  <SiNodedotjs />
                  <SiTypescript />
                </div>
              }
              img={teste}
              linkGit="https://github.com/MatheusRFilho/Teste-Devnology"
              linkLive={null}
            />

            <ProjectItem
              title="MoveIt"
              tech={
                <div className="flex flex-row gap-2 justify-center items-center m-auto">
                  <GrReactjs />
                  <SiTypescript />
                </div>
              }
              img={moveit}
              linkGit="https://github.com/MatheusRFilho/Nlw-4.0-React"
              linkLive="https://moveit-steel-omega.vercel.app/"
            />

            <ProjectItem
              title="Ecoleta"
              tech={
                <div className="flex flex-row gap-2 justify-center items-center m-auto">
                  <TbBrandReactNative />
                  <GrReactjs />
                  <SiNodedotjs />
                  <SiTypescript />
                </div>
              }
              img={ecoleta}
              linkGit="https://github.com/MatheusRFilho/Nlw-Booster"
              linkLive={null}
            />

            <ProjectItem
              title="Proffy"
              tech={
                <div className="flex flex-row gap-2 justify-center items-center m-auto">
                  <TbBrandReactNative />
                  <GrReactjs />
                  <SiNodedotjs />
                  <SiTypescript />
                </div>
              }
              img={proffy}
              linkGit="https://github.com/MatheusRFilho/NLW-2.0---Omnistack"
              linkLive={null}
            />

            <ProjectItem
              title="WebCrawler"
              tech={
                <div className="flex flex-row gap-2 justify-center items-center m-auto">
                  <SiNodedotjs />
                </div>
              }
              img={webcrawler}
              linkGit="https://github.com/MatheusRFilho/webcrawler"
              linkLive={null}
            />

            <ProjectItem
              title="NodeMailer"
              tech={
                <div className="flex flex-row gap-2 justify-center items-center m-auto">
                  <SiNodedotjs />
                  <SiTypescript />
                </div>
              }
              img={nodemailer}
              linkGit="https://github.com/MatheusRFilho/NodeMailer"
              linkLive={null}
            />

            <ProjectItem
              title="Be The Hero"
              tech={
                <div className="flex flex-row gap-2 justify-center items-center m-auto">
                  <GrReactjs />
                  <SiNodedotjs />
                </div>
              }
              img={bethehero}
              linkGit="https://github.com/MatheusRFilho/Semana-OmniStack-11"
              linkLive={null}
            />

            <ProjectItem
              title="E-Burguer Front-End"
              tech={
                <div className="flex flex-row gap-2 justify-center items-center m-auto">
                  <GrReactjs />
                </div>
              }
              img={eburguer}
              linkGit="https://github.com/MatheusRFilho/E-Burguer"
              linkLive={null}
            />

            <ProjectItem
              title="E-Burguer Back-End"
              tech={
                <div className="flex flex-row gap-2 justify-center items-center m-auto">
                  <SiNodedotjs />
                </div>
              }
              img={eburguer}
              linkGit="https://github.com/MatheusRFilho/e-burguer-BackEnd"
              linkLive={null}
            />

            <ProjectItem
              title="Zarpar"
              tech={
                <div className="flex flex-row gap-2 justify-center items-center m-auto">
                  <GrReactjs />
                </div>
              }
              img={zarpar}
              linkGit="https://github.com/MatheusRFilho/Zarpar-PI"
              linkLive={null}
            />
          </div>
        </div>
      </div>
    </>
  );
};
