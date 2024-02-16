'use client';

import React from 'react';
import CardArticle from '@/components/CardArticle/CardArticle';
import { useGetArticlesQuery } from '@/services/ArticleService';

const Home = () => {
  const { data, isLoading, isError, isSuccess } = useGetArticlesQuery({});

  return (
    <div className="max-w-[560px] mx-auto py-8">
      {isLoading && <p>Загрузка...</p>}
      {isError && <p className="text-[#ff0000]">Ошибка получения данных</p>}
      {isSuccess &&
        [...data]
          .sort((a, b) => Number(b.id) - Number(a.id))
          .map(item => (
            <React.Fragment key={item.id}>
              <CardArticle article={item} />
            </React.Fragment>
          ))}
    </div>
  );
};

export default Home;
