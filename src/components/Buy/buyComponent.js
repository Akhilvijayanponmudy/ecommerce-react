import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'; // Importing useHistory here
import { Container, Row, Col } from "react-bootstrap";
import Style from './buy.module.css';
import axios from "axios";
import baseURL from '../../api/apiConfig';
import CheckoutTab from './CheckoutTab';
import getJWTtoken from '../../contexts/checkJWTexistance';
import JwtValidateExpiry from "../../contexts/jwtVlidationCheck";

const BuyComponent = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [totalPrice, settotalPrice] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [dataFromChild, setDataFromChild] = useState(null);
    // const history = useHistory(); // Initializing useHistory here
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            setIsLoading(true);
            try {
                const accessToken = getJWTtoken();
                if (accessToken) {
                    const url = `${baseURL}buy/${id}`;

                    if (id === 'cart') {
                        const url = `${baseURL}buy/id`;
                    }

                    const response = await axios.get(url,
                        // const response = await axios.get(`${baseURL}buy/${id}`,
                        {
                            headers: {
                                Authorization: `Bearer ${accessToken}`,
                            },
                        });
                    const validation = JwtValidateExpiry(response);
                    if (validation === false) {
                        navigate('/login');
                    } else if (validation === true) {
                        setProduct(response.data.product);
                        settotalPrice(response.data.totalPrice)
                    }
                } else {
                    navigate('/login');
                }


            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (isLoading) {
        return <div>Loading product details...</div>;
    }

    if (error) {
        return <div>Error fetching product: {error.message}</div>;
    }
    if (!product) {
        return <div>Product not found with ID: {id}</div>;
    }
    const handleDataFromChild = (data) => {
        setDataFromChild(data);
    };


    const handleBye = async (id) => {
        console.log(dataFromChild);
        if (dataFromChild) {
            navigate('/payment', { state: { 'totalPrice': totalPrice, 'address': dataFromChild, 'state': id } });
        }
    }

    if (Array.isArray(product)) {
        return (
            <section className={Style.BuyComponentComponent}>
                <Container>
                    <Row>
                        <Col xs={12} lg={7}>
                            <CheckoutTab sendDataToParent={handleDataFromChild} />
                        </Col>
                        <Col xs={12} lg={5}>
                            {product.map((product, index) => {
                                return (
                                    <div key={index} className={Style.buyItemdetails}>
                                        <figure>
                                            <img src={`${baseURL}uploads/${product.primaryImage}`} alt={product.productName} />
                                        </figure>
                                        <p>{product.productName}</p>
                                        <div>
                                            <p>Price: {product.productCurrentPrice}</p>
                                            <p>Quantity: {product.productQuantity}</p>
                                            <p>Total: {product.productTotalCost}</p>

                                        </div>
                                    </div>
                                );
                            })}
                            <h5>Total : Rs. {totalPrice}</h5>
                        </Col>
                    </Row>
                    <button onClick={() => handleBye('cart')}>Buy Now</button>
                </Container>
            </section>
        );
    } else if (typeof product === 'object') {
        return (
            <section className={Style.BuyComponentComponent}>
                <Container>
                    <Row>
                        <Col xs={12} lg={7}>
                            <CheckoutTab sendDataToParent={handleDataFromChild} />
                        </Col>
                        <Col xs={12} lg={5}>
                            <div className={Style.buyItemdetails}>
                                <figure>
                                    <img src={`${baseURL}uploads/${product.primaryImage}`} alt={product.productName} />
                                </figure>
                                <p>{product.productName}</p>
                                <div>
                                    <p>Price: {product.productCurrentPrice}</p>
                                    <p>Quantity: 1</p>
                                    <p>Total: {product.productCurrentPrice}</p>

                                </div>
                            </div>
                            <h5>Total : Rs. {totalPrice}</h5>
                        </Col>
                    </Row>
                    <button onClick={() => handleBye(product._id)}>Buy Now</button>
                </Container>
            </section>
        );
    } else {
        // Handle invalid data
        return <div>No products found</div>;
    }


}

export default BuyComponent;
