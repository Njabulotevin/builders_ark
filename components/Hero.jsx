import React from "react";
import NavBar from "./common/NavBar";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";

function Hero() {
  return (
    <div className="h-[75vh] relative">
      <img src="bg_home.jfif" className="object-cover absolute w-full h-full" />
      <div className="bg-gray-500 z-0  mix-blend-multiply w-full h-full absolute"></div>
      <div className="z-10 p-20 md:p-36 absolute w-full h-full">
        <h1 className="md:text-5xl text-3xl text-white mb-6 animate__animated animate__backInDown">
          Best at Commercial <br /> & Residential Construction
        </h1>
        <p className="text-white ">EACH PROJECT DONE RIGHT THE FIRST TIME</p>
        <div className=" mt-12 flex flex-col gap-6 md:flex-row">
          <Link href="/services">
            <a className="px-8 py-4 bg-primary rounded text-white flex items-center gap-2 ">
              Our Services
              <span>
                <BsArrowRightShort />
              </span>
            </a>
          </Link>
          <Link href="/about">
            <a className="px-8 py-4 bg-white rounded text-darkGray">
              More About Us
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
