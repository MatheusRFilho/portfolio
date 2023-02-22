import React, { useState, useEffect } from 'react';
// import { Tooltip } from '@material-tailwind/react';

export const ButtonWithText = ({ text, icon, modal }) => {
  // const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   const keyDownHandler = (e) => {
  //     if (showModal && e.code == 'Escape') {
  //       setShowModal(false);
  //     }
  //   };
  //   document.addEventListener('keydown', keyDownHandler);

  //   return () => {
  //     document.removeEventListener('keydown', keyDownHandler);
  //   };
  // });

  return (
    <>
      {/* <Tooltip
        content="Clique para obter mais informações!"
        placement="top"
        className="text-white p-3 bg-[#5651e5]"
      > */}
      <div
        // onClick={() => setShowModal(true)}
        className="flex flex-col justify-center items-center text-center "
      >
        {icon}
        <p className="uppercase text-center font-bold pt-1 tracking-widest">
          {text}
        </p>
      </div>

      {/* //TODO: Pegar o conteudo do arquivo modal.txt e colocar aqui */}
    </>
  );
};
