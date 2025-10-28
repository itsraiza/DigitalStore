import { useParams } from "react-router-dom";
import BuyBox from "./BuyBox";
import Gallery from "./Gallery";
import ProductListing from "./ProductListing";
import Section from "./Section";
import Products from "./Products";

const ProductView = () => {
    const { id } = useParams();
    const product = Products.find((p) => p.id === parseInt(id));

    if (!product) return <p>Produto não encontrado</p>;


    return (
        <>

            <h1 className="text-[#474747] text-[14px] text-left ml-23 mt-5 max-lg:ml-5 max-lg:m-5">
                <span className="font-bold">Home </span>/ Produtos / {product.name}
            </h1>

            <div className="flex flex-col lg:flex-row items-start justify-center gap-2 px-20 mt-10 max-lg:px-4">

                <Gallery
                    images= {product.images}
                    width="100%"
                    height="auto"
                    radius="4px"
                    className="w-full"
                    home={false}
                    Pview={true}
                    showThumbs={true}
                    showBackground
                    />

               

                <BuyBox 
                    name={product.name}
                    reference={product.reference}
                    rating={product.rating}
                    price={product.price}
                    priceDiscount={product.priceDiscount}
                    description={product.description}
                    image={product.image}
                />

            </div>
            <div className="lg:ml-10 lg:mr-10 mt-20">
                <Section title={"Produtos Recomendados"}
                    titleAlign
                    link={"Ver tudo →"}>


                    <ProductListing
                        showSection={false}
                        limit={4}
                        className={"flex gap-6 lg:gap-35 justify-center overflow-x-auto max-lg:ml-5 max-lg:mr-5 max-lg:justify-start no-scrollbar"}
                    />

                </Section>
            </div>
        </>
    );
}

export default ProductView;