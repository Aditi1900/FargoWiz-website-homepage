
"use client";
import React from "react";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.5, 
    triggerOnce: true, 
  });

  function handleLearnMore() {
    
    console.log("Learn More clicked");
  }

  return (
    <section className="bg-[#4f738f] min-h-screen flex items-center">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto">
        <div className="md:w-1/2 flex justify-start">
          <div className="w-[650px] h-screen relative">
            <Image
              src="/assets/aboutimg.jpg"
              alt="Portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:w-1/2 text-white space-y-6 pl-10 pr-24">
          <h1
            style={{
              transition: "all 1.5s ease-in-out",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(90px)",
            }}
            className="font-bold [text-shadow:0_1px_2px_rgba(0,0,0,0.1)] text-2xl pt-5 pb-5"
          >
            ABOUT US
          </h1>
          <p ref={ref}
          style={{
              transition: "all 1.5s ease-in-out",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(110px)",
            }}
             className="leading-relaxed">
            FargoWiz Ltd is a PA, US-based software development and consulting
            company. We specialize in custom software development with cutting-edge
            technology and development platforms. Our resources are skilled in
            modern technology stacks and platforms.
          </p>
          <p
          style={{
              transition: "all 1.5s ease-in-out",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(130px)",
            }}
             className="leading-relaxed">
            Our mission is to act as a technical enabler and software development
            partner for companies looking to build state-of-the-art solutions in
            the market.
          </p>
          <div className="pb-5"
          style={{
              transition: "all 1.5s ease-in-out",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(150px)",
            }}
            >
          <button
            onClick={handleLearnMore}
            className="bg-transparent text-white py-[15px] px-[30px] rounded-[25px] border-2 border-white text-lg cursor-pointer transition-all duration-300 hover:bg-white hover:text-[rgb(18,18,51)]"
          >
            View More
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}

