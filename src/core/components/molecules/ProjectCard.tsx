// components/ProjectCard.js
import { useState } from 'react';

const ProjectCard = ({ title, location, images }: any) => {
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
    <div className="relative max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <div className="flex overflow-hidden">
          <img 
            src={images[currentImageIndex]} 
            alt={`Project Image ${currentImageIndex}`} 
            className="w-full h-auto transition-transform duration-500 ease-in-out transform" 
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center">
          <h3 className="text-white text-xl font-bold">{title}</h3>
          <p className="text-white text-sm italic">{location}</p>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 cursor-pointer" onClick={handlePrev}>
        &lt;
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 cursor-pointer" onClick={handleNext}>
        &gt;
      </div>
    </div>
  );
};

export default ProjectCard;
