// components/ProjectCard.js
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

interface ProjectCardTypes {
  title: string;
  location: string;
  images: string[];
}

const ProjectCard = ({ title, location, images }: ProjectCardTypes) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOverlayClick = (e: React.MouseEvent) => {

    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div>
      {/* Project Card */}
      <div
        className="relative max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden h-96 cursor-pointer"
        onClick={openModal}
      >
        <div
          className="w-full h-full bg-cover bg-center projectcard"
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent 0%, rgba(255, 153, 37, 0) 50%, #000000 100%), url(${images[currentImageIndex]})`,
          }}
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

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black flex justify-center items-center z-50"
          onClick={handleOverlayClick} 
        >
          <div className="relative w-full h-full">
            {/* Close Button */}
            <div
              className="absolute top-4 right-4 text-white text-3xl cursor-pointer z-50 rounded-full bg-black p-4 bg-opacity-90"
              onClick={closeModal}
            >
              <FaTimes />
            </div>

            {/* Image Viewer */}
            <div className="relative w-full h-full">
              <img
                src={images[currentImageIndex]}
                alt="Project"
                className="w-full h-full object-contain"
              />

              {/* Image Navigation Arrows */}
              <div
                className="absolute text-4xl top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 cursor-pointer rounded-full"
                onClick={handlePrev}
              >
                <FaChevronLeft />
              </div>
              <div
                className="absolute text-4xl top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 cursor-pointer rounded-full"
                onClick={handleNext}
              >
                <FaChevronRight />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
