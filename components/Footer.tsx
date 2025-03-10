import { links } from "@/database";
import { assets } from "@/public/assets";
import BernardLogo from "@/shared/components/Logo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <footer className="mt-20">
      <div className="text-center">
        {/* <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        /> */}
        <Link href={`/`}>
          <BernardLogo />
        </Link>
        <div className="w-max flex items-center gap-2 mx-auto mt-4">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          <Link href={`mailto:bernardamankwah@hotmail.com`}>
            bernardamankwah@hotmail.com
          </Link>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p> &copy; 2025 Bernard Amankwah. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          {links.map((link, index) => (
            <li key={index} className="capitalize">
              <Link href={link.url} target="_blank">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
