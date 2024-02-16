import Link from 'next/link';
import React from 'react';

import Button from '@/components/@UIkit/Button/Button';
import FormCreateArticle from '@/components/FormCreateArticle/FormCreateArticle';

const CreateArticle: React.FC = () => {
  return (
    <div className="max-w-[860px] h-full mx-auto py-8 px-[30px] bg-[#ffffff]">
      <Link href={'/'}>
        <Button
          text="На главную"
          size="s"
          className="border-[1px]"
        />
      </Link>
      <h1 className="text-[24px] font-bold mt-[30px]">Добавить новую статью</h1>
      <div className="mt-[30px]">
        <FormCreateArticle />
      </div>
    </div>
  );
};

export default CreateArticle;
