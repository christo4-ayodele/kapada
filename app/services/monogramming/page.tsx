import ImgTxtfifsm from '@/components/shared/ImgTxtfifsm';
import MailSpiral from '@/components/shared/MailSpiral';
import ServiceGrid from '@/components/shared/ServiceGrid';
import ServicesHero from '@/components/shared/ServicesHero';
import SubHeadGreen from '@/components/shared/SubHeadGreen';
import TxtImgfiffif from '@/components/shared/TxtImgfiffif';
import {
  monogramImgTxtfifsm,
  monogramServiceHero,
  monogramServices,
  monogramTxtImgfiffif,
} from '@/constants';

type Props = {};

const page = (props: Props) => {
  return (
    <section>
      <ServicesHero
        imgUrl={monogramServiceHero.imgUrl}
        heroTitle={monogramServiceHero.heroTitle}
        heroText={monogramServiceHero.heroText}
      />

      <div className="m-5 ">
        <SubHeadGreen text="Why Choose Us" />

        <TxtImgfiffif
          text={monogramTxtImgfiffif.text}
          imgUrl={monogramTxtImgfiffif.imgUrl}
        />
      </div>

      <div className="m-5">
        <SubHeadGreen text="Our Services:" />

        <ServiceGrid freightServices={monogramServices} />
      </div>

      <div className="m-5">
        <SubHeadGreen text="Expertise You Can Trust" />

        <ImgTxtfifsm
          imgUrl={monogramImgTxtfifsm.imgUrl}
          text={monogramImgTxtfifsm.text}
        />
      </div>

      <div className="p-5  max-sm:text-center">
        <SubHeadGreen text="Partner with Us" />

        <p className="text-center flex m-auto max-w-[600px]  max-sm:w-[full]">
          Choose Kapada Integrated Services for all your monogramming and
          embroidery needs. Experience the difference of detailed craftsmanship,
          personalized service, and dedication to excellence in every piece we
          create.
        </p>

        <MailSpiral />
      </div>
    </section>
  );
};

export default page;
