import React from "react";
import { ContactForm } from "@/components/shared/ContactForm";
import ContactSocials from "@/components/shared/ContactSocials";

const page = () => {
  return (
    <>
      <section>
        <header className="text-fun-green-900 text-center text-6xl font-bold md:m-5">
          Contact <span className="text-sunset-orange-500">Us</span>
        </header>
        <p className="text-fun-green-600 m-auto text-center text-[1.3rem] max-md:p-5 md:max-w-[1000px]">
          Have any questions or you would like to enquire more about the
          services provided by Kapada Integrated Ltd? We're here to help
        </p>
      </section>

      <section className="m-auto mb-10 flex justify-center max-lg:max-w-[500px] max-lg:flex-col max-sm:m-3 md:mt-20">
        <span className="max-md:mb-10">
          <ContactForm />
        </span>

        <span className="text-fun-green-900 max-lg:m-auto max-lg:w-full lg:ml-10">
          <ContactSocials />
        </span>
      </section>
    </>
  );
};

export default page;
