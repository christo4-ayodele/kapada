import ServicesHome from '@/components/shared/ServicesHome';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-dotted-pattern p-5 ">
      <section className="grid  grid-cols-10  grid-rows-3 md:grid-rows-2 min-h-[400px]  lg:h-screen gap-5 max-h-[700px] ">
        <div className="sm:row-span-2 row-span-1 col-span-10 sm:col-span-4   border-2 border-lime-500 rounded-3xl bg-gradient-to-r from-slate-200 to-lima-200	 flex justify-center items-center p-6 ">
          <p className="text-xl sm:text-2xl text-lima-400 font-bold  ">
            <span className="  font-sans text-4xl lg:text-7xl font-extrabold text-lima-700">
              Kapada Integrated Services Ltd.
            </span>{' '}
            Expert Freight Forwarding, Garment Manufacturing, and Agricultural
            Solutions.
          </p>
        </div>
        <div className="relative col-span-10 sm:col-span-6 border-2 border-lime-500 rounded-3xl  flex justify-center  gap-5">
          <Image
            fill={true}
            alt="freight-fowarding"
            src="/assets/img/freight-forwarding-hero.png"
            className="object-cover rounded-3xl "
          />
          <p className=" absolute sm:text-[3em] text-[2.5rem] font-extrabold text-slate-200 z-1 left-5 bottom-2 ">
            Freight Forwarding
          </p>
        </div>
        <div className="relative col-span-5 sm:col-span-4 lg:col-span-3 border-2 border-lime-500 rounded-3xl  flex justify-center items-center gap-5">
          <Image
            fill={true}
            alt="monogramming/garment making"
            src="/assets/img/monogram-hero.jpg"
            className="object-cover rounded-3xl"
          />
          <p className=" absolute text-[1.7rem]  sm:text-[3em] font-extrabold text-slate-200 z-1 left-2  sm:left-5 bottom-2">
            <span className="">Monogram</span>
          </p>
        </div>
        <div className="relative  col-span-5 sm:col-span-2 lg:col-span-3 border-2 border-lime-500 rounded-3xl flex justify-center items-center gap-5 ">
          <Image
            fill={true}
            alt="agric tractor-hiring"
            src="/assets/img/tractor-hiring-hero.jpg"
            className="object-cover rounded-3xl"
          />
          <p className=" absolute font-hero-sm sm:text-[3em] font-extrabold text-slate-200 z-1 left-5 bottom-2 ">
            Tractor Hiring
          </p>
        </div>
      </section>

      <ServicesHome />
    </div>
  );
}
