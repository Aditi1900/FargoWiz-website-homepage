"use client"
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ChartSection from "@/components/ChartSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <Services />
      <About />
      <ChartSection />
      <Contact />
      <Testimonials />
      <Footer />
    </>
  );
}
