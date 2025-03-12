import React, { useState } from "react";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import MenuSvg from "@/public/assets/svg/MenuSvg";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

const Header = () => {
  return (
    <header className="border-b-lima-500 bg-white-50 flex h-[100px] w-full items-center justify-between border-b-[2px] p-4 lg:p-6">
      <div className="flex h-[50px] items-center">
        <Link href={ROUTES.HOME}>
          <Image
            src="/assets/svg/kapada-logo-reup.svg"
            width={250}
            height={300}
            alt="kapada-logo"
            className=""
          />
        </Link>
      </div>
      <nav className="bg-fun-green-900 hidden max-w-3xl items-center justify-center rounded-xl px-5 py-2 max-lg:ml-4 max-md:flex-initial sm:flex">
        <NavItems />
      </nav>

      <div className="sm:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
