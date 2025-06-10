import FooterInfo from "./FooterInfo";

const Footer = () => {
    const info1 = [
    { text: "Sobre Drip Store", link: "/about" },
    { text: "Segurança", link: "/security" },
    { text: "Wishlist", link: "/wishlist" },
    { text: "Blog", link: "/blog" },
    { text: "Trabalhe conosco", link: "/careers" },
    { text: "Meus pedidos", link: "/orders" },
  ];

  const info2 = [
    { text: "Camisetas", link: "/camisetas" },
    { text: "Calças", link: "/calcas" },
    { text: "Bonés", link: "/bones" },
    { text: "Headphones", link: "/headphones" },
    { text: "Tênis", link: "/tenis" },
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
      <div className="max-w-7xl mx-auto flex flex-wrap gap-20 mr-25 lg:grid lg:grid-cols-4 lg:gap-2 m-10 lg:mr-10 lg:ml-10">
        {/* Logo e descrição */}
        <div>
          <img className="mb-10" src="./src/assets/logo-footer (1).svg" alt="" />
          <p className="text-sm mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex gap-8">
            <a href="https://pt-br.facebook.com/" target="_blank">
              <img src="./src/assets/icon_facebook.svg" alt="Facebook" className="w-[10px] h-5" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src="./src/assets/icon_instagram.svg" alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="https://x.com/" target="_blank">
              <img src="./src/assets/icon_twitter.svg" alt="Twitter" className="w-[22px] h-5" />
            </a>
          </div>
        </div>

    
        <FooterInfo title="Informação" informations={info1} />
        <FooterInfo title="Categorias" informations={info2} />
        <FooterInfo title="Contato" informations={contato} />
      </div>
       

      {/* Linha e direitos autorais */}
      <hr className="border-neutral-700 my-6" />
      <p className="text-center text-sm">© 2024 Digital Store</p>
    </footer>
        </>
     );
}
 
export default Footer;