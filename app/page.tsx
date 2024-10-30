import ServicesHome from '@/components/shared/ServicesHome';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-dotted-pattern p-5 ">
      <section className="grid  grid-cols-10  grid-rows-4 sm:grid-rows-3 min-h-[400px]   gap-5 max-h-[700px] ">
        <div className="sm:row-span-2 row-span-1 col-span-10 sm:col-span-4   border-2 border-lime-500 rounded-3xl bg-gradient-to-r from-slate-200 to-lima-200	 flex justify-center items-center p-6 ">
          <p className="text-[.8rem] sm:text-2xl text-lima-400 font-bold  ">
            <span className="  font-sans text-4xl lg:text-7xl font-extrabold text-lima-700">
              Kapada Integrated Services Ltd.
            </span>{' '}
            Freight Forwarding, Monogramming, Tractor Hiring, Waste Management
          </p>
        </div>
        <Link
          href={'/services/freight-forwarding'}
          className="relative col-span-10 sm:col-span-6 border-2 border-lime-500 rounded-3xl  flex justify-center  gap-5 transform transition-transform hover:scale-110"
        >
          <Image
            fill={true}
            alt="freight-fowarding"
            src="/assets/img/freight-forwarding-hero.png"
            className="object-cover rounded-3xl "
          />
          <p className=" absolute sm:text-[3em] text-[2.5rem] font-extrabold text-slate-100 z-1 left-5 bottom-2 ">
            Freight Forwarding
          </p>
        </Link>
        <Link
          href={'/services/monogramming'}
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
        </Link>
        <Link
          href={'/services/agricultural-services'}
          className="relative  col-span-5  sm:col-span-3 border-2 border-lime-500 rounded-3xl flex justify-center items-center gap-5 transform transition-transform hover:scale-105"
        >
          <Image
            fill={true}
            alt="agric tractor-hiring"
            src="/assets/img/tractor-hiring-hero.jpg"
            className="object-cover rounded-3xl"
          />
          <p className=" absolute font-hero-sm md:text-[2.7em] lg:text-[3em] font-extrabold text-slate-100 z-1 left-5 bottom-2  ">
            Tractor Hiring
          </p>
        </Link>
        <Link
          href={'/services/waste-management'}
          className="relative  col-span-5  sm:col-span-5 border-2 border-lime-500 rounded-3xl flex justify-center items-center gap-5 transform transition-transform hover:scale-110"
        >
          <Image
            fill={true}
            alt="waste management"
            src="/assets/img/waste-manage1.jpg"
            className="object-cover rounded-3xl"
          />
          <p className=" absolute font-hero-sm md:text-[2.7em] lg:text-[3em] font-extrabold text-slate-100 z-1 left-5 bottom-2  ">
            Waste <span className="max-sm:hidden">Management</span>
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
