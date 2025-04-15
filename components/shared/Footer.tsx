import Image from "next/image";
import { socials } from "@/constants";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-fun-green-900 flex h-[100px] items-center justify-between p-3 text-xl text-slate-200">
      <p className="text-[10px] sm:text-xl">
        © 2025 Kapada Integrated Services Ltd.
      </p>
      <div className="flex gap-4">
        {socials.map((item) => (
          <div
            key={item.id}
            className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white sm:h-[40px] sm:w-[40px]"
          >
            <Image
              src={item.iconUrl}
              width={20}
              height={20}
              alt="discord"
              className="h-[10px] w-[10px] sm:h-[20px] sm:w-[20px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
