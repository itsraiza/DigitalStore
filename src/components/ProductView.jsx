import { useParams } from "react-router-dom";
import BuyBox from "./BuyBox";
import Gallery from "./Gallery";
import ProductListing from "./ProductListing";
import Section from "./Section";

const ProductView = () => {
    const { slug } = useParams();

    const formatSlug = (slug) => {
        return slug
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    const slugFormatado = formatSlug(slug);


    return (
        <>

            <h1 className="text-[#474747] text-[14px] text-left ml-23 mt-5 max-lg:ml-5 max-lg:m-5"><span className="font-bold">Home </span>/ Produtos / Tênis / Nike / {slugFormatado}</h1>

            <div className=" flex flex-row gap-2 px-23 mt-10 max-lg:flex-col max-lg:px-4">

                <Gallery
                    images={[
                        { src: "/home-slide.png", background: "#E2E3FF" },
                        { src: "/home-slide.png", background: "#FFE8BC" },
                        { src: "/home-slide.png", background: "#FFC0BC" },
                        { src: "/home-slide.png", background: "#DEC699" },
                        { src: "/home-slide.png", background: "#E8DFCF" },
                    ]}
                    width="100%"
                    height="auto"
                    radius="4px"
                    className="mb-10 w-full lg:mb-20 lg:max-w-[700px] lg:max-h-[570px] lg:top-[274px] lg:left-[100px]"
                    home={false}
                    showThumbs={true}
                    showBackground
                />


                <BuyBox name={"Tênis Nike Revolution 6 Next Nature Masculino"}
                    reference={"Casual | Nike | REF:38416711"}
                    rating={"(90)"}
                    price={"519"}
                    priceDiscount={"259"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}
                />

            </div>
            <div className="lg:ml-10 lg:mr-10 mt-30">
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