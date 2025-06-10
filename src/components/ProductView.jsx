import BuyBox from "./BuyBox";
import Gallery from "./Gallery";
import ProductListing from "./ProductListing";
import Section from "./Section";


const ProductView = () => {
    
    return ( 
        <>
        
        <div className="flex gap-2 m-20 max-lg:flex-col">
             
            <Gallery 
            images={[
                {src: "/home-slide.png", background: "#E2E3FF"},
                {src: "/home-slide.png", background: "#FFE8BC"},
                {src: "/home-slide.png", background: "#FFC0BC"},
                {src: "/home-slide.png", background: "#DEC699"},
                {src: "/home-slide.png", background: "#E8DFCF"},
            ]} 
            width="700px"
            height="571px"
            radius="4px"
            className = "mb-20 top-[274px] left-[100px]"
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
        <div className="m-5 mt-30">
        <Section title={"Produtos Relacionados"} 
                 titleAlign="left" 
                 link={"Ver tudo →"}>

        <ProductListing 
                        showSection={false} 
                        limit={4}
                        className={"grid grid-cols-4 max-lg:grid-cols-2 flex-wrap justify-center gap-6"}
                        />

        </Section>
        </div>
        </>
     );
}
 
export default ProductView;