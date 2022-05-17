import React from "react";
import NavBar from "./common/NavBar";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";

function Hero() {
  return (
    <div
      className="h-[75vh] relative bg-cover"
      style={{
        backgroundImage: "url('bg_home.jfif')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="bg-gray-500 mix-blend-multiply z-0 h-[75vh] absolute w-full"></div>
      <div className="z-10 absolute md:top-[150px] top-[50px] left-[30px] md:left-[100px]">
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
