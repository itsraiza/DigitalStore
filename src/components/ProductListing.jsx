import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import Section from "./Section";

const ProductListing = ({
    products = [{
    name: "Tênis K-Swiss V8 - Masculino",
  },

  {
	  name: "Tênis Nike - Masculino",
	  price: 1000,
    priceDiscount: 500
  },

  {
    name: "Tênis Adidas - Masculino",
    price: 1000,
    priceDiscount: 500
  },

  {
    name: "Tênis Vans - Feminino",
    price: 400,
    priceDiscount: 200
  },

  {
    name: "All-Star - Feminino",
    price: 600,
    priceDiscount: 300
  },

  {
    name: "Tênis Puma - Feminino",
    price: 400,
    priceDiscount: 200
  }, 

  {
    name: "All-Star - Masculino",
    price: 600,
    priceDiscount: 300
  },

  {
    name: "Tênis Fila - Feminino",
    price: 800,
    priceDiscount: 400
  },

  {
    name: "Tênis Fila - Masculino",
    price: 800,
    priceDiscount: 400
  },

  {
    name: "Tênis Vans - Masculino",
    price: 400,
    priceDiscount: 200
  },

  {
    name: "Tênis Puma - Masculino",
     price: 400,
     priceDiscount: 200
  },

  {
    name: "Tênis Adidas - Feminino",
    price: 1000,
    priceDiscount: 500
  },

  {
    name: "Tênis Nike - Feminino",
    price: 1000,
    priceDiscount: 500
  },

  {
    name: "Tênis Olympikus - Masculino",
    price: 600,
    priceDiscount: 300
  },

  {
    name: "Tênis Olympikus - Feminino",
    price: 600,
    priceDiscount: 300
  },



  ],

  showSection = true,
  limit = 8,
  className = "grid grid-cols-3 max-lg:grid-cols-2 flex-wrap justify-center gap-6"

}) => {

   const location = useLocation();

  // 🎯 Captura o parâmetro "search" da URL
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search")?.toLowerCase() || "";

  // 🔍 Filtra os produtos pelo nome com base na busca
  const filteredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(searchQuery)
  );

  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  const content = 
  
  <div className={`${className}`}>
      {displayedProducts.length > 0 ? (
        displayedProducts.map((product, index) => (
          <ProductCard
            key={index}
            images={[{ src: product.image}]}
            name={product.name}
            price={product.price}
            priceDiscount={product.priceDiscount}
          />
        ))
      ) : (
        <p className="col-span-3 text-center text-gray-500">
          Nenhum produto encontrado.
        </p>
      )}
    </div>

  if (showSection)

  return ( 
    <>
      <Section title="Produtos em alta" titleAlign="left" link="Ver tudo →">
        <a href={"/produtos"}>
         <div className="grid grid-cols-4 max-lg:grid-cols-2 flex-wrap justify-center gap-6">
      {displayedProducts.map((product, index) => (
        <ProductCard
          key={index}
          images={[{ src: product.image }]}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
        /> 
      ))}
    </div>
    </a>
      </Section>

    </>
   );
   return content;
}
 
export default ProductListing;