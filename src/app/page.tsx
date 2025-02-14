import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/core/components/organisms/Navbar";
import Hero from "@/core/components/organisms/Hero";
import VisionMissionSection from "@/core/components/organisms/VisionMissionSection";
import ServicesSection  from "@/core/components/organisms/ServicesSection";
import TestimonialsCarousel from "@/core/components/organisms/TestimonialCarousel";
import Contact from "@/core/components/organisms/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <VisionMissionSection />
      <ServicesSection />
      <TestimonialsCarousel />
      <Contact />
    </div>
  );
}
