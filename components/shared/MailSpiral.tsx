import { HiOutlineMailOpen } from 'react-icons/hi';
import { SiMinutemailer } from 'react-icons/si';

const MailSpiral = () => {
  return (
    <div className="relative mt-20 left-1/2 flex w-[22rem] aspect-square border border-lima-400 rounded-full -translate-x-1/2 scale-75 md:scale-100 ">
      <div className="flex w-60 aspect-square m-auto border border-lima-300 rounded-full">
        <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-lima-500 rounded-full">
          <div className="flex items-center justify-center w-full h-full rounded-full bg-lima-700  ">
            <HiOutlineMailOpen className="text-3xl text-slate-200" />
          </div>
        </div>
      </div>
      <ul>
        <li //first plane
          className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-[290deg]`}
        >
          <div
            className={`relative -top-[1.6rem] flex w-[3.2rem] bg-lima-500 border border-lima-300 rounded-xl rotate-[65deg] `}
          >
            <SiMinutemailer className="text-[.9rem] m-auto " />
          </div>
        </li>
        <li //second plane
          className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-[325deg]`}
        >
          <div
            className={`relative -top-[1.6rem] flex w-[3.2rem] bg-lima-500 border border-lima-300 rounded-xl rotate-[65deg] `}
          >
            <SiMinutemailer className="text-[1.2rem] m-auto " />
          </div>
        </li>
        <li //third plane
          className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-0`}
        >
          <div
            className={`relative -top-[1.6rem] flex w-[3.2rem] bg-lima-500 border border-lima-300 rounded-xl rotate-[65deg] `}
          >
            <SiMinutemailer className="text-[1.5rem] m-auto " />
          </div>
        </li>
        <li //fourth plane
          className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-45`}
        >
          <div
            className={`relative -top-[1.6rem] flex w-[3.2rem] bg-lima-500 border border-lima-300 rounded-xl rotate-[65deg] `}
          >
            <SiMinutemailer className="text-[1.9rem] m-auto " />
          </div>
        </li>
        <li //fifth plane
          className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-90`}
        >
          <div
            className={`relative -top-[1.6rem] flex w-[3.2rem] bg-lima-500 border border-lima-300 rounded-xl rotate-[45deg]`}
          >
            <SiMinutemailer className="text-[2.4rem] m-auto " />
          </div>
        </li>
        <li //sixth plane
          className={`absolute left-1/2 -top-10 h-1/2 -ml-[1.6rem] origin-bottom rotate-[150deg]`}
        >
          <div
            className={`relative -top-[1.6rem] flex w-[3.2rem] bg-lima-500 border border-lima-300 rounded-xl -rotate-[270deg] `}
          >
            <SiMinutemailer className="text-[2.7rem] m-auto " />
          </div>
        </li>
        <li //seventh plane
          className={`absolute left-56 -top-16 h-1/2 -ml-[1.6rem] origin-bottom rotate-[210deg]`}
        >
          <div
            className={`relative -top-[1.6rem] flex w-[3.2rem] bg-lima-500 border border-lima-300 rounded-xl rotate-[100deg] `}
          >
            <SiMinutemailer className="text-[3.4rem] m-auto " />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MailSpiral;
