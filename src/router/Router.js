import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetail";
import UserLogin from "../pages/UserLogin";
import UserRegistration from "../pages/userRegistration";
import CartPage from "../pages/CartPage";
import BuyPage from "../pages/BuyPage";
function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/detail/:id" element={<ProductDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<UserLogin />} />
                <Route path="/registration" element={<UserRegistration />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/buy" element={<BuyPage />} />

            </Routes>
        </Router>
    );
}
export default AppRouter;
