import ServiceGrid from '@/components/shared/ServiceGrid';
import ServicesHero from '@/components/shared/ServicesHero';
import TxtImgfiffif from '@/components/shared/TxtImgfiffif';
import ImgTxtfifsm from '@/components/shared/ImgTxtfifsm';
import {
  freightImgTxtfifsm,
  freightServiceHero,
  freightServices,
  freightTxtImgfiffif,
} from '@/constants';

import MailSpiral from '@/components/shared/MailSpiral';
import SubHeadGreen from '@/components/shared/SubHeadGreen';

type Props = {};

const page = (props: Props) => {
  return (
    <section>
      <ServicesHero
        heroTitle={freightServiceHero.heroTitle}
        imgUrl={freightServiceHero.imgUrl}
        heroText={freightServiceHero.heroText}
      />

      <div className="m-5">
        <SubHeadGreen text="Why Choose Us" />

        <TxtImgfiffif
          text={freightTxtImgfiffif.text}
          imgUrl={freightTxtImgfiffif.imgUrl}
        />
      </div>

      <div className="m-5 mt-10">
        <SubHeadGreen text="Our Services:" />

        <ServiceGrid freightServices={freightServices} />
      </div>

      <div className="mt-10">
        <SubHeadGreen text="Expertise You Can Trust" />

        <ImgTxtfifsm
          imgUrl={freightImgTxtfifsm.imgUrl}
          text={freightImgTxtfifsm.text}
        />
      </div>

      <div className="p-5  max-sm:text-center">
        <SubHeadGreen text="Partner with Us" />

        <p className="text-center flex m-auto max-w-[600px]  max-sm:w-[full]">
          Choose Kapada Integrated Services for your freight forwarding and
          customs clearance needs at Nigerian ports. Experience the difference
          that comes with expert handling, personalized service, and a
          commitment to excellence in every shipment.
        </p>

        <MailSpiral />
      </div>
    </section>
  );
};

export default page;
