import Image from 'next/image';
import React from 'react';

interface aboutUsAssociations {
  id: string;
  abbr: string;
  title: string;
  text: string;
  imgUrl: string;
}

interface Props {
  aboutUsAssociation: Array<aboutUsAssociations>;
}

const AboutUsAss: React.FC<Props> = ({ aboutUsAssociation }) => {
  return (
    <div className="flex max-sm:flex-col justify-between items-center text-center bg-white p-5 rounded-sm">
      {aboutUsAssociation.map((item, index) => (
        <div className="flex flex-col m-auto  items-center" key={item.id}>
          <Image src={item.imgUrl} height={200} width={200} alt="logo" />
          <p className="text-xl font-bold">{item.abbr}</p>
          <header className="font-bold">{item.title}</header>
          <p className="m-3 max-sm:pb-8">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutUsAss;
