import ImgTxtfifsm from "@/components/shared/ImgTxtfifsm";
import MailSpiral from "@/components/shared/MailSpiral";
import SampleGallery from "@/components/shared/SampleGallery";
import ServiceGrid from "@/components/shared/ServiceGrid";
import ServicesHero from "@/components/shared/ServicesHero";
import SubHeadGreen from "@/components/shared/SubHeadGreen";
import TxtImgfiffif from "@/components/shared/TxtImgfiffif";
import {
  monogramImgTxtfifsm,
  monogramSamples,
  monogramServiceHero,
  monogramServices,
  monogramTxtImgfiffif,
} from "@/constants";

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

      {/* Sample Images */}
      <div className=" bg-linear-to-br from-lima-200 from-10% via-lima-700  to-lima-200  m-5 rounded-md p-5">
        <p className="text-center text-[3rem] font-bold text-white ">Samples</p>
        <SampleGallery images={monogramSamples} />
      </div>
    </section>
  );
};

export default page;
