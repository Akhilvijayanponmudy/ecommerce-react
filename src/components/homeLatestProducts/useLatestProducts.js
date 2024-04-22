import React from 'react';
import { Col } from 'react-bootstrap';
import styles from "./latestProducts.module.css";
import { Link  } from "react-router-dom";


const ProductCard = ({ _id, productName, primaryImage,productActualPrice ,productCurrentPrice}) => {
console.log(_id);
// detail/${_id}
    return (
        <Col xs={12} lg={3} >
            <Link to={`detail/${_id}`}>
            <div className={styles.card}>
                <figure className="mb-0">
                    <img src={primaryImage} alt={productName} />
                </figure>

                <div className={styles.linkWrap}>
                        <h4 className="mb-0"> {productName } </h4>
                        <div className='style.priceWrap'>
                        <h5 className="mb-0">Rs. {productActualPrice}</h5>
                        <h5 className="mb-0">Rs. {productCurrentPrice}</h5>
                        </div>
                </div>
            </div>
            </Link>
        </Col>
    );
}


export default ProductCard;