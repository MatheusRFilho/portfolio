import Image from 'next/image';
import React from 'react';

import code from '../../public/assets/about-pt.png';

export const Infos = () => {
  return (
    <div className="flex justify-between sm:flex flex-col md:flex-row items-center">
      <div className="md:w-[50%] text-center p-8 sm:w-full  sm:p-3 items-center">
        <div className="flex justify-center items-center">
          <h3 className="text-center tracking-widest font-extrabold text-2xl p-5 pb-3 m-4 text-[#5651e5] border-b-4 border-[#5651e5]">
            Sobre Mim
          </h3>
        </div>
        <p className="text-left mt-3 md:px-8 tracking-widest">
          Olá, meu nome é Matheus Rodrigo nasci no dia 24 de fevereiro do ano de
          2000, sou brasileiro e atualmente moro em Aparecida - São Paulo.
          <br />
          Conheci a programação atraves do meu curso tecnico e acabei me
          apaixonando pela area.
          <br />
          Durante meus estudos auto-ditadas acabei por conhecer o React e posso
          dizer que é o framework que eu mais domino.
          <br />
          Gosto muito de novos desafios para que eu possa ganhar novos
          conhecimentos a cada dia que passa.
          <br />
        </p>
      </div>
      <div className="md:w-[50%]  p-8 sm:w-full  ">
        <Image src={code} alt="code" />
      </div>
    </div>
  );
};
