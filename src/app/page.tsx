'use client';

import React from 'react';
import CardArticle from '@/components/CardArticle/CardArticle';
import { useGetArticlesQuery } from '@/services/ArticleService';

const Home = () => {
  const { data, isLoading, isError, isSuccess } = useGetArticlesQuery({});

  return (
    <div className="max-w-[580px] mx-auto py-8">
      {isLoading && <p>Загрузка...</p>}
      {isError && <p className="text-[#ff0000]">Ошибка получения данных</p>}
      {isSuccess &&
        (data.length > 0 ? (
          [...data]
            .sort((a, b) => Number(b.id) - Number(a.id))
            .map(item => (
              <React.Fragment key={item.id}>
                <CardArticle article={item} />
              </React.Fragment>
            ))
        ) : (
          <h2 className="text-[24px] font-bold text-center">Статьи не найдены!</h2>
        ))}
    </div>
  );
};

export default Home;
