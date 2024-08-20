import React from 'react';
import CardHero from './CardHero';

type Props = {};

const ServicesHome = (props: Props) => {
  return (
    <section className="mt-10">
      <p className="text-4xl text-lima-500 font-extrabold "> Services</p>{' '}
      <p className="font-bold text-2xl text-red-300 mt-2 mb-5 ">
        What we can do for you
      </p>
      <CardHero />
    </section>
  );
};

export default ServicesHome;
