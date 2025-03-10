"use client";

import { assets } from "@/public/assets";
import BernardLogo from "@/shared/components/Logo";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Navbar = ({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: any;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sideMenuRef = useRef<any>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden`}
      >
        <Link href={`/`}>
          <Image src={assets.header_bg_color} alt="" className="w-full" />
        </Link>
      </div>
      <nav
        className={`w-full fixed flex items-center justify-between px-5 lg:px-8 xl:px-[8%] py-4 z-50 font-ovo ${
          isScrolled
            ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <Link href={`/`}>
          <BernardLogo />
        </Link>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScrolled
              ? ""
              : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <Link href={`#top`} className="">
              Home
            </Link>
          </li>
          <li>
            <Link href={`#about`} className="">
              About
            </Link>
          </li>
          <li>
            <Link href={`#experience`} className="">
              Experience
            </Link>
          </li>
          <li>
            <Link href={`#work`} className="">
              Work
            </Link>
          </li>
          <li>
            <Link href={`#contact`} className="">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode((prev: boolean) => !prev)}
            className="cursor-pointer"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>
          <Link
            href={`#contact`}
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full dark:border-white/50"
          >
            Contact{" "}
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="w-3"
            />
          </Link>
          <button onClick={openMenu} className="block md:hidden cursor-pointer">
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>
        {/* ------------- mobile menu ------------------- */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-4 lg:gap-8 px-10 py-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white`}
        >
          <div onClick={closeMenu} className="absolute right-6 top-6">
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <Link href={`#top`} onClick={closeMenu} className="">
              Home
            </Link>
          </li>
          <li>
            <Link href={`#about`} onClick={closeMenu} className="">
              About me
            </Link>
          </li>
          <li>
            <Link href={`#services`} onClick={closeMenu} className="">
              Services
            </Link>
          </li>
          <li>
            <Link href={`#work`} onClick={closeMenu} className="">
              My work
            </Link>
          </li>
          <li>
            <Link href={`#contact`} onClick={closeMenu} className="">
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
