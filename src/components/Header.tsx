"use client";

import { useEffect, useState } from "react";

import React from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { Menu, X } from "lucide-react"; 

export default function Header () {

    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

     window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

return (
<header 
className={`fixed top-0 w-full transition-colors duration-300 z-[99] py-[15px] px-[30px] flex justify-between items-center
        ${scrolled
          ? "bg-[#050a13] shadow-[0_4px_8px_0_rgba(0,0,0,0.2)]"
          : "bg-transparent shadow-[0_4px_8px_0_rgba(0,0,0,0.2)]"
        }`}>
        <div className="w-[100px] h-[26px] overflow-hidden">
          <Image
            alt="Company Logo"
            src={logo}
            width={100}
            height={26}
            className="object-cover object-center w-full h-full"
          />
        </div>
        <nav className="hidden md:flex gap-[30px]">
          <a
            href="#home"
            className="text-white no-underline transition-colors duration-300 hover:text-[rgb(25,132,255)]"
          >
            Home
          </a>
          <a
            href="#web"
            className="text-white no-underline transition-colors duration-300 hover:text-[rgb(25,132,255)]"
          >
            Web
          </a>
          <a
            href="#mobile"
            className="text-white no-underline transition-colors duration-300 hover:text-[rgb(25,132,255)]"
          >
            Mobile
          </a>
          <a
            href="#aiandml"
            className="text-white no-underline transition-colors duration-300 hover:text-[rgb(25,132,255)]"
          >
            AI & ML
          </a>
          <a
            href="#cloud"
            className="text-white no-underline transition-colors duration-300 hover:text-[rgb(25,132,255)]"
          >
            Cloud
          </a>
          <a
            href="#branding"
            className="text-white no-underline transition-colors duration-300 hover:text-[rgb(25,132,255)]"
          >
            Branding
          </a>
          <a
            href="#testimonials"
            className="text-white no-underline transition-colors duration-300 hover:text-[rgb(25,132,255)]"
          >
            Customers
          </a>
          <a
            href="#blog"
            className="text-white no-underline transition-colors duration-300 hover:text-[rgb(25,132,255)]"
          >
            Blog
          </a>
          <a
            href="#about"
            className="text-white no-underline transition-colors duration-300 hover:text-[rgb(25,132,255)]"
          >
            About Us
          </a>
        </nav>

        {/* Mobile menu button */}
      <button
        className="block md:hidden text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile nav menu */}
      {isMobileMenuOpen && (
        <div className=" absolute top-full right-0 h-screen w-[50%] bg-[#050a13] p-5 flex flex-col items-start md:hidden z-[98]">
          <a
            href="#home"
            className="text-white py-2 w-full transition-colors duration-300 hover:text-[rgb(25,132,255)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#web"
            className="text-white py-2 w-full transition-colors duration-300 hover:text-[rgb(25,132,255)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Web
          </a>
          <a
            href="#mobile"
            className="text-white py-2 w-full transition-colors duration-300 hover:text-[rgb(25,132,255)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Mobile
          </a>
          <a
            href="#aiandml"
            className="text-white py-2 w-full transition-colors duration-300 hover:text-[rgb(25,132,255)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            AI & ML
          </a>
          <a
            href="#cloud"
            className="text-white py-2 w-full transition-colors duration-300 hover:text-[rgb(25,132,255)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Cloud
          </a>
          <a
            href="#branding"
            className="text-white py-2 w-full transition-colors duration-300 hover:text-[rgb(25,132,255)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Branding
          </a>
          <a
            href="#testimonials"
            className="text-white py-2 w-full transition-colors duration-300 hover:text-[rgb(25,132,255)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Customers
          </a>
          <a
            href="#blog"
            className="text-white py-2 w-full transition-colors duration-300 hover:text-[rgb(25,132,255)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </a>
          <a
            href="#about"
            className="text-white py-2 w-full transition-colors duration-300 hover:text-[rgb(25,132,255)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </a>
        </div>
      )}
      </header>
);
};