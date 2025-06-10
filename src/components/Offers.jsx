import { Link } from "react-router-dom";

const Offers = () => {
    return ( 
        <>
        <div className="flex justify-center items-center gap-6 m-40 max-lg:flex-col max-lg:m-15">
        <img
        className="w-[573px] h-[330px] mr-10 max-lg:mt-30"
        src="image-1.png"
        alt="Nike air"
        />
        <div className="flex flex-col gap-2 max-lg:gap-5">
          <h6 className="font-bold text-[#C92071] text-[14px] leading-none max-lg:text-[#F6AA1C]">Ofertas especias</h6>
         <h2 className="font-bold text-[#474747] text-[48px] max-lg:text-[28px]">Air Jordan edição de colecionador</h2>
         <p className="text-[#474747] text-[16px] w-[589px] h-[112px] max-lg:w-[335px] max-lg:h-[110px] max-lg:text-[14px] max-lg:text-xm max-lg:mb-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
         <Link to={"/produtos"} className="cursor-pointer bg-[#C92071] text-white text-center w-[200px] h-[40px] p-2 rounded-[5px]">Ver oferta</Link>
        </div>
        </div>
        </>
     );
}
 
export default Offers;