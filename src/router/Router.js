import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";


function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}
export default AppRouter;
