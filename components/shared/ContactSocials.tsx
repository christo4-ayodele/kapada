import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { ContactSocialIcons } from "@/constants";
import Image from "next/image";

const ContactSocials = () => {
  return (
    <section>
      <div className="mb-8 lg:mt-5">
        {ContactSocialIcons.map((item, index) => (
          <a
            href={item.url}
            target="_blank"
            key={index}
            className="mb-3 flex underline"
          >
            <item.icon className="text-xl" />{" "}
            <span className="ml-2 text-sm">{item.description}</span>
          </a>
        ))}
      </div>

      <div className="mb-10">
        <p className="mb-5 text-[1.2em] font-semibold">Call Us</p>
        <span className="mb-3 flex items-center gap-2 text-sm underline">
          <FiPhoneCall size={18} /> +234 8022231436
        </span>
        <span className="mb-3 flex items-center gap-2 text-sm underline">
          <FiPhoneCall size={18} /> +234 8055041818
        </span>
        <span className="flex items-center gap-2 text-sm underline">
          <FiPhoneCall size={18} /> +234 8033935559
        </span>
      </div>

      <div className="max-w-[400px] text-[20px]">
        <p className="mb-5 text-[1.2em] font-semibold">Visit Us</p>

        <div className="flex items-start">
          <Image
            src="/assets/svg/address-svgrepo.svg"
            width={24}
            height={24}
            alt="address"
          />
          <span className="mb-3 text-sm underline">
            Port Operations Office: Mini Flat 3, Nnewi Building, 1 Creek Rd
            Apapa Lagos State Nigeria.
          </span>
        </div>

        <div className="flex items-start">
          <Image
            src="/assets/svg/address-svgrepo.svg"
            width={24}
            height={24}
            alt="address"
          />
          <span className="mb-3 text-sm underline">
            Recycling Mill: 64 Abiodun Obayemi St, Ikola, Ipaja, Lagos State,
            Nigeria.
          </span>
        </div>

        {/* <span className="mb-3 flex underline">
          <GrLocation className="mr-2 text-3xl" />
          Monogramming Office: Shop 8, Green Plaza, Command Bus-Stop, Ipaja,
          Lagos State, Nigeria.
        </span> */}
      </div>
    </section>
  );
};

export default ContactSocials;
