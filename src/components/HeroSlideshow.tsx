import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-photographer.jpg";
import samplePortrait1 from "@/assets/sample-portrait-1.jpg";
import samplePortrait2 from "@/assets/sample-portrait-2.jpg";

const slides = [
  {
    image: heroImage,
    title: "Capturing Moments",
    subtitle: "That Tell Your Story"
  },
  {
    image: samplePortrait1,
    title: "Professional Portraits",
    subtitle: "With Artistic Vision"
  },
  {
    image: samplePortrait2,
    title: "Fine Art Photography",
    subtitle: "Timeless Elegance"
  }
];

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-overlay"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="max-w-4xl px-6 animate-fade-in">
                <h1 className=" text-5xl md:text-7xl font-bold text-text-elegant mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className=" text-xl md:text-2xl text-text-muted mb-8 tracking-wide">
                  {slide.subtitle}
                </p>
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 px-8 py-4 text-lg  uppercase tracking-widest"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-text-elegant hover:text-accent hover:bg-gallery-hover transition-all duration-300 w-12 h-12"
      >
        <ChevronLeft size={24} />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-text-elegant hover:text-accent hover:bg-gallery-hover transition-all duration-300 w-12 h-12"
      >
        <ChevronRight size={24} />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-accent shadow-glow"
                : "bg-text-muted hover:bg-text-elegant"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlideshow;
