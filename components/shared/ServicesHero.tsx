import Image from 'next/image';
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

        <div className="absolute top-0">
          <div className="flex max-sm:flex-col">
            <p className="text-4xl font-extrabold  mx-5 my-2  sm:w-[300px] text-white  ">
              {heroTitle}
            </p>

            <div className="m-auto p-5 bg-gradient-to-br  from-lima-600 to-lima-300  text-lima-300 w-[350px]  sm:w-[400px] h-[400px]   rounded-lg  ">
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
