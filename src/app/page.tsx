'use client';

import React from 'react';
import CardArtical from '@/components/CardArtical/CardArtical';

export type mockDataType = {
  id: number;
  title: string;
  desc: string;
  img: string | undefined;
};

const Home = () => (
  <div className="max-w-[560px] mx-auto py-8">
    {mockData.map(item => (
      <React.Fragment key={item.id}>
        <CardArtical artical={item} />
      </React.Fragment>
    ))}
  </div>
);

export default Home;

const mockData: mockDataType[] = [
  {
    id: 1,
    title: 'Заголовок 1',
    desc: 'Описание',
    img: '/kalendari-priroda-sneg-derevya-2018-1295927.jpg',
  },
  {
    id: 2,
    title: 'Заголовок 2',
    desc: 'Описание',
    img: '/kalendari-priroda-sneg-derevya-2018-1295927.jpg',
  },
  {
    id: 3,
    title: 'Заголовок 3',
    desc: 'Описание',
    img: '/kalendari-priroda-sneg-derevya-2018-1295927.jpg',
  },
  {
    id: 4,
    title: 'Заголовок 4',
    desc: 'Описание',
    img: '/kalendari-priroda-sneg-derevya-2018-1295927.jpg',
  },
  {
    id: 5,
    title: 'Заголовок 5',
    desc: 'Описание',
    img: undefined,
  },
];
