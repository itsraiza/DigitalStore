import { useState } from "react";
import { Link } from "react-router-dom";

const Gallery = ({
  className = "relative flex flex-col items-center bg-[#f5f5f5]",
  width = "",
  height = "",
  radius = "",
  home = true,
  showThumbs,
  showBackground,
  images = [
  { src: "public/home-slide-7 (1).jpeg"},
  { src: "public/home-slide-2.jpeg" },
  { src: "public/home-slide-3.jpeg" },
  { src: "public/home-slide-4.jpeg" },
  { src: "public/home-slide-5.jpeg" },
  { src: "public/home-slide-6.jpeg" },
  { src: "public/home-slide-1.jpeg" },
  { src: "public/home-slide-8.jpeg" }],
}) => {

   const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const showPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const containerStyle = {
    width: width || "100%",
    height: height || "auto",
  };

  const imageStyle = {
    borderRadius: radius || "4px",
  };


  return (
    <div className={`${className}`} style={containerStyle}>
      {/* Imagem principal */}
      <div className="w-full h-full overflow-hidden relative" style={{
          backgroundColor: showBackground ? images[currentIndex]?.background : "transparent",
          borderRadius: radius,
        }}>
        <img
          src={images[currentIndex]?.src}
          alt={`Slide ${currentIndex}`}
          className="w-[100%] h-full object-cover" style={imageStyle}
        />

        {/* Seta Esquerda */}
        <button
          className={`absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-white rounded-full shadow ${
            currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-200"
          }`}
          onClick={showPrev}
          disabled={currentIndex === 0}
        >
          <img src="./src/assets/arrow-left.svg" alt="Anterior" />
        </button>

        {/* Seta Direita */}
        <button
          className={`absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-white rounded-full shadow ${
            currentIndex === images.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-200"
          }`}
          onClick={showNext}
          disabled={currentIndex === images.length - 1}
        >
          <img src="./src/assets/arrow-right.svg" alt="Próximo" />
        </button>
      </div>

      {home && (

        <div className="absolute top-[20%] left-[100px] flex flex-col gap-7 w-[510px] h-[352px] max-lg:w-[297px] max-lg:h-[300px] max-lg:static max-lg:justify-center max-lg:items-center max-lg:gap-5 max-lg: mt-4"> 
         <h6 className="text-[#F6AA1C] text-[16px] leading-none max-lg:text-[#C92071]">Melhores ofertas personalizadas</h6>
         <h2 className="font-bold text-[#1F1F1F] text-[64px] max-lg:text-[40px] max-lg:text-center">Queima de stoque 🔥</h2>
         <p className="text-[#474747] text-[18px] w-[495px] h-[68px] max-lg:w-64 max-lg:text-[16px] max-lg:text-center">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
         <Link to={"/produtos"} className="cursor-pointer bg-[#C92071] text-white text-center w-52 h-12 p-3 rounded-[5px]">Ver oferta</Link>
        </div>
      )}

        {showThumbs && (
  <div className="flex justify-evenly items-center gap-2 bg-white">
    {images.map((img, index) => (
      
      <div
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`mt-10 w-[117px] h-[96px] flex items-center justify-center cursor-pointer ${
          index === currentIndex ? "border-2 border-[#C92071]" : "border border-[#CCCCCC]"
        }`}
        style={{
          backgroundColor: img.background || "#fff", // Fundo da thumb
          borderRadius: radius,
        }}
      >
        <img
          src={img.src}
          alt=""
          className="w-[90px] h-[80px] object-contain"
          style={{ borderRadius: radius }}
        />
      </div>
    ))}
  </div>
)}

    </div>
  );
}

export default Gallery;
