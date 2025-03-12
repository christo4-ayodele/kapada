import { servicesCard } from "@/constants";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

type Props = {};

const CardHero = (props: Props) => {
  return (
    <div className="flex flex-wrap ">
      {servicesCard.map((item, index) => (
        <div
          className="m-2 w-[400px] h-[310px] sm:h-[330px] border-2 border-lima-400 p-3  bg-slate-100"
          key={index}
        >
          <div className="flex justify-between pl-4 ">
            <p className=" text-[20px] sm:text-2xl font-bold ">{item.title}</p>
            <item.icon className="text-3xl  sm:text-4xl  " />
          </div>
          <p className="h-[220px] p-4 max-sm:pt-1 text-[13px] sm:text-[15px] font-semibold text-left leading-6 sm:mb-2 ">
            {item.text}
          </p>

          {/* <Button
            asChild
            className="rounded-md sm:rounded-xl w-[5.5rem] sm:w-[7rem] h-[1.5rem] sm:h-[2rem] bg-transparent border-2 border-lima-700 text-black hover:text-white hover:bg-red-300 ml-3"
          >
            <Link href={item.href} className="text-[.7rem] sm:text-[.8rem] ">
              Read More...
            </Link>
          </Button> */}
        </div>
      ))}
    </div>
  );
};

export default CardHero;
