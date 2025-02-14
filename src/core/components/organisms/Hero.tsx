"use client"
import { useState, useEffect } from 'react';

const Hero = () => {
  // Array of background images
  const backgroundImages = [
    'url("/images/bg1.jpg")',
    'url("/images/bg2.jpg")',
    'url("/images/bg3.jpg")',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
  className="relative  h-screen bg-cover bg-center font-montserrat"
  style={{ backgroundImage: backgroundImages[currentImage] }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>

  {/* Content */}
  <div className=" max-w-[1240px] m-auto absolute inset-0 flex justify-center items-center text-center px-4">
    <div className="text-white">
      {/* Title with fade-in animation */}
      <h1 className="smallheadtag font-bold text-[#FF9A25] mb-4 fade-in fade-in-delay-1">
        Welcome to A and E Construction Company
      </h1>
      {/* Sub-Title with fade-in animation */}
      <h2 className="biggerheadtag font-extrabold text-white mb-6 fade-in fade-in-delay-2">
        Building Excellence, Delivering Results
      </h2>
      {/* Description with fade-in animation */}
      <p className="descriptionfontsize max-w-4xl mx-auto text-white fade-in fade-in-delay-3">
        At A & E Construction, we are a leading construction company based in Cameroon,
        dedicated to providing top-notch construction services and associated solutions. With
        years of industry experience, a team of skilled professionals, and a commitment to quality,
        we aim to deliver exceptional results that not only meet but exceed our clients’ expectations.
      </p>
    </div>
  </div>
</section>

  );
};

export default Hero;
