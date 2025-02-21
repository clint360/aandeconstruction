"use client"
// components/ProjectCard.js
import { useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ProjectCardTypes {
    title: string;
    location: string;
    images: string[]
}

const ProjectCard = ({ title, location, images }: ProjectCardTypes) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden h-96">
      <div
        className="w-full h-full bg-cover bg-center projectcard"
        style={{ backgroundImage: `linear-gradient(to bottom, transparent 0%,rgba(255, 153, 37, 0) 50%, #000000 100%), url(${images[currentImageIndex]})` }}
      >
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm italic">{location}</p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div
        className="absolute text-2xl top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 cursor-pointer rounded-full"
        onClick={handlePrev}
      >
        <FaChevronLeft />
      </div>
      <div
        className="absolute text-2xl top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 cursor-pointer rounded-full"
        onClick={handleNext}
      >
        <FaChevronRight />
      </div>
    </div>
  );
};

export default ProjectCard;