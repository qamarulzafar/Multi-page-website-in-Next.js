import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../Images/Logo/Logo.png";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const FooterTop: React.FC = () => {
  return (
    <div>
      <div className="logo flex justify-center mt-10 sm:mt-0 ">
        <Image src={logo} alt="Company_logo" width={150} height={100} />
      </div>

      <div className="footer flex flex-wrap w-full sm:flex-row font-sans justify-center text-center mt-10  gap-16">
        <div className="footer-section">
          <h3 className="text-2xl font-sans font-semibold my-5">Explore</h3>
          <ul className="text-lg text-gray-500 flex flex-col gap-3">
            <li className="hover:transform hover:-translate-y-1 hover:text-black transition-all duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:transform hover:-translate-y-1 hover:text-black transition-all duration-300">
              <Link href="/Speaker">Speakers</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="text-2xl font-sans font-semibold my-5">Support</h3>
          <ul className="text-lg text-gray-500 flex flex-col gap-3">
            <li className="hover:transform hover:-translate-y-1 hover:text-black transition-all duration-300">
              <Link href="/Contact">Contact</Link>
            </li>
            <li className="hover:transform hover:-translate-y-1 hover:text-black transition-all duration-300">
              <Link href="/News">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="text-2xl font-sans font-semibold my-5">Others</h3>
          <ul className="text-lg text-gray-500 flex flex-col gap-3">
            <li className="hover:transform hover:-translate-y-1 hover:text-black transition-all duration-300">
              <Link href="/">Style Guide</Link>
            </li>
            <li className="hover:transform hover:-translate-y-1 hover:text-black transition-all duration-300">
              <Link href="/">Changelog</Link>
            </li>
            <li className="hover:transform hover:-translate-y-1 hover:text-black transition-all duration-300">
              <Link href="/">Blog</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="text-2xl font-sans font-semibold my-5">Utility</h3>
          <ul className="text-lg text-gray-500 flex flex-col gap-3">
            <li className="hover:transform hover:-translate-y-1 hover:text-black transition-all duration-300">
              <Link href="/">Password</Link>
            </li>
            <li className="hover:transform hover:-translate-y-1 hover:text-black transition-all duration-300">
              <Link href="/">Instruction</Link>
            </li>
            <li className="hover:transform hover:-translate-y-1 hover:text-black transition-all duration-300">
              <Link href="/">License</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* social media link  */}

      <div className="link w-full justify-center flex gap-3 md:gap-8 mt-10  sm:mt-20 ">
        <div className="titter hover:transform hover:-translate-y-1 transition-all duration-300 w-10 h-10 hover:bg-fuchsia-400 hover:text-white text-2xl flex justify-center items-center rounded-full">
          <Link
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialTwitter />
          </Link>
        </div>
        <div className="facebook hover:transform hover:-translate-y-1 transition-all duration-300 w-10 h-10 hover:bg-fuchsia-400 hover:text-white text-2xl flex justify-center items-center rounded-full">
          <Link
            href="https://www.facebook.com/qamar.siddiqui.3154284"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </Link>
        </div>
        <div className="instagram hover:transform hover:-translate-y-1 transition-all duration-300 w-10 h-10 hover:bg-fuchsia-400 hover:text-white text-2xl flex justify-center items-center rounded-full">
          <Link
            href="https://www.instagram.com/qamarulzafar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram />
          </Link>
        </div>
        <div className="github hover:transform hover:-translate-y-1 transition-all duration-300 w-10 h-10 hover:bg-fuchsia-400 hover:text-white text-2xl flex justify-center items-center rounded-full">
          <Link
            href="https://github.com/qamarulzafar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
