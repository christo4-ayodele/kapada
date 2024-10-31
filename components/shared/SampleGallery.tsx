import Image from 'next/image';
import React from 'react';

type sampleGalleryProps = {
  images: Array<string>;
};

const SampleGallery = ({ images }: sampleGalleryProps) => {
  return (
    <div className="flex flex-wrap w-full justify-center ">
      {images.map((item, index) => (
        <div
          key={index}
          className="m-5 border-2 border-lima-800  object-cover shadow-lima-900 shadow-lg "
        >
          <Image
            src={item}
            height={300}
            width={300}
            alt="sample of embroidery"
            className="object-cover h-[400px]"
          />
        </div>
      ))}
    </div>
  );
};

export default SampleGallery;
