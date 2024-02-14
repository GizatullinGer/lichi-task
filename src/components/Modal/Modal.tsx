'use client';

import React, { useEffect, useRef, useState } from 'react';

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpenModal: (state: boolean) => void;
};

const Modal: React.FC<ModalProps> = ({ children, isOpen, setIsOpenModal }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpenModal(false);
      }
    };

    const handleBodyScroll = () => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    handleBodyScroll();

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, setIsOpenModal]);

  return (
    <React.Fragment>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,.5)] z-10">
          <div className="relative bg-[#ffffff] w-[860px] h-[90vh] p-[30px] rounded-xl">
            <div
              className="absolute top-3 right-3 text-[24px] font-bold cursor-pointer"
              onClick={() => setIsOpenModal(false)}
            >
              &times;
            </div>
            <div className="h-full overflow-auto">{children}</div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Modal;
