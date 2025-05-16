
'use client';

import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: 'Maddie Jones',
    text: '“Boost your product and service’s credibility by adding testimonials from your clients. People love recommendations so feedback from others who’ve tried it is invaluable.”',
  },
  {
    name: 'Trin Hien',
    text: '“Boost your product and service’s credibility by adding testimonials from your clients. People love recommendations so feedback from others who’ve tried it is invaluable.”',
  },
  {
    name: 'Imani Olowe',
    text: '“Boost your product and service’s credibility by adding testimonials from your clients. People love recommendations so feedback from others who’ve tried it is invaluable.”',
  },
  {
    name: 'Alex Smith',
    text: '“This service exceeded my expectations. Highly recommended!”',
  },
  {
    name: 'Jane Doe',
    text: '“A fantastic experience from start to finish.”',
  },
  {
    name: 'John Appleseed',
    text: '“Professional and efficient. Will use again.”',
  },
];

const TestimonialsCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 5000); 

    return () => clearInterval(interval);
  }, [scrollNext]);

  const { ref, inView } = useInView({
      threshold: 0.5, 
      triggerOnce: true, 
    });

  return (
    <div id="testimonials" className="bg-[#4f738f]  py-24 px-4 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <h2 ref={ref}
        style={{
              transition: "all 1.5s ease-in-out",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(100px)",
            }}
        className="text-2xl font-bold text-white mb-10 pl-5">
          CLIENT TESTIMONIALS
        </h2>
        <div 
        style={{
              transition: "all 1.5s ease-in-out",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(150px)",
            }}
        className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, index) => (
              <div
                className="flex-none w-full sm:w-1/2 lg:w-1/3 px-4"
                key={index}
              >
                <div className="border border-gray-300 shadow-sm p-6 text-center h-full">
                  <p className=" text-white mb-4">{t.text}</p>
                  <p className="font-semibold text-sm text-gray-800">- {t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;

