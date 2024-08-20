import Image from 'next/image';

interface freightService {
  id: string;
  title: string;
  text: string;
  imgUrl: string;
}

interface Props {
  freightServices: Array<freightService>;
}

const ServiceGrid: React.FC<Props> = ({ freightServices }) => {
  return (
    <ul className="grid grid-cols-10 grid-rows-2  gap-5">
      {freightServices.map((service, index) => (
        <li
          className="relative col-span-5 h-[300px] border-2 border-lima-600 rounded-3xl "
          key={index}
        >
          <div className="absolute flex flex-1 flex-col  text-white z-50 bottom-1 m-4 max-sm:mx-2 ">
            <span className="font-extrabold sm:text-3xl text-xl">
              <p className="max-sm:max-w-[130px]  max-sm:break-words">
                {service.title}
              </p>
            </span>
            <span className="max-sm:hidden">{service.text}</span>
          </div>

          <div className="absolute inset-0 opacity-50 mix-blend-multiply bg-lima-600 rounded-3xl"></div>
          <Image
            src={service.imgUrl}
            alt="containers"
            height={400}
            className="  h-full w-[700px] object-cover rounded-3xl "
            width={400}
          />
        </li>
      ))}
    </ul>
  );
};

export default ServiceGrid;
