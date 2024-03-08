import React from "react";
import { Col } from 'react-bootstrap';
import styles from "./latestProducts.module.css";



const LatestProductsCard = ({ id, imageUrl, title, price, link }) => {

    return (
        <Col key={id} xs={12} lg={4} >
            <div className={styles.card}>
                <div className="image ratio">
                    <figure className="mb-0">
                        <img src={imageUrl} alt={title} />
                    </figure>
                </div>
                <div className={styles.linkWrap}>
                    <a href='/'>
                        <h4 className="mb-0">{title} </h4>
                        <h5 className="mb-0">Rs. {price}</h5>
                    </a>
                </div>
            </div>
        </Col>
    );

};
export default LatestProductsCard;
