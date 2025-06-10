import { Link } from "react-router-dom";

const FooterInfo = ({ 
    title, 
    informations 

}) => {
    return ( 
        <>
        <div className="lg:ml-40">
            <h3 className="font-semibold text-[18px] mb-4">{title}</h3>
            <ul className="space-y-2 text-[16px]">
            {informations.map((info, index) => (
                <li key={index}>
                    <Link to={info.link} className="hover:underline">
                    {info.text}
                    </Link>
                </li>
            ))}
            </ul>
        </div>

        </>
     );
}
 
export default FooterInfo;