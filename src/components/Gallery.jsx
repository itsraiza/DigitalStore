import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRight from "../assets/arrow-right.svg";

const Gallery = ({
  className = "relative flex justify-center items-center bg-[#F5F5F5]",
  width = "",
  height = "",
  radius = "",
  home = true,
  Pview,
  showThumbs = true,
  showBackground,
  images = [
    {
      src: "/home-slide.png",
      name: "Queima de estoque Nike 🔥",
      description:
        "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    },
    {
      src: "/product_allstar_transparent.png",
      name: "Coleção Allstar Originals",
      description:
        "Nova coleção Allstar com conforto premium e design moderno.",
    },
    {
      src: "/product_fila_transparent.png",
      name: "Novo Fila Supreme",
      description:
        "Novo Fila exclusivo com descontos de até 30% OFF. Aproveite!",
    },
  ],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);


  const showPrev = () => {
    // A navegação no Home é cíclica, mas seu código original impedia voltar do primeiro slide. Mantendo a lógica original.
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };


  useEffect(() => {
    // Mantém o intervalo apenas para o modo home (slide)
    if (home) {
        const interval = setInterval(showNext, 5000);
        return () => clearInterval(interval);
    }
    return () => {};
  }, [home, showNext]);

  const product = images[currentIndex];
  
  // Variável para determinar se estamos no layout de detalhe do produto (Pview)
  // Usamos Pview && !home para garantir que o Pview seja o layout principal de produto.
  const isPviewLayout = Pview && !home;

  return (
    <section
        // Classe de layout principal: Home (flex-row) vs. Pview (flex-col)
        className={isPviewLayout 
            ? `flex flex-col items-center gap-4 w-full`
            : `${className} relative flex justify-evenly items-center px-[100px] pt-[20px] pb-[0] max-xl:px-[50px] max-lg:flex-col max-lg:items-center max-lg:pt-[30px]`}
        style={{ width, height }}
    >
      <div 
        // Classe do container da imagem e textos: Home (flex-row) vs. Pview (ajustado)
        className={isPviewLayout 
            ? "relative w-full overflow-hidden bg-[#F5F5F5]" // Estilo do container da imagem no Pview
            : "flex justify-between items-center gap-10 max-lg:flex-col-reverse"} 
        style={{
            backgroundColor: showBackground ? images[currentIndex]?.background : "transparent",
            borderRadius: radius,
            ...(isPviewLayout ? { aspectRatio: '4/3' } : {}), // Proporção para a caixa de imagem do Pview
        }}
      >
        {/* Botão anterior - Ajustado o left/right para caber melhor no Pview */}
        <button
          onClick={showPrev}
          disabled={currentIndex === 0}
          className={`absolute ${isPviewLayout ? 'left-4' : 'left-10'} top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-md cursor-pointer z-10 ${
            currentIndex === 0
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
        >
          <img src={ArrowLeft} alt="Anterior" />
        </button>

        {/* Bloco de Texto e Botão Principal (Apenas no Home) */}
        {home && (
          <div className="z-10 flex flex-col gap-6 max-w-[510px] max-lg:w-full max-lg:text-center max-lg:items-center">
            <h6 className="text-[#F6AA1C] text-[18px] font-medium tracking-wide max-lg:text-[#C92071] max-lg:text-[16px]">
              Melhores ofertas personalizadas
            </h6>

            <h1 className="text-[#1F1F1F] font-bold text-[64px] leading-[1.1] max-xl:text-[52px] max-lg:text-[40px]">
              {product.name}
            </h1>

            <p className="text-[#474747] text-[18px] leading-relaxed max-w-[495px] max-lg:w-[80%] max-lg:text-[16px]">
              {product.description}
            </p>

            <Link
              to="/produtos"
              className="mt-2 bg-[#C92071] hover:bg-[#a81860] transition text-white text-[18px] font-semibold text-center w-[210px] h-[50px] flex items-center justify-center rounded-[8px] shadow-md max-lg:w-[180px] max-lg:text-[16px]"
            >
              Ver Ofertas
            </Link>

            {/* Indicadores (pontos pequenos) - Serão renderizados no bloco showThumbs se for layout Home */}
          </div>
        )}

        {/* Imagem principal (Modo Home) */}
        {home && !isPviewLayout && (
          <div className="flex justify-center items-center w-[600px] h-[400px] max-xl:w-[500px] max-xl:h-[350px] max-lg:w-[80%] max-lg:h-[280px] overflow-hidden">
            <img
              key={product.src}
              src={product.src}
              alt={product.name}
              className="object-contain transition-all duration-700 ease-in-out opacity-100 transform"
              style={{
                transform: "rotate(-19deg)",
                borderRadius: radius,
                animation: "fadeIn 1s ease-in-out",
              }}
            />
          </div>
        )}

        {/* Imagem principal (Modo Pview) - Reposicionada para o container flex-col */}
        {Pview && (
          <div className="flex justify-center items-center w-full h-full max-w-[600px] mx-auto overflow-hidden">
            <img
              key={product.src}
              src={product.src}
              alt={product.name}
              className="object-cover w-full h-full transition-all duration-700 ease-in-out"
              style={{
                borderRadius: radius,
                animation: "fadeIn 1s ease-in-out",
              }}
            />
          </div>
        )}

        {/* Botão próximo */}
        <button
          onClick={showNext}
          // Lógica de desativação (Mantida a lógica original de desativação apenas no último)
          disabled={currentIndex === images.length - 1 && !isPviewLayout} 
          className={`absolute ${isPviewLayout ? 'right-4' : 'right-10'} top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-md cursor-pointer z-10 ${
            currentIndex === images.length - 1
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
        >
          <img src={ArrowRight} alt="Próximo" />
        </button>
      </div>

      {/*Miniaturas (Thumbs)*/}
      {showThumbs && (
        isPviewLayout ? (
          // LAYOUT PVIEW (Miniaturas Quadradas)
          <div className="flex gap-2 overflow-x-auto w-full justify-evenly items-center"> 
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mt-6 w-[117px] h-[96px] flex justify-center items-center cursor-pointer overflow-hidden transition-all duration-300 border-2 bg-white ${
                  index === currentIndex
                    ? "border-[#C92071] shadow-md" // Borda de destaque (cor principal)
                    : "border-gray-200" // Borda sutil
                }`}
                style={{
                  borderRadius: radius,
                  backgroundColor: img.background || 'white',
                }}
              >
                <img
                  src={img.src}
                  alt={img.name}
                  className="w-[90px] h-[80px] object-contain"
                />
              </div>
            ))}
          </div>
        ) : (
          // LAYOUT HOME (Indicadores Circulares)
          <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 flex gap-4 z-10 
              max-lg:relative max-lg:bottom-0 max-lg:mt-6 
              max-lg:w-full max-lg:justify-center">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  currentIndex === index
                    ? "bg-[#C92071]"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )
      )}
    </section>
  );
};

export default Gallery;