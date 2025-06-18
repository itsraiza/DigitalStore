import FooterInfo from "./FooterInfo";
import LogoFooter from "../assets/logo-footer (1).svg";
import IconFacebook from "../assets/icon_facebook.svg";
import IconInstagram from "../assets/icon_instagram.svg";
import IconTwitter from "../assets/icon_twitter.svg";

const Footer = () => {
  const info1 = [
    { text: "Sobre Drip Store", link: "/" },
    { text: "Segurança", link: "/" },
    { text: "Wishlist", link: "/" },
    { text: "Blog", link: "/" },
    { text: "Trabalhe conosco", link: "/" },
    { text: "Meus pedidos", link: "/pedidos" },
  ];

  const info2 = [
    { text: "Camisetas", link: "/categorias" },
    { text: "Calças", link: "/categorias" },
    { text: "Bonés", link: "/categorias" },
    { text: "Headphones", link: "/categorias" },
    { text: "Tênis", link: "/categorias" },
  ];

  const contato = [
    {
      text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
      link: "#",
    },
    { text: "(85) 3051-3411", link: "tel:8530513411" },
  ];

  return (
    <>
      <footer className="bg-[#1F1F1F] text-white px-8 py-10">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-20 mr-2 lg:grid lg:grid-cols-4 lg:gap-2 m-10 lg:mr-10 lg:ml-10">
          <div>
            <img className="mb-10" src={LogoFooter} alt="" />
            <p className="text-sm mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex gap-8">
              <a href="https://pt-br.facebook.com/" target="_blank">
                <img src={IconFacebook} alt="Facebook" className="w-[10px] h-5" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <img src={IconInstagram} alt="Instagram" className="w-5 h-5" />
              </a>
              <a href="https://x.com/" target="_blank">
                <img src={IconTwitter} alt="Twitter" className="w-[22px] h-5" />
              </a>
            </div>
          </div>


          <FooterInfo title="Informação" informations={info1} />
          <FooterInfo title="Categorias" informations={info2} />
          <div className="max-lg:mr-25">
            <FooterInfo title="Contato" informations={contato} />
          </div>
        </div>


        
        <hr className="border-neutral-700 my-6" />
        <p className="text-center text-sm">© 2024 Digital Store</p>
      </footer>
    </>
  );
}

export default Footer;