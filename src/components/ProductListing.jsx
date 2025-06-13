import { Link, useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import Section from "./Section";



const ProductListing = ({
    products = [{
    id:1,
    name: "Tênis K-Swiss V8 - Masculino",
  },

  {
    id:2,
	  name: "Tênis Nike Revolution 6 Next Nature - Masculino",
	  price: 1000,
    priceDiscount: 500
  },

  {
    id:3,
    name: "Tênis Adidas - Masculino",
    price: 1000,
    priceDiscount: 500
  },

  {
    id:4,
    name: "Tênis Vans - Feminino",
    price: 400,
    priceDiscount: 200
  },

  {
    id:5,
    name: "All-Star - Feminino",
    price: 600,
    priceDiscount: 300
  },

  {
    id:6,
    name: "Tênis Puma - Feminino",
    price: 400,
    priceDiscount: 200
  }, 

  {
    id:7,
    name: "All-Star - Masculino",
    price: 600,
    priceDiscount: 300
  },

  {
    id:8,
    name: "Tênis Fila - Feminino",
    price: 800,
    priceDiscount: 400
  },

  {
    id:9,
    name: "Tênis Fila - Masculino",
    price: 800,
    priceDiscount: 400
  },

  {
    id:10,
    name: "Tênis Vans - Masculino",
    price: 400,
    priceDiscount: 200
  },

  {
    id:11,
     name: "Tênis Puma - Masculino",
     price: 400,
     priceDiscount: 200
  },

  {
    id:12,
    name: "Tênis Adidas - Feminino",
    price: 1000,
    priceDiscount: 500
  },

  {
    id:13,
    name: "Tênis Nike - Feminino",
    price: 1000,
    priceDiscount: 500
  },

  {
    id:14,
    name: "Tênis Olympikus - Masculino",
    price: 600,
    priceDiscount: 300
  },

  {
    id:15,
    name: "Tênis Olympikus - Feminino",
    price: 600,
    priceDiscount: 300
  },



  ],

  showSection = true,
  limit = 8,
  className = "grid grid-cols-3 max-lg:grid-cols-2 flex-wrap justify-center gap-6"

}) => {

  const slugify = (text) =>
  text
    .toLowerCase()
    .normalize("NFD") // remove acentos
    .replace(/[\u0300-\u036f]/g, "") // remove marcas dos acentos
    .replace(/[^\w\s-]/g, "") // remove símbolos
    .trim()
    .replace(/\s+/g, "-"); // troca espaços por hífens
  
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
          <Link to={`/product/${product.id}/${slugify(product.name)}`} key={index}>
            <ProductCard
              images={[{ src: product.image }]}
              name={product.name}
              price={product.price}
              priceDiscount={product.priceDiscount}
            />
          </Link>
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