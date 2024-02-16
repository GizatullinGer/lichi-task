import React from 'react';
import Button from '../@UIkit/Button/Button';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="w-full h-[80px] fixed flex items-center justify-between bg-[#ffeacc] px-[10px] md:px-[30px]">
      <div className="text-[32px] font-bold">Blog</div>
      <div>
        <Link href={'/createarticle'}>
          <Button
            text="Новая запись"
            size="m"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
