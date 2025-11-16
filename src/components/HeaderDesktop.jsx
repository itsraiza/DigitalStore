import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext"; 
import Cart from "../assets/mini-cart (1).svg";
import Logo from "./Logo";
import Nav from './Nav';
import Lixeira from "../assets/lixeira.png";

const HeaderDesk = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { cartItems, totalItems, totalPrice, clearCart, removeFromCart } = useCart();

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

          {/* SEARCH */}
          <form onSubmit={handleSearch} className="relative">
            <div className="relative flex justify-evenly items-center">
              <input
                className="w-[559px] h-[50px] pl-4 pr-12 text-[#474747] placeholder-[#474747] border border-[#474747] rounded-lg focus:outline-none max-lg:hidden"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="procurar produto.."
              />
              <button onClick={handleSearch}>
                <i className="pi pi-search cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-[#474747] hover:text-[#C92071] text-base" />
              </button>
            </div>
          </form>

          {/* RIGHT SIDE */}
          <div className="flex justify-center items-center gap-7">
            <Link to={"/signup"} className="underline text-[16px] text-[#474747] max-lg:hidden">
              Cadastre-se
            </Link>
            <Link to={"/login"} className="bg-[#C92071] w-[114px] h-[40px] p-1.5 text-white text-center font-bold rounded-[4px] max-lg:hidden">
              Entrar
            </Link>

            {/* CART */}
            <div className="relative">
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
                              className="w-4 h-4 cursor-pointer md:m-0"
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
        <Nav/>
      </header>
    </>
  );
};

export default HeaderDesk;
