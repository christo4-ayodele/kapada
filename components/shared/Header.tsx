import React, { useState } from 'react';
import NavItems from './NavItems';
import MobileNav from './MobileNav';
import MenuSvg from '@/public/assets/svg/MenuSvg';
import Image from 'next/image';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <header className=" w-full p-4 lg:p-6 border-b-lima-500 border-b-[2px] flex justify-between ">
      <p className="uppercase text-3xl font-extrabold text-lima-600 w-[20%]">
        kapada
      </p>
      <nav className="w-[80%] hidden sm:flex items-center justify-center ">
        <NavItems />
      </nav>

      <div className="sm:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
