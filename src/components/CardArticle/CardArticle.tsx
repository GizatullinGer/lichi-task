import React, { useState } from 'react';
import Image from 'next/image';

import Button from '../@UIkit/Button/Button';
import Modal from '../Modal/Modal';
import { TgetArticleResponse } from '@/services/types/TarticleService';
import ArticleContent from '../ArticleContent/ArticleContent';

type CardArticleProps = { article: TgetArticleResponse };

const CardArticle: React.FC<CardArticleProps> = ({ article }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <div className="bg-white p-[30px] rounded-xl mt-[30px] mx-[10px] first:mt-0">
      <h2 className="text-xl font-bold">{article.title}</h2>
      <p className="mt-[15px]">{article.description}</p>
      {article.img && (
        <Image
          src={Object.keys(article.img).length !== 0 ? (article.img as string) : '/kalendari-priroda-sneg-derevya-2018-1295927.jpg'}
          className="mt-[15px]"
          width={500}
          height={500}
          alt="img_post"
        />
      )}
      <div className="mt-[15px] flex items-center justify-between">
        <p>Дата публикации: {article.date}</p>
        <Button
          text="Перейти"
          onClick={() => setIsOpenModal(true)}
          size="m"
        />
        <Modal
          isOpen={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        >
          <ArticleContent article={article} />
        </Modal>
      </div>
    </div>
  );
};

export default CardArticle;
