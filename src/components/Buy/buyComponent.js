import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from './buy.module.css';
import { useParams } from 'react-router-dom';
import axios from "axios";
import baseURL from '../../api/apiConfig';
import ProductCard from './useProducts';
import CheckoutTab from './CheckoutTab';
const BuyComponent = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const fetchProduct = async () => {
            setIsLoading(true);

            try {
                const response = await axios.get(`${baseURL}buy/${id}`)
                setProduct(response.data.product);
            } catch {
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

    // console.log(product);


    return (
        <section className={Style.BuyComponentComponent}>
            <Container>
                <Row>
                    <Col xs={12} lg={7}>
                        <CheckoutTab />
                    </Col>
                    <Col xs={12} lg={5}>

                        <div className={Style.buyItemdetails}>
                            <figure><img src={`${baseURL}uploads/${product.primaryImage}`} alt={product.productName} /></figure>
                            <p>{product.productName}</p>
                            <div>
                                <p>Price: {product.productCurrentPrice}</p>
                                <p>Quandity: 1</p>
                            </div>
                        </div>

                        <h5>Total : Rs. 12000</h5>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BuyComponent;