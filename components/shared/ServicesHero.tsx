import Image from "next/image";
interface Props {
  heroTitle: string;
  imgUrl: string;
  heroText: string;
}

const ServicesHero = ({ heroTitle, imgUrl, heroText }: Props) => {
  return (
    <section>
      <div className="relative w-full h-[600px] ">
        <div className="absolute inset-0 bg-green-500 opacity-50 mix-blend-multiply w-[full] h-[600px]  "></div>
        <Image
          src={imgUrl}
          width={400}
          height={400}
          alt="freight-ship"
          className="object-cover object-[50%_75%] w-full h-[600px]"
        />

        <div className="absolute max-sm:top-0 inset-10 left-1  lg:inset-32">
          <div className="flex flex-col lg:flex-row ">
            <p className=" max-sm:text-left max-sm:w-full  max-lg:text-center text-4xl lg:text-6xl md:w-full lg:text-left font-extrabold  sm:mx-5 sm:my-2 mb-8  max-w-[500px] text-lima-50  ">
              {heroTitle}
            </p>

            <div className="m-auto p-5 bg-linear-to-br  from-lima-600 to-lima-300  text-lima-300 w-[350px]  sm:min-w-[400px] h-[400px]   rounded-lg  ">
              <p className="sm:text-[18pt] text-[15pt]  text-lima-200 font-bold  ">
                {heroText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
