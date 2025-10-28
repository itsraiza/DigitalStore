import ProductOptions from "./ProductOptions";
import StartIcon from "../assets/starticon.png";
import Avaliacoes from "../assets/avaliação.png";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";


const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  image,
  children,
}) => {

  const { addToCart } = useCart();
  const product = {
    id: reference, 
    name,
    price: priceDiscount ? parseFloat(priceDiscount) : parseFloat(price),
    image: image,
  };

  return (
    <div className="flex flex-col gap-2 ml-10 max-lg:ml-0 max-lg:pt-8 max-lg:w-full">
      <h1 className="text-[32px] text-[#1F1F1F]">{name}</h1>
      <span className="text-[12px] text-[#666666]">Ref: {reference}</span>

      <div className="flex items-center gap-2">
        <div className="flex items-center py-1 rounded-[4px]">
          <span className="text-[14px]">{stars}</span>
          <img src={StartIcon} alt="star" className="w-[92px] h-[14px]" />
        </div>
        <img src={Avaliacoes} alt="avaliações" className="w-[63px] h-[23px]" />
        <span className="text-[14px] text-[#8F8F8F]">{rating} avaliações</span>
      </div>

      <div className="flex items-center gap-2">
        {priceDiscount ? (
          <>
            <span className="text-[32px] text-[#474747]">{`R$ ${priceDiscount}`}</span>
            <span className="text-[16px] text-[#CCCCCC] line-through">{`R$ ${price}`}</span>
          </>
        ) : (
          <span className="text-[32px] text-[#474747]">{`R$ ${price}`}</span>
        )}
      </div>

      <p className="text-[14px] w-[440px] h-[30px] max-lg:w-[335px] max-lg:h-[50px] text-[#474747]">{description}</p>


      <span className="text-[14px] text-[#8F8F8F] font-bold">Tamanho</span>

      <ProductOptions 
        type="text"
        options={["39", "41", "42", "43"]}



      />
      <span className="text-[14px] text-[#8F8F8F] font-bold">Tamanho</span>

      <ProductOptions 
        type="color"
        shape="circle"
        options={["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"]}


      />


      <div className="flex flex-col gap-3 mt-2 max-lg:w-full max-lg:mt-5">
        <button
        
          onClick={() => {
            addToCart(product);
          }}
          className="w-[220px] h-[48px] bg-[#C92071] text-white text-[16px] px-6 py-3 rounded cursor-pointer hover:bg-pink-700 transition max-lg:w-full"
            >
          Adicionar ao Carrinho
        </button>
      </div>

      <Link to={"/pedidos"}>
        <button className="w-[220px] h-[48px] bg-[#FFB31F] text-white text-[16px] px-6 py-3 rounded cursor-pointer max-lg:w-full max-lg:mt-5">
          Comprar
        </button>
      </Link>


      <div className="flex flex-col gap-2">
        {children}

      </div>

    </div>
  );
};

export default BuyBox;