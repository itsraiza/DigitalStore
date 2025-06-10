import ProductOptions from "./ProductOptions";

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  return (
    <div className="flex flex-col gap-4 ml-10">
      <h1 className="text-[32px] text-[#1F1F1F]">{name}</h1>
      <span className="text-[12px] text-[#666666]">Ref: {reference}</span>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 px-2 py-1 bg-warning rounded-[4px]">
          <span className="text-[14px]">{stars}</span>
          <img src="./src/assets/starticon.png" alt="star" className="w-[92px] h-[14px]" />
        </div>
        <img src="./src/assets/avaliação.png" alt="avaliações" className="w-[63px] h-[23px]"/>
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

        <p className="text-[14px] w-[440px] h-[66px] text-[#474747]">{description}</p>

      
     <span className="text-[14px] text-[#8F8F8F] font-bold">Tamanho</span>

        <ProductOptions type="text"
                        options={["39", "41", "42", "43"]}
                        
                        
                       
        />
     <span className="text-[14px] text-[#8F8F8F] font-bold">Tamanho</span>

         <ProductOptions type="color"
                         shape="cicle"
                         options={["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"]}
                         
                        
        />

      <div className="flex flex-col gap-2">
        {children}
        
      </div>

      <button className="w-[220px] h-[48px] bg-[#FFB31F] text-white text-[16px] px-6 py-3 rounded cursor-pointer">
        Comprar
      </button>
    </div>
  );
};

export default BuyBox;