import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './useProductCard.module.css';

const useProductcard = ({ id, productName, productcat, Imgurl, altText, link, productCurrentPrice, productActualPrice }) => {
    return (
        <Col key={id} xs={6} lg={3} className={styles.cardWrap}>
            <Link to={link} className={styles.productCardLinkWrap}>
                <div className={styles.productCardWrap}>
                    <div className={styles.productBorder}>
                        <figure>
                            <img src={Imgurl} alt={altText} />
                        </figure>
                        <div className={styles.productDetails}>
                            <p className={styles.brandName}>{productcat}</p>
                            <p className={styles.productName}>{productName}</p>
                            <div className={styles.priceWrap}>
                                <span className={styles.currentPrice}>Rs.  {productCurrentPrice}</span>
                                <span className={styles.actualPrice}>Rs.  {productActualPrice}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </Col>
    )
}

export default useProductcard;