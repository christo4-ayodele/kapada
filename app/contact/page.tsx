import React from "react";
import { ContactForm } from "@/components/shared/ContactForm";
import ContactSocials from "@/components/shared/ContactSocials";

const page = () => {
  return (
    <>
      <section>
        <header className="text-6xl text-lima-600 font-bold  text-center md:m-5">
          Contact <span className="text-white">Us</span>
        </header>
        <p className="text-[1.3rem] m-auto  text-center md:max-w-[1000px] max-md:p-5 ">
          Have any questions or you would like to enquire more about the
          services provided by Kapada Integrated Ltd? We're here to help
        </p>
      </section>

      <section className="flex max-lg:flex-col  justify-center md:mt-20 mb-10  max-lg:max-w-[500px]   m-auto max-sm:m-3">
        <span className="max-md:mb-10">
          <ContactForm />
        </span>

        <span className="lg:ml-10 max-lg:w-full max-lg:m-auto text-lima-950">
          <ContactSocials />
        </span>
      </section>
    </>
  );
};

export default page;
