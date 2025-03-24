"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import NavItems from "./NavItems";
import gsap from "gsap";
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  // Cleanup effect to remove overflow-hidden when component unmounts
  useEffect(() => {
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  useEffect(() => {
    if (!mobileNavRef.current || !overlayRef.current) return;

    if (isOpen) {
      gsap.to(mobileNavRef.current, {
        x: "0%", //another name for translateX(), no position change but when our ease in works it moves to this position
        duration: 0.4, //how long our animation would run
        ease: "power2.out", // the ease in lets it slide in from the right
      });
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(mobileNavRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        pointerEvents: "none",
      });
    }
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen((prev) => {
      if (!prev) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
      console.log(!prev);
      return !prev;
    });
  };

  return (
    <section>
      <button onClick={handleClick}>
        <Image
          src={"/assets/icons/menu.svg"}
          width={25}
          height={25}
          alt="menu"
        />
      </button>

      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 z-149 bg-black/50 opacity-0 transition-opacity"
        onClick={handleClick}
      >
        <div
          ref={mobileNavRef}
          className="bg-fun-green-900 absolute top-0 right-0 z-150 flex h-full w-3xs translate-x-full transform flex-col shadow-lg"
          onClick={(e) => e.stopPropagation()} // Stops parent handleclick from closing menu when on this element and limits it to the part of the nav with dark opacity visible
        >
          {/* Header */}
          <div className="bg-white-50 flex h-12 w-full items-center justify-between px-4">
            <Image
              src={"/assets/svg/kapada-logo-reup.svg"}
              width={150}
              height={50}
              alt="kapada-logo"
            />

            <button onClick={handleClick} className="h-[40px] w-[40px]">
              <Image
                src={"/assets/icons/cancel.svg"}
                width={25}
                height={25}
                alt="cancel"
                className="m-auto"
              />
            </button>
          </div>

          {/* Content + Footer Wrapper */}
          <div className="flex flex-1 flex-col justify-between px-5">
            {/* Nav Items */}
            <div className="mt-5">
              <NavItems isMobile closeNav={handleClick} />
            </div>

            {/* Copyright */}
            <p className="text-white-50 pb-5 text-[10px] sm:text-xl">
              © 2024 Kapada Integrated Services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileNav;
