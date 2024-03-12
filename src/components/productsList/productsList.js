import React from "react";
import UseProductList from './useProductsList';
import { Container, Row } from 'react-bootstrap';


function ProductList({ props }) {
    if (!props || props.length === 0) {
        return <p>No products found.</p>;
    }

    // const products = [
    //     {
    //         id: 1, // Unique identifier for each product
    //         imageUrl: "/images/product.webp", // Image URL
    //         altText: "Product 1", // Image alt text
    //         title: "Product Name 1", // Product title
    //         actualPrice: 500.00, // Product price
    //         currentPrice: 400.00, // Product price
    //         link: "/" // Product link (optional)
    //     },
    //     {
    //         id: 2,
    //         imageUrl: "/images/product2.webp",
    //         altText: "Product 2",
    //         title: "Product Name 2",
    //         actualPrice: 799.99,
    //         currentPrice: 599.99,
    //         link: "/product-2"
    //     },
    //     {
    //         id: 3, // Unique identifier for each product
    //         imageUrl: "/images/product.webp", // Image URL
    //         altText: "Product 3", // Image alt text
    //         title: "Product Name 3", // Product title
    //         actualPrice: 600.00, // Product price
    //         currentPrice: 300.00, // Product price
    //         link: "/" // Product link (optional)
    //     },
    //     {
    //         id: 4,
    //         imageUrl: "/images/product.webp",
    //         altText: "Product 4",
    //         title: "Product Name 4",
    //         actualPrice: 7999.99,
    //         currentPrice: 799.99,
    //         link: "/product-4"
    //     },
    //     {
    //         id: 5, // Unique identifier for each product
    //         imageUrl: "/images/product2.webp", // Image URL
    //         altText: "Product 5", // Image alt text
    //         title: "Product Name 5", // Product title
    //         actualPrice: 5000.00, // Product price
    //         currentPrice: 500.00, // Product price
    //         link: "/" // Product link (optional)
    //     },
    //     {
    //         id: 6,
    //         imageUrl: "/images/product2.webp",
    //         altText: "Product 6",
    //         title: "Product Name 6",
    //         actualPrice: 609.99,
    //         currentPrice: 69.99,
    //         link: "/product-6"
    //     },
    //     {
    //         id: 7, // Unique identifier for each product
    //         imageUrl: "/images/product.webp", // Image URL
    //         altText: "Product 7", // Image alt text
    //         title: "Product Name 7", // Product title
    //         actualPrice: 3000.00, // Product price
    //         currentPrice: 1500.00, // Product price
    //         link: "/" // Product link (optional)
    //     },
    //     {
    //         id: 8,
    //         imageUrl: "/images/product.webp",
    //         altText: "Product 6",
    //         title: "Product Name 6",
    //         actualPrice: 7999.99,
    //         currentPrice: 699.99,
    //         link: "/product-6"
    //     },
    // ];
console.log(props);
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