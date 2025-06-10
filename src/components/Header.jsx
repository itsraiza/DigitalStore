import HeaderDesk from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

const Header = () => {

    return ( 
        <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="lg:hidden">
        <HeaderMobile />
      </div>
      <div className="hidden lg:block">
        <HeaderDesk />
      </div>
    </header>

        </>
     );
}
 

export default Header;