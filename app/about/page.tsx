import {
  aboutUsAssociations,
  aboutUsFirst,
  servicesCard,
  missionStatement,
} from '@/constants';
import React from 'react';
import AboutUsAss from '@/components/shared/AboutUsAss';

const page = () => {
  return (
    <section>
      <div className="h-[400px]  bg-lime-700 text-7xl font-bold  flex items-center justify-center m-auto text-center">
        <div className="flex  flex-col h-[full] w-[500px] ">
          <p className="mb-5">
            About <span className="text-slate-50">Us</span>
          </p>
          <p className="text-slate-100 text-base text-center ">
            {servicesCard[0].text}
          </p>
        </div>
      </div>

      <div className="pb-4 mt-5">
        <p className="text-center text-xl p-5">{aboutUsFirst.text}</p>

        <div className="m-5">
          <AboutUsAss aboutUsAssociation={aboutUsAssociations} />
        </div>
      </div>

      <div className="bg-lima-600 h-screen p-5 text-center">
        <header className="text-4xl font-bold p-5">Mission Statement</header>
        <p className=" max-w-[700px] m-auto font-bold text-slate-100">
          {missionStatement.text}
        </p>
      </div>
    </section>
  );
};

export default page;
