import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Nav from "./Nav";
import { useState } from "react";

const HeaderDesk = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
      e.preventDefault();
      if (searchTerm.trim() !== "") {
        navigate(`/produtos?search=${encodeURIComponent(searchTerm)}`);
        setSearchTerm("");
      }
    };

    return ( 
        <>
        <header className="bg-white px-4 py-3 shadow-md sticky top-0 z-50 max-lg:hidden">   
        <div className="m-6 flex items-center justify-evenly">
        
        <Logo />

       <form onSubmit={handleSearch} className="relative">
       <div className='relative flex justify-evenly items-center'>
        <input 
        className='w-[559px] h-[50px] pl-4 pr-12 text-[#474747] placeholder-[#474747] border border-[#474747] rounded-lg focus:outline-none max-lg:hidden' 
        type="text" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='procurar produto..'/>
        <button onClick={handleSearch}>
        <i
        className="pi pi-search cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-[#474747] hover:text-[#C92071] text-base"/>
        </button>
       </div>
       </form>


       <div className='flex justify-center items-center gap-7'>
         <Link to={"/signup"} className='underline text-[16px] text-[#474747] max-lg:hidden'>Cadastre-se</Link>
         <Link to={"/login"} className='bg-[#C92071] w-[114px] h-[40px] p-1.5 text-white text-center font-bold rounded-[4px] max-lg:hidden' >Entrar</Link>

         <div className='relative'>
            <img src='/src/assets/mini-cart (1).svg' 
                 alt='carrinho' 
                 className='w-5 h-10 cursor-pointer md:m-0'/>
            <span className='absolute p-[2px] -top-[-0.6px] right-[-7px] bg-[#C92071] text-white text-xs w-[14px] h-[14px] flex items-center justify-center rounded-full'>
              2
            </span>
          </div>
        </div>
     </div>

      <Nav/>

     </header>
        </>
     );
}
 
export default HeaderDesk;