import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import { BsFillPersonLinesFill } from 'react-icons/bs';

function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center">
        <div>
          <h1>Olá, Eu sou o Matheus.</h1>
          <div>
            <h2 className="py-2 text-gray-500 uppercase">
              Desenvolvedor Front End
            </h2>
            <p className="py-4 m-auto tracking-widest text-gray-400 uppercase">
              Conheça mais sobre mim!{' '}
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto p-2">
              <div className="p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-125">
                <a href="https://www.linkedin.com/in/matheus-filho-90015917a/">
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-125">
                <a href="https://github.com/MatheusRFilho">
                  <FaGithub />
                </a>
              </div>
              <div className="p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-125">
                <a href="mailto:matheusrodrigofilho@outlook.com">
                  <AiOutlineMail />
                </a>
              </div>
              {/* <div className="p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-125">
                <a href="https://dialabk.hashnode.dev/">
                  <BsFillPersonLinesFill />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
