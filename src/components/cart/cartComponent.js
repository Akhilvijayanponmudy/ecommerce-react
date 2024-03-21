import React, { useState, useEffect,useCallback } from "react";
import Style from './cart.module.css'
import { Container, Row, Button } from "react-bootstrap";
import getJWTtoken from "../../contexts/checkJWTexistance";
import axios from 'axios';
import baseURL from "../../api/apiConfig";
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]); // State to hold cart items (with quantity)

    const fetchCartData =useCallback( async () => {
        try {
            const accessToken = getJWTtoken();
            if (!accessToken) {
                navigate('/login');
                return;
            }

            const response = await axios.get(`${baseURL}cart`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setCartItems(response.data);
        } catch (error) {
            console.log(error);
            navigate('/login');
        }
    },[navigate]);


    useEffect(() => {
        fetchCartData();
    }, [fetchCartData]);


    const removeItem = async (id) => {
        if (id) {
            const accessToken = getJWTtoken();
            try {
                const response = await axios.post(`${baseURL}cart/remove-from-cart/${id}`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    });
                if (response.data.status === true) {
                    fetchCartData();
                } else {
                    alert('Something Went Wrong')
                }

            } catch (error) {
                console.log(error);
                navigate('/login');

            }
        } else {
            alert('Something went wrong');
            navigate('/login');

        }
    }


    const increment = async (id) => {
        const accessToken = getJWTtoken();
        if (!accessToken) {
            navigate('/login');
        } else {
            try {
                const response = await axios.post(`${baseURL}cart/add-to-cart/${id}`,
                    { quantity: 1, },
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    });
                if (response.data.status === true) {
                    fetchCartData();
                } else {
                    alert('Something Went Wrong')
                }

                console.log('Added to cart:', response.data);
            } catch (error) {
                console.log(error);
                navigate('/login');

            }
        }
    };


    const decrement = async (id) => {
        const accessToken = getJWTtoken();
        if (!accessToken) {
            navigate('/login');
        } else {
            try {
                const response = await axios.post(`${baseURL}cart/add-to-cart/${id}`,
                    { quantity: -1, },
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    });
                if (response.data.status === true) {
                    fetchCartData();
                } else {
                    alert('Something Went Wrong')
                }

                console.log('Added to cart:', response.data);
            } catch (error) {
                console.log(error);
            }
        }
    };
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };
    return (
        <section className={Style.cartSection}>
            <Container>
                <Row>
                    <table className={Style.cartListWrap}>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Product Name</th>
                                <th>Product Quantity</th>
                                <th>Product Price</th>
                                <th>Total Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.length > 0 ? ( // Check for empty cart before rendering
                                cartItems.map(item => (
                                    <tr key={item.id}>
                                        <td>
                                            <figure><img src={`${baseURL}uploads/${item.img}`} alt={item.name} /></figure>
                                        </td>
                                        <td>
                                            <span className={Style.produtName}>{item.name}</span>
                                        </td>
                                        <td>
                                            <div className={Style.QuantityControl}>
                                                <Button variant="secondary" onClick={() => decrement(item.id)}>-</Button>
                                                <span className={Style.Count}>{item.quantity}</span>
                                                <Button variant="secondary" onClick={() => increment(item.id)}>+</Button>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={Style.ProductPrice}>Rs. {item.price}</span>
                                        </td>
                                        <td>
                                            <span className={Style.ProductPrice}>Rs. {item.price * item.quantity}</span>
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={() => removeItem(item.id)}>Remove</Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">Your cart is empty.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </Row>
                <Row>
                    <div className={Style.priceSection}>
                        Total Price: Rs. {getTotalPrice()}
                        <div className={Style.buyBtnsec}>
                            <Button variant="primary">Buy</Button>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>

    );
};

export default Cart;


// test