"use client";

import ServicesHome from "@/components/shared/ServicesHome";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Home() {
  return (
    <div className="bg-dotted-pattern p-5">
      <section className="bg-fun-green-900 grid max-h-[700px] min-h-[250px] grid-cols-10 grid-rows-4 gap-5 rounded-4xl sm:grid-rows-2 sm:px-5 sm:py-5 md:px-5 md:py-10 lg:p-10">
        <div className="col-span-10 row-span-1 flex items-center justify-center sm:col-span-4 sm:row-span-2">
          <p className="text-fun-green-200 flex flex-col gap-3 font-bold">
            <span className="text-white-50 font-sans text-4xl font-extrabold sm:text-5xl lg:text-7xl">
              Providing Services that help Nigerians.
            </span>
            <span className="sm:text-md md:text-xl lg:text-2xl">
              Freight Forwarding, Tractor Hiring, Waste Management
            </span>
          </p>
        </div>
        <Link
          href={"/services/freight-forwarding"}
          className="relative col-span-10 flex transform justify-center gap-5 rounded-3xl shadow-[0px_5px_25px_0px] shadow-black transition-transform hover:scale-95 sm:col-span-6"
        >
          <Image
            fill={true}
            alt="freight-fowarding"
            src="/assets/img/freight-forwarding-hero.png"
            className="rounded-3xl object-cover"
          />
          <p className="absolute bottom-2 left-5 z-1 text-[2.5rem] font-extrabold text-slate-100 sm:text-[3em]">
            Freight Forwarding
          </p>
        </Link>
        {/* <Link
          href={"/services/monogramming"}
          className="relative col-span-5 sm:col-span-3 border-2 border-lime-500 rounded-3xl  flex justify-center items-center gap-5 transform transition-transform hover:scale-110"
        >
          <Image
            fill={true}
            alt="monogramming/garment making"
            src="/assets/img/monogram-hero.jpg"
            className="object-cover rounded-3xl"
          />
          <p className=" absolute  max-sm:text-[1.5em] text-[1.7rem] md:text-[2.2em] lg:text-[3em] font-extrabold text-slate-100 z-1 left-2 md:left-2 bottom-2">
            Monogram
          </p>
        </Link> */}
        <Link
          href={"/services/agricultural-services"}
          className="relative col-span-5 flex transform items-center justify-center gap-5 rounded-3xl shadow-[0px_10px_25px_2px] shadow-black transition-transform hover:scale-95 sm:col-span-3"
        >
          <Image
            fill={true}
            alt="agric tractor-hiring"
            src="/assets/img/tractor-hiring-hero.jpg"
            className="rounded-3xl object-cover"
          />
          <p className="font-hero-sm absolute bottom-2 z-1 font-extrabold text-slate-100 md:text-[2em] lg:text-[2.7em]">
            Agriculture
          </p>
        </Link>
        <Link
          href={"/services/waste-management"}
          className="relative col-span-5 flex transform items-center justify-center gap-5 rounded-3xl shadow-[0px_10px_25px_2px] shadow-black transition-transform hover:scale-95 sm:col-span-3"
        >
          <Image
            fill={true}
            alt="waste management"
            src="/assets/img/waste-manage1.jpg"
            className="rounded-3xl object-cover"
          />
          <p className="font-hero-sm absolute bottom-2 left-5 z-1 font-extrabold text-slate-100 md:text-[2.1em] lg:text-[3em]">
            Plastic <span className="max-sm:hidden">Recycling</span>
          </p>
        </Link>

        {/* <Link
          href={'/services/software-engineering'}
          className="relative  col-span-5  sm:col-span-5 border-2 border-lime-500 rounded-3xl flex justify-center items-center gap-5 "
        >
          <Image
            fill={true}
            alt="software engineering"
            src="/assets/img/software-engineering1.jpg"
            className="object-cover rounded-3xl"
          />
          <p className=" absolute font-hero-sm max-sm:text-[1.9em]  md:text-[2.7em] lg:text-[3em] font-extrabold text-slate-100 z-1 left-2 md:left-2 bottom-2 ">
            Software <span className="max-sm:hidden">Engineering</span>
          </p>
        </Link> */}
      </section>

      <ServicesHome />
    </div>
  );
}
