import { useState, useEffect } from "react";
import img1 from "../data/images/img1.jpg";
import img2 from "../data/images/img2.jpg";
import img3 from "../data/images/img3.jpg";
import img4 from "../data/images/img4.jpg";

export const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const carouselImages = [
    {
      url: img1,
      alt: "Customs Clearance",
      title: "Customs Clearance",
      subtitle: "Expert customs documentation and clearance services",
    },
    {
      url: img2,
      alt: "Customs Consultancy",
      title: "Customs Consultancy",
      subtitle: "Professional guidance for IEC and DGFT licenses",
    },
    {
      url: img3,
      alt: "Freight Forwarding",
      title: "Freight Forwarding",
      subtitle: "Seamless coordination for international shipments",
    },
    {
      url: img4,
      alt: "Surface Transportation",
      title: "Surface Transportation",
      subtitle: "365-day reliable transportation across India",
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, carouselImages.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl shadow-2xl">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="carousel-image"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => {
              setTimeout(() => setIsAutoPlay(true), 2000);
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-2 animate-fade-in">
              {image.title}
            </h2>
            <p
              className="text-lg md:text-xl text-gray-200 text-center animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {image.subtitle}
            </p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-accent"
                : "w-3 bg-white hover:bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
