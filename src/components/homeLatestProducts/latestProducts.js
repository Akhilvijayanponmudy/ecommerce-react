import React from "react";
import { Container, Row } from 'react-bootstrap';
import styles from "./latestProducts.module.css";
import LatestProductsCard from "./useLatestProducts"

const LatestProducts = () => {
    const products = [
        {
            id: 1, // Unique identifier for each product
            imageUrl: "/images/product.webp", // Image URL
            altText: "Product 1", // Image alt text
            title: "Product Name 1", // Product title
            price: 500.00, // Product price
            link: "/" // Product link (optional)
        },
        {
            id: 2,
            imageUrl: "/images/product2.webp",
            altText: "Product 2",
            title: "Product Name 2",
            price: 799.99,
            link: "/product-2"
        },
        {
            id: 3, // Unique identifier for each product
            imageUrl: "/images/product.webp", // Image URL
            altText: "Product 3", // Image alt text
            title: "Product Name 3", // Product title
            price: 500.00, // Product price
            link: "/" // Product link (optional)
        },
        {
            id: 4,
            imageUrl: "/images/product.webp",
            altText: "Product 4",
            title: "Product Name 4",
            price: 799.99,
            link: "/product-4"
        },
        {
            id: 5, // Unique identifier for each product
            imageUrl: "/images/product2.webp", // Image URL
            altText: "Product 5", // Image alt text
            title: "Product Name 5", // Product title
            price: 500.00, // Product price
            link: "/" // Product link (optional)
        },
        {
            id: 6,
            imageUrl: "/images/product2.webp",
            altText: "Product 6",
            title: "Product Name 6",
            price: 799.99,
            link: "/product-6"
        },
        {
            id: 7, // Unique identifier for each product
            imageUrl: "/images/product.webp", // Image URL
            altText: "Product 7", // Image alt text
            title: "Product Name 7", // Product title
            price: 500.00, // Product price
            link: "/" // Product link (optional)
        },
        {
            id: 8,
            imageUrl: "/images/product.webp",
            altText: "Product 6",
            title: "Product Name 6",
            price: 799.99,
            link: "/product-6"
        },
    ];
    return (
        <div className={styles.latestProductWrap}>
            <Container>
                <h2>Latest Products</h2>
                <Row className={styles.productRow}>
                    {products.map(product => (
                        <LatestProductsCard key={product.id} {...product} />
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default LatestProducts;
