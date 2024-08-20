import ImgTxtfifsm from '@/components/shared/ImgTxtfifsm';
import MailSpiral from '@/components/shared/MailSpiral';
import ServiceGrid from '@/components/shared/ServiceGrid';
import ServicesHero from '@/components/shared/ServicesHero';
import SubHeadGreen from '@/components/shared/SubHeadGreen';
import TxtImgfiffif from '@/components/shared/TxtImgfiffif';
import {
  agriculturalServiceHero,
  agricultureImgTxtfifsm,
  agricultureServices,
  agricultureTxtImgfiffif,
} from '@/constants';
import React from 'react';

const page = () => {
  return (
    <section>
      <ServicesHero
        imgUrl={agriculturalServiceHero.imgUrl}
        heroTitle={agriculturalServiceHero.heroTitle}
        heroText={agriculturalServiceHero.heroText}
      />

      <div className="m-5">
        <SubHeadGreen text="Why Choose Us" />

        <TxtImgfiffif
          text={agricultureTxtImgfiffif.text}
          imgUrl={agricultureTxtImgfiffif.imgUrl}
        />
      </div>

      <div className="m-5 mt-10">
        <SubHeadGreen text="Our Services:" />

        <ServiceGrid freightServices={agricultureServices} />
      </div>

      <div className="m-5">
        <SubHeadGreen text="Expertise You Can Trust" />

        <ImgTxtfifsm
          imgUrl={agricultureImgTxtfifsm.imgUrl}
          text={agricultureImgTxtfifsm.text}
        />
      </div>

      <div className="p-5  max-sm:text-center">
        <SubHeadGreen text="Partner with Us" />

        <p className="text-center flex m-auto max-w-[600px]  max-sm:w-[full]">
          Choose Kapada Integrated Services for all your agricultural
          requirements, from crop farming and tractor hiring to efficient fish
          drying and sustainable snail farming. Experience the difference of
          working with a partner who understands the unique challenges and
          opportunities in agriculture and is committed to your success.
        </p>

        <MailSpiral />
      </div>
    </section>
  );
};

export default page;
