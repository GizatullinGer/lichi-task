import React from 'react';
import Button from '../@UIkit/Button/Button';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="w-full h-[80px] fixed flex items-center justify-between bg-[#ffeacc] px-[30px]">
      <div>Blog</div>
      <div>
        <Link href={'/createartical'}>
          <Button text="Новая запись" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
