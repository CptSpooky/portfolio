/**
 * @name ProjectCard
 * @description Component for each project card, displays a card modal with project information and images
 */
import { useState, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCardTypes } from '@models/ProjectCard.types.ts';
import XMarkIcon from '@assets/icons/xmark-solid.svg';

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
      {/* Project Thumbnail Card */}
      <div
        className="__project-thumbnail-card"
        onClick={() => setIsModalOpen(true)}
      >
        <img src={thumbnail} alt={title} className="__project-thumbnail" />
        <div className="__project-thumbnail-card-overlay">
          <h3 className="__project-thumbnail-title">{title}</h3>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="__modal-overlay" onClick={() => setIsModalOpen(false)}>
          {/* Project Card */}
          <AnimatePresence>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="__project-card"
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
            >
              {/* Close Button */}
              <button
                className="__close-btn"
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
                    className="__project-img"
                  />
                </div>
                <div className="__project_img_overlay" />

                {images.length > 1 && (
                  <>
                    {/* Navigation Arrows */}
                    <button
                      className="__project-img-carousel-arrow-left"
                      onClick={prevSlide}
                    >
                      ❮
                    </button>
                    <button
                      className="__project-img-carousel-arrow-right"
                      onClick={nextSlide}
                    >
                      ❯
                    </button>

                    {/* Dots Navigation */}
                    <div className="__project-img-carousel-dots">
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
              <div className="__card-body">
                <h3 className="__card-title">{title}</h3>
                <h3 className="__card-subtitle">{subtitle}</h3>
                <p className="__card-text">{description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
