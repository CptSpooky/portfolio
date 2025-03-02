/**
 * @name ProjectCard
 * @description Component for each individual project card
 */
import { useState, FC } from 'react';
import XMarkIcon from '@assets/icons/xmark-solid.svg';
import { ProjectCardTypes } from '@models/ProjectCard.types.ts';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard: FC<ProjectCardTypes> = ({
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
        className="relative max-w-[300px] max-h-[190px] rounded-lg overflow-hidden cursor-pointer group shadow-xl sm:min-w-[300px] md:min-h-[190px]"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-slate-900/70 transition-opacity">
          <h3 className="text-white text-lg font-semibold text-center max-w-[250px]">
            {title}
          </h3>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <AnimatePresence>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="w-full h-full overflow-auto bg-white rounded-xl shadow-xl relative flex flex-col sm:w-[90%] sm:!h-fit max-w-lg"
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
                <div className="__project-img-carousel">
                  <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full min-h-64 object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30  bg-gradient-to-t from black/30 via transparent to-black/0 pointer-events-none rounded-t-xl" />

                { images.length > 1 && (
                  <>
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
                  </>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-center items-center">
                <h3 className="card-title text-slate-900 text-center">
                  {title}
                </h3>
                <h3 className="card-subtitle text-primary-purple text-center">
                  {subtitle}
                </h3>
                <p className="card-body text-slate-800 text-center">
                  {description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
