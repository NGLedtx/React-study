import { useState } from "react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
function Enterprise() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const images = [
    "/img/image1.png",
    "/img/image2.png",
    "/img/image3.png",
    "/img/image4.png",
    "/img/image5.png",
    "/img/image6.png",
    "/img/image7.png",
  ];
  {
    images.map((_, index) => (
      <span
        key={index}
        className={`w-3 h-3 rounded-full cursor-pointer ${
          currentIndex === index ? "bg-black" : "bg-gray-400"
        }`}
      ></span>
    ));
  }
  function nextImage() {
    setIsVisible(false);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setIsVisible(true);
    }, 500);
  }
  function prevImage() {
    setIsVisible(false);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setIsVisible(true);
    }, 500);
  }
  return (
    <div className="flex-grow flex flex-col items-center justify-center  bg-gray-100 p-10">
      <div className="grid grid-cols-2 gap-10 items-center w-full max-w-5xl">
        <div>
          <div className="w-full max-w-5xl aspect-video overflow-hidden rounded-lg">
            <img
              src={images[currentIndex]}
              className={`w-full h-full object-cover transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            />
          </div>
          <div className="flex w-full justify-center items-center mt-5 gap-4 text-2xl">
            <button onClick={prevImage}>
              <BsCaretLeftFill />
            </button>
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                    currentIndex === index
                      ? "bg-black scale-125"
                      : "bg-gray-400"
                  }`}
                ></span>
              ))}
            </div>
            <button onClick={nextImage}>
              <BsCaretRightFill />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full text-justify">
          <h1 className="text-4xl font-bold mb-4">Sobre nossa empresa</h1>
          <p className="text-lg text-gray-600">
            A Costs Enterprise é uma empresa dedicada a fornecer soluções
            inovadoras e de qualidade para o setor de custos. Fomos fundados com
            a missão de ajudar as empresas a otimizar seus processos de custos,
            oferecendo ferramentas e consultoria especializada para maximizar a
            eficiência e reduzir despesas. Nossa visão é ser reconhecida como a
            principal referência em soluções de custos, contribuindo para o
            sucesso e crescimento dos nossos clientes. Na Costs, valorizamos a
            transparência, a inovação e o compromisso com a excelência em tudo o
            que fazemos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Enterprise;
