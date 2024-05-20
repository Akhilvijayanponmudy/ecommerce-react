import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './useProductCard.module.css'

const useProductcard = ({ id, productName, productcat, Imgurl, altText, link }) => {
    return (
        <Col key={id} xs={4} lg={2} i>
            <Link to={link}>
                <div className={styles.productCardWrap}>
                    <figure>
                        <img src={Imgurl} alt={altText} />
                    </figure>
                    <div className="productDetails">
                        <span>{productcat}</span>
                        <span>{productName}</span>
                    </div>
                </div>
            </Link>
        </Col>
    )
}

export default useProductcard;