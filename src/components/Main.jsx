import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Venha me conhecer!
          </p>
          <h1 className="py-4 text-gray-700">
            Olá, Eu sou o <span className=" text-[#5651e5] ">Matheus 😊</span>
          </h1>
          <h1 className="py-4 text-gray-700">
            Um desenvolvedor de front-End Web
          </h1>
          <p className="py-4 text-grey-600 max-w-[70%] m-auto">
            Sou um desenvolvedor de front-end focado no desenvolvimento web.
            Atualmente, me aventurando no mundo dos Tech Leads enquanto
            desenvolvo aplicações no front-end e estudo algumas tecnologias do
            back-end.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link
              href="https://www.linkedin.com/in/matheus-filho-90015917a/"
              target="_blank"
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110  ease-in duration-300"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://github.com/MatheusRFilho"
              target="_blank"
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110  ease-in duration-300"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=5512991403532&text=Digite%20aqui%20o%20assunto"
              target="_blank"
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110  ease-in duration-300"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href="mailto:matheusrodrigofilho@outlook.com?subject=Digite aqui o assunto=&body=Digite aqui o motivo do contato"
              target="_blank"
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110  ease-in duration-300"
            >
              <AiFillMail />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
