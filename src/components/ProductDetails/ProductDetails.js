import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Style from './ProductDetails.module.css';
import { Link } from "react-router-dom";

const ProductDetail = () => {
    const primaryImage = "/images/product/s24.webp";
    const secondaryImages = ["/images/product/s24.webp", "/images/product/s20.jpg", "/images/product/s22.jpg", "/images/product/s23.jpg"];

    const [currentImage, setCurrentImage] = useState(primaryImage);

    const handleSecondaryImageClick = (imageUrl) => {
        setCurrentImage(imageUrl);
    };

    return (
        <section className={Style.productDetailSection}>
            <Container>
                <Row className={Style.rowStyle}>
                    <Col xs={12} lg={6} >
                        <figure className={Style.PrimaryImage}>
                            <img src={currentImage} alt="" />
                        </figure>
                        <div className={Style.productImageGroupWrap}>
                            {secondaryImages.map((imageUrl, index) => (
                                <figure key={index} className={Style.secondaryImages}>
                                    <img
                                        src={imageUrl}
                                        alt=""
                                        onClick={() => handleSecondaryImageClick(imageUrl)}
                                    />
                                </figure>
                            ))}
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className={Style.ProductDetailsWrap}>
                        <span className={Style.ProductTitle}>Galaxy S24 Ultra</span>
                        <span className={Style.productDescription}>Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 512GB Storage) </span>

                        <div className={Style.PriceWrap}>
                            <span className={Style.CurrentPrice}> Rs. 88999</span>
                            <span className={Style.oldPrice}> Rs. 112000</span>
                            <span className={Style.discountPersantage}>50% off</span>
                        </div>

                        <div className={Style.productBtnWrap}>
                        <Link to="/" className={Style.cartBtn}>Add to Cart</Link>
                        <Link to="/" className={Style.buyBtn}>Buy Now</Link>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProductDetail;
