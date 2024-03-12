import React from "react";
import { Col } from 'react-bootstrap';
import Style from './productsList.module.css'
import { Link } from "react-router-dom";

const useLatestProducts = ({ id, imageUrl, altText, title, actualPrice, currentPrice, link }) => {


    // Function to calculate discount percentage
    const calculateDiscountPercentage = () => {
        if (actualPrice === 0 || currentPrice === 0) {
            return 0; // Return 0 if either price is 0 to avoid division by zero
        }
        const discount = ((actualPrice - currentPrice) / actualPrice) * 100;
        return discount.toFixed(2); // Round to 2 decimal places
    };


    return (

        <Col key={id} xs={12} lg={3} >

            <Link to={link} className={Style.linkWrap}>

                <div className={Style.productWrap}>
                    <figure>
                        <img src={imageUrl} alt={title} />
                    </figure>
                    <div className={Style.ProductDetailsWrap}>
                        <span className={Style.productTitle}>{title}</span>
                        <div className={Style.PriceWrap}>
                            <span className={Style.CurrentPrice}> Rs. {currentPrice}</span>
                            <span className={Style.oldPrice}> Rs. {actualPrice}</span>
                            <span className={Style.discountPersantage}>Discount: {calculateDiscountPercentage()}%</span>
                        </div>
                    </div>

                </div>
            </Link>
        </Col>


    )
}

export default useLatestProducts;