import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./latestProducts.module.css";
const LatestProducts = () => {
    return (
        <div className={styles.latestProductWrap}>
            <Container>
                <h2>Latest Products</h2>

                <Row>

                    <Col xs={12} lg={4} >
                        <div className={styles.card}>
                            <figure className="mb-0">
                                <img src="/images/product.webp" alt="produt" />
                            </figure>

                            <div className={styles.linkWrap}>
                                <a href='/'>
                                    <h4 className="mb-0">Product Name </h4>
                                    <h5 className="mb-0">Rs. 500.00</h5>
                                </a>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} lg={4} >
                        <div className={styles.card}>
                            <figure className="mb-0">
                                <img src="/images/product.webp" alt="produt" />
                            </figure>

                            <div className={styles.linkWrap}>
                                <a href='/'>
                                    <h4 className="mb-0">Product Name </h4>
                                    <h5 className="mb-0">Rs. 500.00</h5>
                                </a>
                            </div>
                        </div>
                    </Col>


                </Row>
            </Container>

        </div>
    );
};

export default LatestProducts;
