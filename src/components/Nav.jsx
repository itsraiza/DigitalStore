import { NavLink } from "react-router-dom";


const Nav = () => {
    return ( 
        <>

      <nav className="mt-4 ml-20 pt-10 max-lg:hidden">
        <ul className="flex justify-start gap-6 text-sm text-[#C92071] font-medium underline-offset-4">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "underline" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/produtos" className={({ isActive }) => isActive ? "underline" : ""}>Produtos</NavLink>
          </li>
          <li>
            <NavLink to="/categorias" className={({ isActive }) => isActive ? "underline" : ""}>Categorias</NavLink>
          </li>
          <li>
            <NavLink to="/pedidos" className={({ isActive }) => isActive ? "underline" : ""}>Meus Pedidos</NavLink>
          </li>
        </ul>
      </nav>

        </>
     );
}
 
export default Nav;