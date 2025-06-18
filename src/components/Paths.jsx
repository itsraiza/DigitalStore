import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import Category from "../pages/Category";
import Orders from "../pages/Orders";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/produtos" element={<ProductListingPage />} />
                    <Route path="/produto/:id/:slug" element={<ProductViewPage />} />
                    <Route path="/categorias" element={<Category />} />
                    <Route path="/pedidos" element={<Orders />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Paths;