import { NavLink, useLocation } from "react-router-dom";


const Nav = () => {
  const location = useLocation();

  const isProdutosActive =
    location.pathname.startsWith("/produtos") ||
    location.pathname.startsWith("/produto");

  return (
    <>

      <nav className="mt-4 ml-20 pt-10 max-lg:hidden">
        <ul className="flex justify-start gap-6 text-sm text-[#474747] font-medium underline-offset-4">
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
      </nav>

    </>
  );
}

export default Nav;