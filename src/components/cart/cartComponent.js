import React, { useState } from "react";
import Style from './cart.module.css'
import { Container, Row, Col, Button } from "react-bootstrap";

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Galaxy S24 Ultra", img: '/images/product/s24.webp', price: 50000, quantity: 1 },
        { id: 2, name: "Galaxy Note 10", img: '/images/product/s20.jpg', price: 40000, quantity: 1 },
        { id: 3, name: "Galaxy A50", img: '/images/product/s22.jpg', price: 30000, quantity: 1 },
        { id: 4, name: "Galaxy A50", img: '/images/product/s22.jpg', price: 30000, quantity: 1 },
    ]);

    const increment = (id) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    const decrement = (id) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <section className={Style.cartSection}>
            <Container>
                <Row>


                    <table className={Style.cartListWrap}>
                        <tr>
                            <th>Product</th>
                            <th>Product Name</th>
                            <th>Product Quantity</th>
                            <th>Product Price</th>
                            <th> </th>
                        </tr>


                        {cartItems.map(item => (

                            <tr key={item.id}>
                                <td>
                                    <figure><img src={item.img} alt={item.name} /></figure>
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
                                    <span className={Style.ProductPrice}>Rs. {item.price * item.quantity}</span>
                                </td>
                                <td>
                                    <Button variant="danger">Remove</Button>

                                </td>
                            </tr>


                        ))}




                    </table>

                </Row>
                <Row>

                </Row>
                <div className={Style.priceSection}>
                    Total Price: Rs. {getTotalPrice()}

                    <div className={Style.buyBtnsec}>
                        <Button variant="success">Update Cart</Button>
                        <Button variant="primary">Buy</Button>
                    </div>
                </div>


            </Container>
        </section>
    );
};

export default Cart;
