import ServiceGrid from '@/components/shared/ServiceGrid';
import ServicesHero from '@/components/shared/ServicesHero';
import TxtImgfiffif from '@/components/shared/TxtImgfiffif';
import ImgTxtfifsm from '@/components/shared/ImgTxtfifsm';
import {
  freightImgTxtfifsm,
  freightServiceHero,
  freightServices,
  freightTxtImgfiffif,
  wasteManagementAssociations,
  wasteManagementServiceHero,
  wasteManagementServices,
  wasteManagementText,
  weightManagementTxtImgfiffif,
} from '@/constants';

import MailSpiral from '@/components/shared/MailSpiral';
import SubHeadGreen from '@/components/shared/SubHeadGreen';
import AboutUsAss from '@/components/shared/AboutUsAss';

type Props = {};

const page = (props: Props) => {
  return (
    <section>
      <ServicesHero
        heroTitle={wasteManagementServiceHero.heroTitle}
        imgUrl={wasteManagementServiceHero.imgUrl}
        heroText={wasteManagementServiceHero.heroText}
      />

      <div className="m-5">
        <SubHeadGreen text="Why Choose Us" />

        <TxtImgfiffif
          text={weightManagementTxtImgfiffif.text}
          imgUrl={weightManagementTxtImgfiffif.imgUrl}
        />
      </div>

      <div className="m-5 mt-10">
        <SubHeadGreen text="Our Services:" />

        <ServiceGrid freightServices={wasteManagementServices} />
      </div>

      {/*
      <div className="mt-10">
        <SubHeadGreen text="Expertise You Can Trust" />

        <ImgTxtfifsm
          imgUrl={freightImgTxtfifsm.imgUrl}
          text={freightImgTxtfifsm.text}
        />
      </div>
      */}

      <div>
        <SubHeadGreen text="Assosciations" />
        <div className="text-2xl text-center">{wasteManagementText}</div>
        <div className="m-5">
          <AboutUsAss aboutUsAssociation={wasteManagementAssociations} />
        </div>
      </div>
      <div className="p-5  max-sm:text-center">
        <SubHeadGreen text="Partner with Us" />

        <p className="text-center flex m-auto max-w-[600px]  max-sm:w-[full]">
          Join us in creating a cleaner, more sustainable environment. Whether
          you’re a business, a community organization, or an individual, Kapada
          Integrated Services provides efficient, reliable plastic recycling
          services that contribute to a circular economy. Contact us today to
          learn more about our plastic collection and baling services.
        </p>

        <MailSpiral />
      </div>
    </section>
  );
};

export default page;
