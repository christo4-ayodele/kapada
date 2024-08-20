import Image from 'next/image';

interface Props {
  imgUrl: string;
  text: string;
}

const ImgTxtfifsm: React.FC<Props> = ({ imgUrl, text }) => {
  return (
    <div className="flex max-sm:flex-col border-2 border-lima-600 justify-between bg-lima-300 max-h-[400px] max-sm:max-h-[1000px]">
      <Image
        src={imgUrl}
        alt="expertise"
        height={400}
        width={500}
        className=" max-h-[500px] object-cover"
      />
      <p className="w-[50%] max-sm:w-full max-sm:p-5 text-[1.3rem] mr-7 mt-7 ">
        {text}
      </p>
    </div>
  );
};

export default ImgTxtfifsm;
