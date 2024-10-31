import Image from 'next/image';

interface Props {
  text: string;
  imgUrl: string;
}

const TxtImgfiffif: React.FC<Props> = ({ text, imgUrl }) => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-between border-lima-600 border-2 gap-7 rounded-3xl w-auto ">
      <p className="text-[1.3rem] lg:max-w-[50%] p-5 sm:pl-16 ">{text}</p>

      <div className="absolute inset-0 bg-lima-300 opacity-50 mix-blend-multiply  rounded-3xl "></div>
      <Image
        src={imgUrl}
        alt="containers"
        height={400}
        width={400}
        className="h-full w-[50%] max-lg:w-full max-h-[500px] lg:min-h-[500px] object-cover rounded-3xl "
      />
    </div>
  );
};

export default TxtImgfiffif;
