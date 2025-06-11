import BuyBox from "./BuyBox";
import Gallery from "./Gallery";
import ProductListing from "./ProductListing";
import Section from "./Section";


const ProductView = () => {
    
    return ( 
        <>
        
        <div className=" flex flex-row gap-2 px-10 mt-15 max-lg:flex-col max-lg:px-4">
             
            <Gallery 
            images={[
                {src: "/home-slide.png", background: "#E2E3FF"},
                {src: "/home-slide.png", background: "#FFE8BC"},
                {src: "/home-slide.png", background: "#FFC0BC"},
                {src: "/home-slide.png", background: "#DEC699"},
                {src: "/home-slide.png", background: "#E8DFCF"},
            ]} 
            width="100%"
            height="auto"
            radius="4px"
            className = "mb-20 w-full lg:max-w-[700px] lg:max-h-[570px] lg:top-[274px] lg:left-[100px]"
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
        <div className="mt-30">
        <Section title={"Produtos Recomendados"} 
                 titleAlign
                 link={"Ver tudo →"}>

        <ProductListing 
                        showSection={false} 
                        limit={4}
                        className={"flex overflow-x-auto max-lg:justify-start no-scrollbar justify-center gap-6"}
                        />

        </Section>
        </div>
        </>
     );
}
 
export default ProductView;