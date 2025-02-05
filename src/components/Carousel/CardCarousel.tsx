"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import CustomButton from "../Buttons/CustomButton";
import { FaBasketShopping } from "react-icons/fa6";

interface CardData {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
  backImageUrl: string;
  externalLink?: string;
}

export default function CardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const cards: CardData[] = [
    {
      id: 1,
      title: 'Tarjeta 1',
      description: 'Descripción de la primera tarjeta',
      imageUrl: '/images/product-1a.jpeg',
      backImageUrl: '/images/product-1b.jpeg',
      externalLink: 'https://conscientemente2.mitiendanube.com/productos/un-ano-contigo-diario-de-introspeccion/'
    },
    {
      id: 2,
      title: 'Tarjeta 2', 
      description: 'Descripción de la segunda tarjeta',
      imageUrl: '/images/product-2a.jpeg',
      backImageUrl: '/images/product-2b.jpeg',
      externalLink: 'https://conscientemente2.mitiendanube.com/productos/habit-tracker/'
    },
    {
      id: 3,
      title: 'Tarjeta 3',
      description: 'Descripción de la tercera tarjeta',
      imageUrl: '/images/product-3a.jpeg',
      backImageUrl: '/images/product-3b.jpeg',
      externalLink: 'https://conscientemente2.mitiendanube.com/productos/planner-anual-2025-estelar/'
    },
    {
      id: 4,
      title: 'Tarjeta 4',
      description: 'Descripción de la cuarta tarjeta',
      imageUrl: '/images/product-4a.jpeg',
      backImageUrl: '/images/product-4b.jpeg',
      externalLink: 'https://conscientemente2.mitiendanube.com/productos/planner-anual-2025-alquimia/'
    }
  ];

  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? cards.length - 1 : current - 1));
    setIsFlipped(false);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === cards.length - 1 ? 0 : current + 1));
    setIsFlipped(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 2500);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getCardStyle = (index: number) => {
    let position = index - activeIndex;
    
    // Adjust position for wrap-around
    if (position < -Math.floor(cards.length / 2)) {
      position += cards.length;
    }
    if (position > Math.floor(cards.length / 2)) {
      position -= cards.length;
    }

    const isVisible = Math.abs(position) <= 2;
    if (!isVisible) return {display: "none"};

    let transform = "";
    let zIndex = 0;
    let opacity = 1;

    if (position === 0) {
      transform = "scale(1) translateX(0)";
      zIndex = 30;
      opacity = 1;
    } else if (position === 1) {
      transform = "scale(0.85) translateX(60%)";
      zIndex = 20;
      opacity = 0.8;
    } else if (position === -1) {
      transform = "scale(0.85) translateX(-60%)";
      zIndex = 20;
      opacity = 0.8;
    } else if (position === 2) {
      transform = "scale(0.7) translateX(120%)";
      zIndex = 10;
      opacity = 0.6;
    } else if (position === -2) {
      transform = "scale(0.7) translateX(-120%)";
      zIndex = 10;
      opacity = 0.6;
    }

    return {
      opacity,
      transform,
      zIndex
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl mb-8 text-gray-700">
        Tienda Consciente Mente
      </h1>
      <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center overflow-x-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 z-40 p-3 rounded-full bg-black/10 backdrop-blur-sm text-white hover:bg-white/20 hover:text-gray-500 transition-all"
          aria-label="Previous card"
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 z-40 p-3 rounded-full bg-black/10 backdrop-blur-sm text-white hover:bg-white/20 hover:text-gray-500 transition-all"
          aria-label="Next card"
        >
          <FaChevronRight className="w-6 h-6" />
        </button>

        {/* Cards */}
        <div className="relative w-full max-w-lg h-full flex items-center justify-center py-4">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="absolute w-[300px] h-[400px] transition-all duration-500 cursor-pointer perspective-1000"
              style={getCardStyle(index)}
              onClick={() => index === activeIndex && setIsFlipped(!isFlipped)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                  isFlipped && index === activeIndex ? "rotate-y-180" : ""
                }`}
              >
                {/* Front of card */}
                <div className="absolute w-full h-full backface-hidden">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      fill
                      className="object-fit"
                    />
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={card.backImageUrl}
                      alt={`${card.title} - Back`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center">
                      <a
                        href={card.externalLink}
                        target="_blank"
                      >
                        <CustomButton 
                          text="Comprar" 
                          variant="basic"
                          icon={FaBasketShopping}
                          wrapperClassName="rounded-full"
                          className="rounded-full text-gray-700 bg-white hover:text-mer hover:scale-105 transition-all"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots navigation */}
      <div className="flex gap-2 mt-12">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              setIsFlipped(false);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeIndex
                ? "bg-mer w-6"
                : "bg-gray-500 hover:bg-black/70"
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}