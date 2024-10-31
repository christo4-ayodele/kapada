import React from 'react';
import { LuMailOpen } from 'react-icons/lu';
import { FiPhoneCall } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { ContactSocialIcons } from '@/constants';

const ContactSocials = () => {
  return (
    <section>
      <div className="mb-8">
        {ContactSocialIcons.map((item, index) => (
          <a
            href={item.url}
            target="_blank"
            key={index}
            className="flex underline mb-3"
          >
            <item.icon className="text-2xl" mr-5 />{' '}
            <span className="ml-2">{item.description}</span>
          </a>
        ))}
      </div>

      <div className="mb-10">
        <p className="text-[1.2em] font-semibold mb-5 ">Call Us</p>
        <span className="flex mb-3 underline">
          <FiPhoneCall className="text-2xl mr-2 " /> +234 8022231436
        </span>
        <span className="flex mb-3 underline">
          <FiPhoneCall className="text-2xl mr-2" /> +234 8055041818
        </span>
        <span className="flex underline">
          <FiPhoneCall className="text-2xl mr-2" /> +234 8033935559
        </span>
      </div>

      <div className="max-w-[400px] leading-7 text-[1.5em]">
        <p className="text-[1.2em] font-semibold mb-5">Visit Us</p>
        <span className="flex underline mb-3">
          <GrLocation className="text-2xl mr-2 " />
          Port Operations Office: Mini Flat 3, Nnewi Building, 1 Creek Rd Apapa
          Lagos State Nigeria.
        </span>

        <span className="flex underline mb-3">
          <GrLocation className="text-2xl mr-2 " />
          Recycling Mill: 64 Abiodun Obayemi St, Ikola, Ipaja, Lagos State,
          Nigeria.
        </span>

        <span className="flex underline mb-3">
          <GrLocation className="text-2xl mr-2 " />
          Monogramming Office: Shop 8, Green Plaza, Command Bus-Stop, Ipaja,
          Lagos State, Nigeria.
        </span>
      </div>
    </section>
  );
};

export default ContactSocials;
