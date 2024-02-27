"use client";

import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9edade] via-[#4addf1] to-[#1082b1]">
              I'm Chris Davis
              <br />
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Full Stack Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Flutter Developer",
                1000,
                "System Integrator",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus eum optio ipsam itaque blanditiis, porro nostrum
            quibusdam in corrupti doloribus cupiditate laudantium sequi libero
            maxime ipsum at aut fugit minus.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#1082b1] via-[#4addf1] to-[#9edade] bg-white hover:bg-slate-200 text-black">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#1082b1] via-[#4addf1] to-[#9edade] hover:bg-slate-800 text-white  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/AIAvatar02.png"
              alt="Image of Christopher Davis"
              className="rounded-3xl absolute tranform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
// #3addfc
// #075d90
// #d79646
