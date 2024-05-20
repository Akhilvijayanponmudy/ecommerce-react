import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './useProductCard.module.css'

const useProductcard = ({ id, productName, productcat, Imgurl, altText, link }) => {
    return (
        <Col key={id} xs={6} lg={3} className={styles.cardWrap}>
            <Link to={link}>
                <div className={styles.productCardWrap}>
                    <div className={styles.productBorder}>
                        <figure>
                            <img src={Imgurl} alt={altText} />
                        </figure>
                        <div className={styles.productDetails}>
                            <p className={styles.brandName}>{productcat}</p>
                            <p className={styles.productName}>{productName}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </Col>
    )
}

export default useProductcard;