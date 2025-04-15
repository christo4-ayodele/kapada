import { servicesCard } from "@/constants";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

type Props = {};

const CardHero = (props: Props) => {
  return (
    <div className="flex flex-wrap justify-center">
      {servicesCard.map((item, index) => (
        <div
          className="border-lima-400 m-2 h-[310px] w-[400px] border-2 p-3 backdrop-blur-2xl sm:h-[330px]"
          key={index}
        >
          <div className="flex justify-between pl-4">
            <p className="text-white-50 text-[20px] font-bold sm:text-2xl">
              {item.title}
            </p>
            <item.icon className="text-white-50 text-3xl sm:text-4xl" />
          </div>
          <p className="text-fun-green-200 h-[220px] p-4 text-left text-[13px] leading-6 font-semibold max-sm:pt-1 sm:mb-2 sm:text-[15px]">
            {item.text}
          </p>

          <Button
            asChild
            className="text-white-50 ml-3 h-[1.5rem] w-[5.5rem] rounded-md bg-transparent hover:bg-transparent hover:text-white sm:h-[2rem] sm:w-[7rem] sm:rounded-xl"
          >
            <Link href={item.href} className="text-[.7rem] sm:text-[1rem]">
              Learn More...
            </Link>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default CardHero;
