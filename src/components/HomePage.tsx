"use client";

import React from "react";
import { useInView } from 'react-intersection-observer';

function handleGetStarted() {

    console.log("Get Started clicked");
  }

  function handleLearnMore() {
    
    console.log("Learn More clicked");
  }

const HomePage: React.FC = () => {

  const { ref, inView } = useInView({
    threshold: 0.5, 
    triggerOnce: true, 
  });
  return (
    <div className="bg-white">
      <section id="home"
        className="bg-cover bg-center h-[800px] flex items-center justify-center text-center text-white pt-[10px]"
        style={{
          backgroundImage: `url("/assets/background1.jpg")`
        }}
      >
        <div className="max-w-[800px] px-5">
          <h1 ref={ref}
          style={{
              transition: "all 1s ease-in-out",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(100px)",
            }}
          className="text-7xl mb-5">
           Fargo<span className="text-[#1984ff]">Wiz</span>
          </h1>
          <p 
          style={{
              transition: "all 1s ease-in-out",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(125px)",
            }}
          className="text-xl mb-10">
            Transform your ideas into reality
          </p>
          <div className="flex gap-5 justify-center flex-wrap">
            <button
              onClick={handleGetStarted}
              className="bg-[rgb(47,84,235)] text-white text-lg py-[10px] px-[20px] rounded-[25px] border-none cursor-pointer transition-all duration-300 hover:bg-[rgb(37,67,188)]"
            style={{
              transition: "all 1s ease-in-out",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(150px)",
            }}
            >
              Request Quote
            </button>
            <button
              onClick={handleLearnMore}
              className="bg-transparent text-white py-[15px] px-[30px] rounded-[25px] border-2 border-white text-lg cursor-pointer transition-all duration-300 hover:bg-white hover:text-[rgb(18,18,51)]"
            style={{
              transition: "all 1s ease-in-out",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(150px)",
            }}
            >
              Watch Video
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
