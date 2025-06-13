import { Link } from "react-router-dom";
import Section from "./Section";

const Collections = ({
   home = true

}) => {
    return ( 
        <>

        
        <Section title="Coleções em destaque" titleAlign="left">
        <div className={`flex flex-col justify-center items-center m-4`}>
          <div className=" relative flex justify-center items-center gap-4 m-2.5 max-lg:flex-col">
        <div className="relative rounded-xl overflow-hidden">
        <img src="public/collection-1.png" 
             alt="img1" />
        <span className="absolute top-5 left-6 bg-[#E7FF86] text-[12px] px-4 py-1 rounded-full font-bold">
        30% OFF
      </span>

      {/* Botão */}
      <Link to={"/produtos"} className="absolute bottom-9 left-6 bg-[#F5F5F5] px-8 py-4 rounded-md text-[#C92071] text-sm font-semibold">
        Comprar
      </Link>

        </div>

        <div className="relative rounded-xl overflow-hidden">
        <img src="public/collection-2.png" 
             alt="img2" />
        <span className="absolute top-5 left-8 bg-[#E7FF86] text-[12px] px-4 py-1 rounded-full font-bold max-lg:top-3 max-lg:left-5">
        30% OFF
      </span>

      {/* Botão */}
      <Link to={"/produtos"} className="absolute bottom-9 left-8 bg-[#F5F5F5] px-8 py-4 rounded-md text-[#C92071] text-sm font-semibold">
        Comprar
      </Link>
        </div>

        <div className="relative rounded-xl overflow-hidden">
        <img src="public/collection-3.png" 
             alt="img3" />
        <span className="absolute top-5 left-3 bg-[#E7FF86] text-[12px] px-4 py-1 rounded-full font-bold max-lg:top-3 max-lg:left-5">
        30% OFF
        </span>

      {/* Botão */}
      <Link to={"/produtos"} className="absolute bottom-9 left-3 bg-[#F5F5F5] px-8 py-4 rounded-md text-[#C92071] text-sm font-semibold">
        Comprar
      </Link>
        </div>
      </div>

    

      <Section title= "Coleções em destaque" titleAlign="center">
       <div className="flex gap-8 mt-10 overflow-x-auto max-lg:justify-start justify-center no-scrollbar">
    {/* Item 1 */}
    <div className="flex flex-col items-center min-w-[80px] cursor-pointer">
      <img
        className="w-[64px] bg-white rounded-full p-1"
        src="./src/assets/t-shirt.png"
        alt="Camisetas"
        />
      <span className="text-xs font-bold text-[#474747] mt-2">
        Camisetas
      </span>
    </div>

    {/* Item 2 */}
    <div className="flex flex-col items-center min-w-[80px] cursor-pointer">
      <img
        className="w-[64px] bg-white rounded-full p-1"
        src="./src/assets/calcas.png"
        alt="Calças"
        />
      <span className="text-xs font-bold text-[#474747] mt-2">
        Calças
      </span>
    </div>

    {/* Item 3 */}
    <div className="flex flex-col items-center min-w-[80px] cursor-pointer">
      <img
        className="w-[64px] bg-white rounded-full p-1"
        src="./src/assets/calcas.png"
        alt="Bonés"
        />
      <span className="text-xs font-bold text-[#474747] mt-2">
        Bonés
      </span>
    </div>

    {/* Item 4 */}
    <div className="flex flex-col items-center min-w-[80px] cursor-pointer">
      <img
        className="w-[64px] bg-white rounded-full p-1"
        src="./src/assets/Headphones.png"
        alt="Headphones"
        />
      <span className="text-xs font-bold text-[#474747] mt-2">
        Headphones
      </span>
    </div>

    {/* Item 5 */}
    <div className="flex flex-col items-center min-w-[80px] cursor-pointer">
      <img
        className="w-[64px] bg-white rounded-full p-1"
        src="./src/assets/tenis.png"
        alt="Tênis"
        />
      <span className="text-xs font-bold text-[#474747] mt-2">
        Tênis
      </span>
    </div>
    </div>
    </Section>
    </div>
    </Section>
        
        </>
     );
}
 
export default Collections;