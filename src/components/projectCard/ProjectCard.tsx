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
        <div className="absolute inset-0 bg-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-slate-900 bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white w-96 rounded-lg p-5 shadow-lg relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>

            {/* Modal Content */}
            <h2 className="text-xl font-bold">{title}</h2>
            <h3 className="text-gray-600">{subtitle}</h3>
            <p className="mt-2 text-gray-700">{description}</p>

            {/* Image Carousel */}
            <div className="mt-4">
              <div className="carousel w-full">
                {images.map((img, index) => (
                  <div
                    id={`slide${index}`}
                    key={index}
                    className="carousel-item relative w-full"
                  >
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-full rounded-lg"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a
                        href={`#slide${index === 0 ? images.length - 1 : index - 1}`}
                        className="btn btn-circle"
                      >
                        ❮
                      </a>
                      <a
                        href={`#slide${(index + 1) % images.length}`}
                        className="btn btn-circle"
                      >
                        ❯
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
