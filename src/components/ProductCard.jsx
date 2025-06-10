const ProductCard = ({
    image=[
      {src: "product-image-1.png"},
],
    name ="K-Swiss V8 - Masculino",
    price ="200",
    priceDiscount ="100",



}) => {
    return ( 
        <>
           
            <div className="relative flex flex-col justify-center items-center text-center mt-10 mx-auto w-full bg-white">

                <img src={image[0].src}
                     alt={name} 
                     className="w-full max-w-[248px] h-[134px] max-lg:w-[124px] max-lg:h-[67px] object-cover p-5 m-6 rotate-[-30deg]"
                     />
                <span className="absolute top-0 left-12 bg-[#E7FF86] text-[12px] px-4 py-1 rounded-full font-bold">
                50% OFF
                </span>
             {/* Nome */}
      <h3 className="text-[#474747] text-[16px] font-semibold mt-4">
        {name}
      </h3>

      {/* Preço */}
      <div className="flex gap-2 mt-2">
        {priceDiscount ? (
          <>
            <span className="text-[#8F8F8F] text-[18px] line-through">
              R$ {price}
            </span>
            <span className="text-[#1F1F1F] text-[24px]">
              R$ {priceDiscount}
            </span>
          </>
        ) : (
          <span className="text-[#1F1F1F] text-[24px] font-semibold">
            R$ {price}
          </span>
        )}
      </div>
            </div>
        </>
     );
}
 
export default ProductCard;