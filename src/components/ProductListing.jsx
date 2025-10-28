import { Link, useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import Section from "./Section";
import Products from "./Products";



const ProductListing = ({
  products = Products,
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

  // Captura o parâmetro "search" da URL
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
          <Link to={`/produto/${product.id}/${slugify(product.name)}`} key={index}>
            <ProductCard
              image={product.image}
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
          <Link to={"/produtos"}>
            <div className="grid grid-cols-4 max-lg:grid-cols-2 flex-wrap justify-center gap-6">
              {displayedProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  priceDiscount={product.priceDiscount}
                />
              ))}
            </div>
          </Link>
        </Section>

      </>
    );
  return content;
}

export default ProductListing;