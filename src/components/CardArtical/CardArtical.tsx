import { mockDataType } from '@/app/page';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../@UIkit/Button/Button';
import Modal from '../Modal/Modal';

type CardArticalProps = { artical: mockDataType };

const CardArtical: React.FC<CardArticalProps> = ({ artical }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <div className="bg-white p-[30px] rounded-xl mt-[30px] first:mt-0">
      <h2 className="text-xl font-bold">{artical.title}</h2>
      <p className="mt-[15px]">{artical.desc}</p>
      {artical.img && (
        <Image
          src={artical.img}
          className="mt-[15px]"
          width={500}
          height={500}
          alt="img_post"
        />
      )}
      <div className="mt-[15px] flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <Image
            src="/chat_comment_message_talk_icon.svg"
            width={24}
            height={24}
            alt="comments"
          />
          <p>12</p>
        </div>
        <Button
          text="Перейти"
          onClick={() => setIsOpenModal(true)}
          size="m"
        />
        <Modal
          isOpen={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        >
          <div>
            <h2 className="text-xl font-bold">{artical.title}</h2>
            <p className="mt-[15px]">{artical.desc}</p>
            {artical.img && (
              <Image
                src={artical.img}
                className="mt-[15px]"
                width={800}
                height={800}
                alt="img_post"
              />
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CardArtical;
