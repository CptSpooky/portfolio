import { useState, FC } from 'react';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  thumbnail: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  images,
  thumbnail,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  

  return (
    <>
     {/* Project Card */}
     <div
        className="relative w-80 h-56 rounded-xl shadow-md overflow-hidden cursor-pointer transition-all hover:shadow-lg bg-white"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Thumbnail */}
        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white w-[90%] max-w-lg rounded-xl shadow-xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>

            {/* Image Carousel (Top) */}
            <div className="relative">
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              {/* Navigation Arrows */}
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                onClick={prevSlide}
              >
                ❮
              </button>
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                onClick={nextSlide}
              >
                ❯
              </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 mx-1 rounded-full ${
                    currentIndex === index ? "bg-gray-900" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            {/* Card Body */}
            <div className="p-5">
              <h2 className="text-2xl font-bold">{title}</h2>
              <h3 className="text-gray-600">{subtitle}</h3>
              <p className="mt-2 text-gray-700">{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
