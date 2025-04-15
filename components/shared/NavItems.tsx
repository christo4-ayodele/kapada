"use client";

import { ROUTES } from "@/constants/routes";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface NavItemsProps {
  isMobile?: boolean;
  closeNav?: () => void;
}
const NavItems = ({ isMobile, closeNav }: NavItemsProps) => {
  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);

  const timeoutRef = useRef<number | null>(null); //To track the timeout
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (service: string) => {
    setActiveService(service);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        pointerEvents: "auto",
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        scale: 0.95,
        y: -10,
        pointerEvents: "none",
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current); //Cancel any closing delay;
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 200);

    console.log(timeoutRef.current);
  };
  return (
    <nav className="relative">
      <ul
        className={`flex items-center gap-5 ${isMobile ? "flex-col items-start!" : "flex-row"}`}
      >
        <li>
          <Link href={ROUTES.HOME}>
            <button
              onClick={isMobile ? closeNav : undefined}
              className={`bg-fun-green-900 text-white-50 hover:bg-white-50 hover:text-fun-green-900 rounded-sm px-3 py-2 text-sm transition`}
            >
              Home
            </button>
          </Link>
        </li>
        <li
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => setIsOpen(!isOpen)}
        >
          <button>
            <p
              className={`bg-fun-green-900 text-white-50 hover:bg-white-50 hover:text-fun-green-900 rounded-sm px-3 py-2 text-sm transition ${isOpen ? "bg-white-50! text-fun-green-900!" : ""}`}
            >
              <span className="flex items-center">
                Services
                <ChevronDown
                  className={`ml-2 size-3 transition-transform duration-200 ${
                    isOpen ? "-rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </p>
          </button>

          <div
            ref={menuRef}
            className={`bg-white-100 pointer-events-none absolute left-0 z-50 mt-2 w-52 scale-95 rounded-lg p-5 opacity-0`}
          >
            <ul className="flex flex-col gap-3">
              <li>
                <Link href={ROUTES.SERVICES("freight-forwarding")}>
                  <button
                    onClick={() => {
                      if (isMobile && closeNav) closeNav(); //close the mobile view
                    }}
                    className={`hover:bg-fun-green-900 hover:text-white-50 rounded-lg p-2 transition ${pathName === ROUTES.SERVICES("freight-forwarding") ? "bg-fun-green-900 text-white-50" : ""} `}
                  >
                    Freight Forwarding
                  </button>
                </Link>
              </li>
              <li>
                <Link href={ROUTES.SERVICES("waste-management")}>
                  <button
                    onClick={() => {
                      handleClick("waste-management"); //local handleClick function
                      if (isMobile && closeNav) closeNav(); //close the mobile view
                    }}
                    className={`hover:bg-fun-green-900 hover:text-white-50 rounded-lg p-2 transition ${pathName === ROUTES.SERVICES("waste-management") ? "bg-fun-green-900 text-white-50" : ""} `}
                  >
                    Plastic Recycling
                  </button>
                </Link>
              </li>
              <li>
                <Link href={ROUTES.SERVICES("agricultural-services")}>
                  <button
                    onClick={() => {
                      handleClick("agricultural-services"); //local handleClick function
                      if (isMobile && closeNav) closeNav(); //close the mobile view
                    }}
                    className={`hover:bg-fun-green-900 hover:text-white-50 rounded-lg p-2 transition ${pathName === ROUTES.SERVICES("agricultural-services") ? "bg-fun-green-900 text-white-50" : ""} `}
                  >
                    Agriculture
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link href={ROUTES.ABOUT}>
            <button
              onClick={isMobile ? closeNav : undefined}
              className="bg-fun-green-900 text-white-50 hover:bg-white-50 hover:text-fun-green-900 rounded-sm px-3 py-2 text-sm transition"
            >
              About
            </button>
          </Link>
        </li>
        <li>
          <Link href={ROUTES.CONTACT}>
            <button
              onClick={isMobile ? closeNav : undefined}
              className="bg-fun-green-900 text-white-50 hover:bg-white-50 hover:text-fun-green-900 rounded-sm px-3 py-2 text-sm transition"
            >
              Contact
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;
