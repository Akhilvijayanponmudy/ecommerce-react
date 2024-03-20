import React, { useState, useEffect } from "react";
import Header from "../utlis/header";
import Cart from "../components/cart/cartComponent";
import baseURL from "../api/apiConfig";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const fetchCart = async (accessToken) => {
    try {
        const response = await axios.get(baseURL + 'cart', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
const getAccessToken = () => {
    return localStorage.getItem('accessToken');
};
function CartPage() {
    const [cartData, setCartData] = useState(null);
    const navigate = useNavigate();
    const accessToken = getAccessToken();
    if (!accessToken) {
        navigate('/login');
    }

    const fetchCartData = async () => {
        const cart = await fetchCart(accessToken);
        setCartData(cart);
    };
    useEffect(() => {
        fetchCartData();
    },[accessToken]);


    return (
        <div>
            <Header />
         <Cart />
        </div>
    )
    // return (
    //     <div>
    //         <Header />
    //         {cartData ? (
    //             <Cart props={cartData} />
    //         ) : (
    //             <p>Loading cart...</p>
    //         )}
    //     </div>
    // )
}
export default CartPage