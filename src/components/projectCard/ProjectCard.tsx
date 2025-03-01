import { useState, FC } from 'react';
import XMarkIcon from '@assets/icons/xmark-solid.svg';

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
        className="relative w-80 h-48 rounded-lg overflow-hidden cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-slate-900/70 transition-opacity">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white w-[90%] max-w-lg rounded-xl shadow-xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 btn btn-ghost btn-circle z-50 hover:bg-slate-800"
              onClick={() => setIsModalOpen(false)}
            >
              <img
                src={XMarkIcon}
                alt="Close"
                className="max-w-[16px] brightness-0 invert"
              />
            </button>

            {/* Image Carousel (Top) */}
            <div className="relative">
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none rounded-t-xl" />
              {/* Navigation Arrows */}
              <button
                className="absolute left-2 top-1/2 p-2 btn btn-circle btn-ghost hover:bg-slate-800"
                onClick={prevSlide}
              >
                ❮
              </button>
              <button
                className="absolute right-2 top-1/2 p-2  btn btn-circle btn-ghost hover:bg-slate-800"
                onClick={nextSlide}
              >
                ❯
              </button>

              {/* Dots Navigation */}
              <div className="absolute bottom-0 w-full p-2 flex justify-center mt-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 mx-1 rounded-full ${
                      currentIndex === index ? 'bg-white' : 'bg-white/70'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 flex flex-col justify-center items-center">
              <h3 className="card-title text-slate-900">{title}</h3>
              <h3 className="card-subtitle text-primary-purple">{subtitle}</h3>
              <p className="card-body text-slate-800">{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
