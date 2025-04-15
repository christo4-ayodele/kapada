import React from "react";
import CardHero from "./CardHero";

type Props = {};

const ServicesHome = (props: Props) => {
  return (
    <section className="mt-10 pb-5">
      <div className="px-5 py-5 lg:px-10">
        <p className="text-white-50 text-[2.5em] font-extrabold"> Services</p>
        <p className="text-sunset-orange-500 mt-2 mb-5 text-2xl font-bold">
          What we can do for you
        </p>
      </div>
      <CardHero />
    </section>
  );
};

export default ServicesHome;
