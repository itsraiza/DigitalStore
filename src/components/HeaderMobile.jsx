import { useState } from "react";
import Logo from "./Logo";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Cart from "../assets/mini-cart (1).svg";
import Lixeira from "../assets/lixeira.png";
import { useCart } from "./CartContext"; 

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
    const [open, setOpen] = useState(false);

    const { cartItems, totalItems, totalPrice, clearCart, removeFromCart } = useCart();

    return (

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
                                    <NavLink to="/" className={({ isActive }) => `hover:text-[#C92071] ${isActive ? "underline text-[#C92071]" : ""}`}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/produtos" className={() => (isProdutosActive ? "underline text-[#C92071]" : "hover:text-[#C92071]")}>Produtos</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/categorias" className={({ isActive }) => `hover:text-[#C92071] ${isActive ? "underline text-[#C92071]" : ""}`}>Categorias</NavLink>
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

                    <div className="relative mr-2">
                        <img
                            src={Cart}
                            alt="carrinho"
                            className="w-5 h-10 cursor-pointer md:m-0"
                            onClick={() => setOpen(!open)}
                        />
                        {totalItems > 0 && (
                            <span className="absolute p-[2px] -top-[-0.6px] right-[-7px] bg-[#C92071] text-white text-xs w-[14px] h-[14px] flex items-center justify-center rounded-full">
                            {totalItems}
                            </span>
                        )}

                        {/* DROPDOWN DO CARRINHO */}
                        {open && (
                            <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg p-4 z-50">
                            <h2 className="font-bold text-gray-700 mb-2">Meu Carrinho</h2>

                            {cartItems.length === 0 ? (
                                <p className="text-gray-500">Carrinho vazio</p>
                            ) : (
                                <>
                                <div className="space-y-2 max-h-40 overflow-y-auto">
                                    {cartItems.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between">
                                        <img src={item.image} alt={item.name} className="w-10 h-10 object-cover" />
                                        <div className="flex-1 ml-2">
                                        <p className="text-sm font-medium">{item.name}</p>
                                        <p className="text-xs text-gray-500">R$ {item.price.toFixed(2)}</p>
                                        </div>
                                        <span className="text-sm font-semibold mr-2">x{item.quantity}</span>
                                        <img
                                            src={Lixeira}
                                            alt="lixeira"
                                            className="w-4 h-4 cursor-pointer"
                                            onClick={() => removeFromCart(item.id)}
                                        />
                                    </div>
                                    ))}
                                </div>

                                <div className="mt-3">
                                    <p className="flex justify-between font-semibold">
                                    <span>Valor total:</span>
                                    <span className="text-[#C92071]">R$ {totalPrice.toFixed(2)}</span>
                                    </p>
                                    <div className="flex justify-between mt-2">
                                    <button
                                        onClick={clearCart}
                                        className="text-sm text-gray-500 hover:underline cursor-pointer"
                                    >
                                        Esvaziar
                                    </button>
                                    <Link
                                        to="/pedidos"
                                        className="bg-[#C92071] text-white px-3 py-1 rounded-md text-sm"
                                    >
                                        Ver Carrinho
                                    </Link>
                                    </div>
                                </div>
                                </>
                            )}
                            </div>
                        )}
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


    );
}

export default HeaderMobile;