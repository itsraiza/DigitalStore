import Collections from "../components/Collections";
import Gallery from "../components/Gallery";
import Offers from "../components/Offers";
import ProductListing from "../components/ProductListing";
import Layout from "./Layout";

const HomePage = () => {
    return (
        <>
            <Layout>
                <Gallery />
                <Collections />
                <ProductListing />
                <Offers />
            </Layout>
        </>
    );
}

export default HomePage;