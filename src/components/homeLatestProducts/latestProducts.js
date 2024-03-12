import React from "react";
import { Container, Row } from 'react-bootstrap';
import styles from "./latestProducts.module.css";
import ProductCard from "./useLatestProducts";
const LatestProducts = (props) => {
    console.log(props.props);
    if (!props.props) {
        console.error("Invalid props:", props);
        return null; // or return an error message, loading indicator, or handle it appropriately
    }

    if (!Array.isArray(props.props)) {
        console.error("Invalid productsArr in props:", props);
        return null; // or return an error message, loading indicator, or handle it appropriately
    }
    return (
        <div className={styles.latestProductWrap}>
            <Container>
                <h2>Latest Products</h2>

                <Row>
                    {props.props.map(product => (
                        <ProductCard key={product._id} {...product} />
                    ))}

                </Row>
            </Container>

        </div>
    );
};

export default LatestProducts;