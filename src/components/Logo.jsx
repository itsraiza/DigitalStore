import { Link } from "react-router-dom";
import LogoHeader from "../assets/logo-header.svg";

const Logo = () => {
    return (
        <>
            <Link to={"/"}>
                <img className="w-63 h-11 max-md:w-32 max-md:h-6 max-md:block max-md:m-auto" src={LogoHeader} alt="" />
            </Link>

        </>
    );
}

export default Logo;