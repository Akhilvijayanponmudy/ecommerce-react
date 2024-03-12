import React from "react";
import { Col } from 'react-bootstrap';
import styles from "./latestProducts.module.css";
import { Link } from "react-router-dom";



const LatestProductsCard = ({ id, imageUrl, title, price, link }) => {

    return (

        <Col key={id} xs={12} lg={3} >
            <Link to="/" className={styles.linkWrap}>
                <div className={styles.card}>
                    <div className="image ratio">
                        <figure className="mb-0">
                            <img src={imageUrl} alt={title} />
                        </figure>
                    </div>
                    <div >

                        <h4 className="mb-0">{title} </h4>
                        <h5 className="mb-0">Rs. {price}</h5>

                    </div>
                </div>
            </Link>
        </Col>
    );

};
export default LatestProductsCard;
