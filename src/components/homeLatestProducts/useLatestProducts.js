import React from 'react';
import { Col } from 'react-bootstrap';
import styles from "./latestProducts.module.css";


const ProductCard = ({ _id, productName, primaryImage,productActualPrice ,productCurrentPrice}) => {


    return (
        <Col xs={12} lg={4} >
            <div className={styles.card}>
                <figure className="mb-0">
                    <img src={primaryImage} alt={productName} />
                </figure>

                <div className={styles.linkWrap}>
                    <a href='/'>
                        <h4 className="mb-0"> {productName } </h4>
                        <div className='style.priceWrap'>
                        <h5 className="mb-0">Rs. {productActualPrice}</h5>
                        <h5 className="mb-0">Rs. {productCurrentPrice}</h5>
                        </div>
                       
                    </a>
                </div>
            </div>
        </Col>
    );
}


export default ProductCard;
