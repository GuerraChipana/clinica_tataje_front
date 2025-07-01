import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/HeroCarousel.css";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Mereció BIENESTAR",
      subtitle: "Contactanos",
      description: "Atención médica de calidad para ti y tu familia",
    },
    {
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Tecnología Avanzada",
      subtitle: "Innovación",
      description: "Equipos de última generación para tu diagnóstico",
    },
    {
      image: "https://i.pinimg.com/736x/5f/58/25/5f5825950e0c3e612cbb4889211da51c.jpg",
      title: "Especialistas Certificados",
      subtitle: "Profesionales",
      description: "El mejor equipo médico a tu servicio",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-carousel relative overflow-hidden">
      {/* Slides */}
      <div
        className="hero-carousel-slides flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="hero-carousel-slide w-full h-full flex-shrink-0">
            <div className="hero-carousel-overlay absolute inset-0 bg-gradient-to-r from-orange-500/80 to-orange-600/60 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="hero-carousel-image w-full h-full object-cover"
            />
            <div className="hero-carousel-content absolute inset-0 z-20 flex items-center justify-center text-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <div className="mb-4">
                    <span className="text-4xl md:text-6xl font-bold block">
                      Mereció
                    </span>
                    <span className="text-4xl md:text-6xl font-bold text-orange-300 block">
                      BIENESTAR
                    </span>
                  </div>
                  <p className="text-xl md:text-2xl mb-8 text-orange-100">
                    {slide.description}
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg">
                    Contáctanos
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hero-carousel-arrow left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="hero-carousel-arrow right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="hero-carousel-dots absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
