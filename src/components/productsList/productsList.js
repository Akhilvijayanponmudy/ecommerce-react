import React from "react";
import UseProductList from './useProductsList';
import { Container, Row } from 'react-bootstrap';


function ProductList({ props }) {
    if (!props || props.length === 0) {
        return <p>No products found.</p>;
    }

    return (
        <Container>
            <h1>ProductsList Component</h1>
            <Row>
                {props.map(product => (
                    <UseProductList key={product.id} {...product} />
                ))}
            </Row>
        </Container>
    )
}

export default ProductList;