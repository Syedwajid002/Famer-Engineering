import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://media.istockphoto.com/id/1333158315/photo/civil-engineer-jobs-double-exposure-of-project-management-team-and-construction-site-with.jpg?s=612x612&w=0&k=20&c=1_3sEY8vgL_UFzNmlDUrdy1uYu8Xh9K-CoXqo4OgyIw=",
    title: "Engineering Strong Foundations",
    text: "Civil engineering excellence ensuring durability, safety, and trust in every project.",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/safety-helmet-architect-pland-wood-table-sunset-scen-file-scene-building-construction-33574911.jpg",
    title: "Shaping Modern Skylines",
    text: "Iconic towers and innovative architecture transforming cities across the Gulf.",
  },
  {
    image:
      "https://civilideas374921463.wordpress.com/wp-content/uploads/2021/09/3faf92b0ec8e7803f92e24068d04734e.jpg?w=1200",
    title: "Designing Tomorrow",
    text: "Blending creativity and technology to craft future-ready infrastructure solutions.",
  },
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slide */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
            }`}
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.6), rgba(30, 64, 175, 0.6)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Content */}
          <div className="flex flex-col items-center justify-center text-center h-full px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mb-8">
              {slide.text}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${index === current ? "bg-yellow-400" : "bg-white/50"
              }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
