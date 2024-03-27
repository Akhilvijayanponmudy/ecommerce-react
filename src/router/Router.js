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
import Test from "../pages/test";
import Account from "../pages/Account"
import Payment from "../pages/Payment"
// import LoginRequired from "../components/loginRequired/loginRequired";

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
                <Route path="/buy/:id" element={<BuyPage />} />
                <Route path="/test" element={<Test />} />
                <Route path="/account" element={<Account />} />
                <Route path="/payment" element={<Payment />} />
                {/* <Route path="/cart/:id" element={<LoginRequired ><CartPage /></LoginRequired>} /> */}


            </Routes>
        </Router>
    );
}
export default AppRouter;
