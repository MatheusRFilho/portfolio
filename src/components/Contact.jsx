import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillMail, AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import contact from '../../public/assets/contact.jpg';

export const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="flex justify-center items-center " id="contact">
        <h3 className="text-center tracking-widest font-extrabold text-2xl pt-5 pb-3 m-4 mt-16 text-[#5651e5] border-b-4 border-[#5651e5]">
          Contato
        </h3>
      </div>
      <div className="grid lg:grid-cols-5 gap-8">
        {/* left */}
        <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="lg:p-4 h-full">
            <div>
              <Image
                className="rounded-xl hover:scale-105 ease-in duration-300"
                src={contact}
                alt="/"
              />
            </div>
            <div>
              <h2 className="py-2">Matheus Filho</h2>
              <p>Desenvolvedor Front-End</p>
            </div>

            <div>
              <p className="uppercase pt-8">Conecte-se comigo!</p>
              <div className="flex items-center justify-between py-4">
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
        {/* right */}
        <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
          <div className="p-4">
            <form
              action="https://getform.io/f/ab0a33ef-d4ec-4666-a083-a8cabbd266e0"
              method="POST"
              // encType="multipart/form-data"
            >
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Nome</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">
                    Número de Celular
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="phone"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Email</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="email"
                  name="email"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Assunto</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="subject"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Mensagem</label>
                <textarea
                  className="border-2 rounded-lg p-3 border-gray-300"
                  rows="5"
                  name="message"
                ></textarea>
              </div>
              <button className="w-full p-4 text-gray-100 mt-4 bg-[#5651e5] rounded-xl">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};
