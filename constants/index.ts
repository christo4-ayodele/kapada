import { BsQuestionCircle } from 'react-icons/bs';
import { RiShip2Line } from 'react-icons/ri';
import { RiShirtLine } from 'react-icons/ri';
import { FaTractor } from 'react-icons/fa6';

export const navigation = [
  {
    id: '0',
    label: 'Home',
    url: '/',
  },
  {
    id: '1',
    label: 'Services',
    dropdown: [
      {
        id: '0',
        label: 'Freight Forwarding',
        url: '/freight-forwarding',
      },
      {
        id: '1',
        label: 'Logisitics & Supplies',
        url: '/logistics-supplies',
      },
      {
        id: '2',
        label: 'Monogramming/Garment Manufacturing',
        url: '/logistics-supplies',
      },
      {
        id: '3',
        label: 'Monogramming/Garment Manufacturing',
        url: '/monogramming-garment',
      },
      {
        id: '4',
        label: 'Agricultural Services - Tractor Hiring',
        url: '/agric-tractor',
      },
    ],
  },
  {
    id: '2',
    label: 'About',
    url: '/about',
  },
  {
    id: '3',
    label: 'Contact',
    url: '/',
  },
];

export const services: { title: string; href: string; description: string }[] =
  [
    {
      title: 'Freight Forwarding',
      href: '/services/freight-forwarding',
      description:
        'A modal dialog that interrupts the user with important content and expects a response.',
    },
    // {
    //   title: 'Logisitics & Supplies',
    //   href: '/logisitcs-supplies',
    //   description:
    //     'For sighted users to preview content available behind a link.',
    // },
    {
      title: 'Monogramming/Garment Manufacturing',
      href: '/services/monogramming',
      description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
    {
      title: 'Agricultural Services - Tractor Hiring',
      href: '/services/agricultural-services',
      description: 'Visually or semantically separates content.',
    },
  ];

export const servicesCard = [
  {
    icon: BsQuestionCircle,
    title: 'About our Company',
    href: '/about',
    text: 'Kapada Integrated Services was established in 1987, as a company we provide a diverse range of professional solutions such as freight forwarding, monogramming/garment making, agricultural services and we are registered under the law of the Federal Republic of Nigeria by Corporate Affairs Commission (CAC)',
  },
  {
    icon: RiShip2Line,
    title: 'Freight Forwarding',
    href: '/freight-forwarding',
    text: 'We provide reliable and efficient freight forwarding services, ensuring your cargo moves seamlessly across borders. Our comprehensive logistics solutions handle everything from storage to transportation, guaranteeing timely delivery and peace of mind.',
  },
  {
    icon: RiShirtLine,
    title: 'Monogramming',
    href: '/monogram-garment',
    text: 'Our garment manufacturing services offer exceptional quality and precision. From design to final product, we specialize in creating beautifully crafted garments tailored to meet your specifications. Trust us for innovative solutions in the fashion and apparel industry.',
  },
  {
    icon: FaTractor,
    title: 'Agricultural Services',
    href: '/agric-tractor',
    text: 'Enhance your farming operations with our robust agricultural services. We offer reliable tractor hiring, allowing you to access modern equipment and boost productivity. Whether for plowing, planting, or harvesting, we have the machinery to support your needs.',
  },
];

export const socials = [
  {
    id: '0',
    title: 'Discord',
    iconUrl: '/assets/svg/socials/discord.svg',
    url: '#',
  },
  {
    id: '1',
    title: 'Twitter',
    iconUrl: '/assets/svg/socials/twitter.svg',
    url: '#',
  },
  {
    id: '2',
    title: 'Instagram',
    iconUrl: '/assets/svg/socials/instagram.svg',
    url: '#',
  },
  {
    id: '3',
    title: 'Telegram',
    iconUrl: '/assets/svg/socials/telegram.svg',
    url: '#',
  },
  {
    id: '4',
    title: 'Facebook',
    iconUrl: '/assets/svg/socials/facebook.svg',
    url: '#',
  },
];

export const freightServices = [
  {
    id: '0',
    title: 'Efficient Customs Clearance',
    text: 'We handle all aspects of customs clearance, ensuring your consignments meet all regulatory requirements and are processed without delay.',
    imgUrl: '/assets/img/freight-services1.jpg',
  },
  {
    id: '1',
    title: 'Comprehensive Documentation',
    text: 'Our services include meticulous preparation of all necessary documentation, minimizing the risk of errors and ensuring compliance with local laws.',
    imgUrl: '/assets/img/freight-services2.jpg',
  },
  {
    id: '2',
    title: 'Seamless Cargo Tracking',
    text: 'Stay informed with our robust cargo tracking system, offering real-time updates and peace of mind as your goods move through the supply chain.',
    imgUrl: '/assets/img/freight-services3.jpg',
  },
  {
    id: '3',
    title: 'Personalized Consultation',
    text: 'We provide tailored advice and strategies to optimize your import operations, addressing your unique needs and challenges.',
    imgUrl: '/assets/img/freight-services4.jpg',
  },
];

export const freightServiceHero = {
  heroTitle: 'Freight Forwarding & Customs Clearance',
  imgUrl: '/assets/img/freight-forwarding2.jpg',
  heroText: `Welcome to Kapada Integrated Services Limited, your trusted partner in
          freight forwarding and customs clearance at Nigerian ports. We
          specialize in the smooth and efficient handling of imported goods,
          ensuring they navigate through all regulatory hurdles with ease.`,
};

export const freightTxtImgfiffif = {
  text: `With a solid track record of reliability and professionalism, Kapada
            Integrated Services is committed to delivering excellence in every
            shipment we manage. We understand that the importation process can
            be complex and time-consuming, especially with the stringent
            regulations at Nigerian ports. That's why our team of seasoned
            experts is here to simplify these processes for you, providing
            comprehensive, end-to-end solutions.`,
  imgUrl: '/assets/img/freight-forwarding3.jpg',
};

export const freightImgTxtfifsm = {
  imgUrl: '/assets/img/freight-expertise.jpg',
  text: `At Kapada Integrated Services, we pride ourselves on our deep
            knowledge of the Nigerian import landscape. Our team's expertise in
            navigating customs procedures means you can focus on your core
            business while we take care of the complexities. Whether you are a
            business aiming to streamline your supply chain or an individual
            importer seeking hassle-free customs clearance, we are dedicated to
            supporting you at every stage. Our goal is to ensure that your goods
            are delivered on time and in perfect condition, every time.`,
};

export const monogramServiceHero = {
  heroTitle: 'Monogramming and Embroidery making',
  imgUrl: '/assets/img/monogram2.jpg',
  heroText: `Welcome to Kapada Integrated Services, your trusted partner in high-quality
            monogramming and embroidery. We specialize in creating custom designs that add a personal touch to 
            garments and textiles, ensuring precision and craftsmanship in every stitch.`,
};

export const monogramTxtImgfiffif = {
  text: `At Kapada Integrated Services, we understand the importance of detailed and beautiful embroidery. 
    Whether it's for uniforms, promotional products, or personalized gifts, our expert team is dedicated to delivering designs that stand out. We use state-of-the-art equipment and premium materials
    to ensure your monograms and embroidery are vibrant, durable, and perfectly tailored to your needs.`,
  imgUrl: '/assets/img/monogram5.jpeg',
};

export const monogramServices = [
  {
    id: '0',
    title: 'Custom Designing',
    text: 'Add a unique and personal touch to your garments with our custom monogramming services. We work closely with you to create initials, logos, or designs that reflect your style and identity.',
    imgUrl: '/assets/img/monogram3.png',
  },
  {
    id: '1',
    title: 'Detailed Embroidery',
    text: 'Our embroidery services cover a wide range of applications, from corporate apparel to special event decorations. Each piece is crafted with attention to detail, ensuring high-quality and lasting impressions.',
    imgUrl: '/assets/img/monogram-service2.jpeg',
  },
  {
    id: '2',
    title: 'Design Consultation',
    text: 'Need help bringing your vision to life? Our team provides expert design consultation, helping you choose the right colors, threads, and patterns to make your ideas shine.',
    imgUrl: '/assets/img/monogram-service3.jpg',
  },
  {
    id: '3',
    title: 'Fast Turnaround',
    text: 'We understand that timing is crucial. Our efficient processes ensure that your monogramming and embroidery projects are completed on schedule without compromising on quality.',
    imgUrl: '/assets/img/monogram-service4.jpeg',
  },
];

export const monogramImgTxtfifsm = {
  imgUrl: '/assets/img/monogram-expertise.jpeg',
  text: `With Kapada Integrated Services, you’re partnering with professionals who are passionate about embroidery. Our commitment to quality and customer satisfaction means you receive products that not only meet but exceed your expectations. Whether for personal or business use, our monogramming and embroidery services add elegance and uniqueness to any item.`,
};

export const agriculturalServiceHero = {
  heroTitle: 'Agricultural Services - Crop Farming, Tractor Hiring',
  imgUrl: '/assets/img/agriculture1.jpg',
  heroText: `Welcome to Kapada Integrated Services, your trusted partner in agricultural solutions. We specialize in comprehensive crop farming, reliable tractor hiring, and fish drying services, ensuring the highest standards of quality and productivity in every aspect of agriculture.`,
};

export const agricultureTxtImgfiffif = {
  text: `At Kapada Integrated Services, we understand the critical role that agriculture plays in sustaining communities and businesses. Our team is dedicated to 
        supporting your farming operations with top-tier equipment, expert knowledge, and innovative techniques. Whether you’re cultivating crops, needing modern machinery,
        or drying fish for market, we provide tailored solutions that meet your specific agricultural needs.`,
  imgUrl: '/assets/img/agriculture8.jpeg',
};

export const agricultureServices = [
  {
    id: '0',
    title: 'Crop Farming',
    text: 'rom soil preparation to harvesting, we offer complete crop farming services. Our team employs advanced agricultural practices to maximize yield and ensure the health and quality of your crops.',
    imgUrl: '/assets/img/agriculture10.jpg',
  },
  {
    id: '1',
    title: 'Reliable Tractor Hiring',
    text: 'Access our efficient tractors and equipment to boost your farming efficiency. We provide flexible hiring options, allowing you to choose the right machinery for your seasonal or ongoing needs.',
    imgUrl: '/assets/img/agriculture6.jpeg',
  },
  {
    id: '2',
    title: 'Efficient Fish Drying',
    text: 'Enhance your fish production with our specialized drying services. We use proven methods to preserve fish, maintaining their nutritional value and extending shelf life, making them ready for market or personal use.',
    imgUrl: '/assets/img/agriculture3.webp',
  },
  {
    id: '3',
    title: 'Sustainable Snail Farming',
    text: 'Expand your agricultural ventures with our snail farming services. We provide expert guidance on breeding, feeding, and maintaining optimal environments for snail growth, ensuring high yield and quality.',
    imgUrl: '/assets/img/agriculture9.webp',
  },
];

export const agricultureImgTxtfifsm = {
  imgUrl: '/assets/img/agriculture-expertise.jpg',
  text: `With Kapada Integrated Services, you gain the benefit of extensive experience and a commitment to excellence in agriculture. We are dedicated to enhancing your productivity and quality at every stage of your agricultural operations. By staying abreast of the latest industry advancements, we provide you with the best solutions for your farming and production needs.`,
};
