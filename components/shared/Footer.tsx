import Image from 'next/image';
import { socials } from '@/constants';
import React from 'react';

const Footer = () => {
  return (
    <section className=" flex h-[100px] bg-lima-950 text-xl text-slate-200 items-center justify-between p-3">
      <p className="text-[10px] sm:text-xl">
        © 2024 Kapada Integrated Services.
      </p>
      <div className="flex gap-4 ">
        {socials.map((item) => (
          <div
            key={item.id}
            className="rounded-full w-[20px] sm:w-[40px] h-[20px]  sm:h-[40px] bg-white flex items-center justify-center "
          >
            <Image
              src={item.iconUrl}
              width={20}
              height={20}
              alt="discord"
              className="w-[10px] h-[10px] sm:w-[20px] sm:h-[20px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
