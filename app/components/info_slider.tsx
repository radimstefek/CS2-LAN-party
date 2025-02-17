"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute right-4 top-1/2 transform -translate-y-1/2`}
      style={{
        ...style,
        display: "block",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <FaArrowRight size={40} className="text-white" />
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-4 top-1/2 transform -translate-y-1/2`}
      style={{
        ...style,
        display: "block",
        cursor: "pointer",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FaArrowLeft size={40} className="text-white" />
    </div>
  );
}

export default function TournamentSection() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Seznam obrázků pro slider (uložte je například do složky /public/images)
  const sliderImages = [
    "/images/dn6at00hkzqb1.png",
    "/images/uql3e79n3wqb1.png",
    "/images/Article-Header-Web-CS2.png",
  ];

  return (
    <section className="bg-[#121212] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Velký nadpis */}
        <h1 className="text-5xl font-bold text-yellow-500 mb-4">
          CS2 LAN Turnaj 2025
        </h1>
        {/* Podnadpis */}
        <h2 className="text-2xl mb-6">
          Vítejte na oficiální stránce turnaje pořádaného CS2 komunitou
        </h2>
        {/* Popis turnaje */}
        <p className="text-lg mb-8">
          Připravte se na nezapomenutelný zážitek s nejlepšími týmy, soutěžemi a
          exkluzivními odměnami. Přijďte a zažijte atmosféru profesionální CS2 akce,
          kde se setkávají hráči z celého světa!
        </p>
        {/* Slider s obrázky */}
        <div className="relative">
          <Slider {...sliderSettings}>
            {sliderImages.map((src, index) => (
              <div key={index}>
                <img
                  src={src}
                  alt={`Slider image ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
