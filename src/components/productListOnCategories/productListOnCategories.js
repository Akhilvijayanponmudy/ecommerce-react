import React, { useState, useEffect } from "react";
import axios from 'axios';
import style from './productListOn Categories.module.css'
import { Container, Row } from "react-bootstrap";
import UseProductcard from '../productCard/useProductCard'
const baseURL = process.env.REACT_APP_API_URL;


const ProductListOnCategories = ({catId}) => {

    const apiUrl = baseURL + `products/category/${catId}`;

    const [productArray, setProductArray] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(apiUrl)
            .then(response => {
                setProductArray(response.data.productArr);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(true);
                setIsLoading(false);
            });
    }, [apiUrl]);


    if (isLoading) {
        return <div>LoadingProducts</div>;
    }
    if (error) {
        return <div>Error fetching product: {error.message}</div>;
    }


    return (
        <section className={style.prodcutSection}>
            <Container>
                <Row>
                    {productArray.map((prodcuct) => (
                        <UseProductcard key={prodcuct.id} {...prodcuct} />
                    ))}
                </Row>
            </Container>
        </section>
    );

}
export default ProductListOnCategories;