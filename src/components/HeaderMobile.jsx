import { useState } from "react";
import Logo from "./Logo";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const HeaderMobile = () => {

    const location = useLocation();

    const isProdutosActive =
        location.pathname.startsWith("/produtos") ||
        location.pathname.startsWith("/produto");

    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
        navigate(`/produtos?search=${encodeURIComponent(searchTerm)}`);
        setSearchTerm("");
    }
    };

    const [menuOpen, setMenuOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    return (
        <>
            <header className="px-4 py-3 shadow-md sticky top-0 z-50 min-lg:hidden">
                <div className="m-6 flex items-center justify-between">

                    <button
                        className="lg:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <i className="pi pi-bars cursor-pointer text-2xl text-[#474747]"></i>
                    </button>

                    {menuOpen && (
                        <div className="lg:hidden absolute left-0 top-[100%] bg-white p-4 shadow-md w-[50%] h-screen">
                            <h2 className="text-[16px] text-[#474747] mb-8">Páginas</h2>
                            <nav className="flex flex-col gap-2">
                                <ul className="flex flex-col justify-start gap-6 text-sm text-[#474747] font-medium underline-offset-4">
                                    <li>
                                        <NavLink to="/" className={({ isActive }) =>  `hover:text-[#C92071] ${isActive ? "underline text-[#C92071]" : ""}`}>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/produtos" className={() => (isProdutosActive ? "underline text-[#C92071]" : "hover:text-[#C92071]")}>Produtos</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/categorias" className={({ isActive }) =>  `hover:text-[#C92071] ${isActive ? "underline text-[#C92071]" : ""}`}>Categorias</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/pedidos" className={({ isActive }) => `hover:text-[#C92071] ${isActive ? "underline text-[#C92071]" : ""}`}>Meus Pedidos</NavLink>
                                    </li>
                                </ul>

                                <div className="flex flex-col items-center gap-5 mt-10" >
                                    <Link to={"/login"} className="bg-[#C92071] text-white text-center px-4 py-2 rounded-[4px]">Entrar</Link>
                                    <Link to={"/signup"} className="underline text-[#474747">Cadastre-se</Link>
                                </div>

                            </nav>

                        </div>
                    )}

                    <Logo />
                  <div className="flex justify-between items-center gap-2 space-x-4">
                    <div className='relative flex items-center'>
                        <button className="text-xl" onClick={() => setShowSearch(!showSearch)}>
                            <i
                                className="pi pi-search cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-[#474747] hover:text-[#C92071] text-base" />
                        </button>
                    </div>

                        <div className='relative mr-2'>
                            <img src='/src/assets/mini-cart (1).svg'
                                alt='carrinho'
                                className='w-5 h-10 cursor-pointer md:m-0' />
                            <span className='absolute p-[2px] -top-[-0.6px] right-[-7px] bg-[#C92071] text-white text-xs w-[14px] h-[14px] flex items-center justify-center rounded-full'>
                                2
                            </span>
                        </div>
                   </div>
                 </div>
                        {showSearch && (
                            <form onSubmit={handleSearch} className="relative">
                            <div className="relative lg:hidden mt-3">
                                <input
                                    className="w-full h-[50px] pl-4 pr-12 text-[#474747] placeholder-[#474747] border border-[#474747] rounded-lg focus:outline-none"
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Procurar produto..."
                                />
                                <button onClick={handleSearch}>
                                <i
                                className="pi pi-search cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-[#474747] text-base" />  
                                </button>
                            </div>
                            </form>

                        )}
            </header>

        </>
    );
}

export default HeaderMobile;