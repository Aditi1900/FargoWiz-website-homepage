"use client"
import React, { useState } from "react";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.5, 
    triggerOnce: true, 
  });

  const [features] = useState([
    {
      title: "Cloud & Platform",
      description:
        "Seamlessly integrate with your existing cloud infrastructure for maximum efficiency",
      image:
        "https://images.pexels.com/photos/9017719/pexels-photo-9017719.jpeg",
    },
    {
      title: "Application development",
      description:
        "Powerful analytics tools to track and optimize your business performance",
      image:
        "https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg",
    },
    {
      title: "Graphics Design",
      description:
        "Enterprise-grade security to protect your valuable business data",
      image:
        "https://images.pexels.com/photos/3224230/pexels-photo-3224230.jpeg",
    },
    {
      title: "Mobile App development",
      description:
        "Deliver seamless experiences across all devices with mobile-first designs",
      image:
        "https://images.pexels.com/photos/2265484/pexels-photo-2265484.jpeg",
    },
    {
      title: "Website Development",
      description:
        "24/7 support channels to ensure smooth operation and quick resolutions",
      image:
        "https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Use intelligent automation to boost productivity and reduce costs",
      image:
        "https://images.pexels.com/photos/8294558/pexels-photo-8294558.jpeg",
    },
  ]);

  return (
    <section
      id="features"
      className="py-20 bg-[#050a13] px-5 text-center border-b border-[rgba(255,255,255,0.1)] text-white"
      // style={{
      //   backgroundImage: `url("/assets/background2.jpg")`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <h1 ref={ref}
      style={{
              transition: "all 1.5s ease-in-out",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(100px)",
            }}
            className="text-white font-bold font-montserrat text-start pl-12 text-2xl mb-16">
        SERVICES WE PROVIDE
      </h1>

      <div
      style={{
              transition: "all 1.5s ease-in-out",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(100px)",
            }}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-transparent border border-white/20  p-6 text-left hover:shadow-lg hover:shadow-white/10 transition-transform duration-300 hover:scale-105"
          >
            <div className="w-full h-[180px] overflow-hidden mb-4 rounded-md">
              <Image
                src={feature.image}
                alt={feature.title}
                width={500}
                height={180}
                className="object-cover object-center w-full h-full "
              />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-white/80">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
