import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "../lib/utils";
import bg1 from "../assets/bg2.png";
import bg2 from "../assets/bg3.png";
import bg3 from "../assets/bg1.png";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };
  const slides = [
    {
      id: 1,
      image: bg1,
    },
    {
      id: 2,
      image: bg2,
    },
    {
      id: 3,
      image: bg3,
    },
  ];
  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          {/* Image with overlay */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-2xl text-white space-y-6">
                <h1
                  className={cn(
                    "text-3xl sm:text-4xl md:text-5xl font-bold leading-tight transition-all duration-500",
                    index === current
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-10 opacity-0"
                  )}
                  style={{ transitionDelay: "200ms" }}
                >
                  {slide.title}
                </h1>
                <p
                  className={cn(
                    "text-lg md:text-xl text-gray-100 transition-all duration-500",
                    index === current
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-10 opacity-0"
                  )}
                  style={{ transitionDelay: "400ms" }}
                >
                  {slide.description}
                </p>
                <div
                  className={cn(
                    "transition-all duration-500",
                    index === current
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  )}
                  style={{ transitionDelay: "600ms" }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-school-primary hover:bg-school-primary/90 text-white font-medium"
                  >
                    <a href={slide.link}>{slide.cta}</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2  text-yellow-400 hover:text-yellow-600 transition-colors"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={60} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2  text-yellow-400 hover:text-yellow-600 transition-colors"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={60} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              i === current ? "bg-white w-6" : "bg-white/40"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
