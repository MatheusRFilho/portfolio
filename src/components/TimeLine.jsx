import React from 'react';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { MdWorkOutline } from 'react-icons/md';
import { GiUpgrade } from 'react-icons/gi';

export const TimeLine = () => {
  return (
    <div className="container ">
      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
        <div className="flex flex-row-reverse md:contents">
          <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1 tracking-widest">
              Curso Técnico em Informática
            </h3>

            <p className="leading-tight text-justify mb-1 tracking-widest">
              <span className=" font-bold tracking-widest">Instituição: </span>
              CTMA - Colégio Técnico Municipal de Aparecida
            </p>
            <p className="leading-tight text-justify mb-1 tracking-widest">
              <span className=" font-bold tracking-widest">Duração: </span>Junho
              de 2017 - Dezembro de 2018
            </p>
            <p className="leading-tight text-justify mb-1 tracking-widest">
              <span className=" font-bold tracking-widest">
                O que foi estudado:{' '}
              </span>
              Estudei o basico de programação e banco de dados.
            </p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#5651e5] pointer-events-none"></div>
            </div>
            <div className="rounded-full bg-blue-500 border-[#5651e5] border-4 w-10 h-10 absolute top-1/2 -mt-5  left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <HiOutlineBookOpen color="white" />
            </div>
          </div>
        </div>
        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#5651e5] pointer-events-none"></div>
            </div>
            <div className="w-10 h-10 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow border-4 border-[#5651e5]  left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center ">
              <HiOutlineBookOpen color="white" />
            </div>
          </div>
          <div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1 tracking-widest">
              Analise e Desenvolvimento de Sistemas
            </h3>

            <p className="leading-tight text-justify mb-1 tracking-widest">
              <span className=" font-bold tracking-widest">Instituição: </span>
              FATEC-GTA - Faculdade de Tecnologia de Guaratinguetá
            </p>
            <p className="leading-tight text-justify mb-1 tracking-widest">
              <span className=" font-bold tracking-widest">Duração: </span>Julho
              de 2018 - Dezembro de 2021
            </p>
            <p className="leading-tight text-justify mb-1 tracking-widest">
              <span className=" font-bold tracking-widest">
                O que foi estudado:{' '}
              </span>
              A matemática, em especial raciocínio lógico e cálculo. Noções
              sobre Bancos de Dados, sistemas baseados em web (como serviços
              bancários pela internet) e programação distribuída. Administração,
              contabilidade, economia, estatística e inglês. Além disso,
              habilidades para leitura e interpretação de texto.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse md:contents">
          <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1 tracking-widest">
              Estagio como Desenvolvedor
            </h3>

            <p className="leading-tight text-justify mb-1 tracking-widest">
              <span className=" font-bold tracking-widest">Empresa: </span>
              The One It
            </p>
            <p className="leading-tight text-justify mb-1 tracking-widest">
              <span className=" font-bold tracking-widest">Duração: </span>Julho
              de 2020 - Julho de 2021
            </p>
            <p className="leading-tight text-justify mb-1 tracking-widest">
              <span className=" font-bold tracking-widest">
                No que eu trabalhei:{' '}
              </span>
              Atuei no desenvolvimento de soluções tanto para WEB como para
              aplicativos, as principais atribuições foram:
              <br /> - Levantamento de requisitos; <br />- Desenvolvimento de
              códigos, seja em WEB ou Aplicativos; <br />- Integração de
              funcionalidades; <br />- Aplicação de lógicas para resolução de
              problemas.
              <br />
              As principais tecnologias utilizadas foram: <br />- Html;
              <br /> - Css; <br />- NestJs; <br />- JavaScript; <br />- React;{' '}
              <br />- ReactNative.
            </p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#5651e5] pointer-events-none"></div>
            </div>
            <div className="rounded-full bg-blue-500 border-[#5651e5] border-4 w-10 h-10 absolute top-1/2 -mt-5  left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <MdWorkOutline color="white" />
            </div>
          </div>
        </div>

        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#5651e5] pointer-events-none"></div>
            </div>
            <div className="w-10 h-10 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow border-4 border-[#5651e5]  left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center ">
              <MdWorkOutline color="white" />
            </div>
          </div>
          <div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1 tracking-widest">
              Desenvolvedor Front-end Junior
            </h3>

            <p className="leading-tight text-justify mb-1">
              <span className=" font-bold tracking-widest">Empresa: </span>
              Devnology
            </p>
            <p className="leading-tight text-justify mb-1 tracking-widest">
              <span className=" font-bold tracking-widest">Duração: </span>Julho
              de 2021 - Novembro de 2022
            </p>
            <p className="leading-tight text-justify mb-1 tracking-widest">
              <span className=" font-bold tracking-widest">
                No que eu trabalhei:{' '}
              </span>
              Atuei no desenvolvimento de soluções tanto para WEB como para
              micro serviçoes no back-end, as principais atribuições foram:{' '}
              <br />- Detalhamento de escopo;
              <br /> - Levantamento de requisitos; <br />- Desenvolvimento de
              códigos, seja em WEB ou Back-end; <br />- Integração de
              funcionalidades; <br />- Aplicação de lógicas para resolução de
              problemas;
              <br /> - Planejamento de micro serviços.
              <br />
              As principais tecnologias utilizadas foram: <br />- Flutter;
              <br /> - Dart; <br />- NestJs; <br />- JavaScript. <br />
            </p>
          </div>
        </div>

        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#5651e5] pointer-events-none"></div>
            </div>
            <div className="w-10 h-10 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow border-4 border-[#5651e5]  left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center ">
              <GiUpgrade color="white" />
            </div>
          </div>
          <div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1 tracking-widest">
              <span className=" font-bold tracking-widest">Promoção: </span>{' '}
              Desenvolvedor Front-End
            </h3>

            <p className="leading-tight text-justify mb-1 tracking-widest">
              <span className=" font-bold tracking-widest">Empresa: </span>
              Devnology
            </p>
            <p className="leading-tight text-justify mb-1 tracking-widest">
              <span className=" font-bold tracking-widest">Duração: </span>
              Novembro de 2022 - Janeiro de 2023
            </p>
          </div>
        </div>

        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#5651e5] pointer-events-none"></div>
            </div>
            <div className="w-10 h-10 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow border-4 border-[#5651e5]  left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center ">
              <GiUpgrade color="white" />
            </div>
          </div>
          <div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1 tracking-widest">
              <span className=" font-bold tracking-widest">Promoção: </span>{' '}
              Tech-Lead Front-End
            </h3>

            <p className="leading-tight text-justify mb-1 tracking-widest">
              <span className=" font-bold tracking-widest">Empresa: </span>
              Devnology
            </p>
            <p className="leading-tight text-justify mb-1 tracking-widest">
              <span className=" font-bold tracking-widest">Duração: </span>
              Janeiro de 2023 - Momento
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
