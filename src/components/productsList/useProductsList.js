import React from "react";
import { Col } from 'react-bootstrap';
import Style from './productsList.module.css'
import { Link } from "react-router-dom";
import baseURL from "../../api/apiConfig";
const useProductList = ({ _id, productName,productActualPrice,productCurrentPrice, primaryImage}) => {

    console.log(_id);

    // Function to calculate discount percentage
    const calculateDiscountPercentage = () => {
        if (productActualPrice === 0 || productCurrentPrice === 0) {
            return 0; // Return 0 if either price is 0 to avoid division by zero
        }
        const discount = ((productActualPrice - productCurrentPrice) / productActualPrice) * 100;
        return discount.toFixed(2); // Round to 2 decimal places
    };
    const imgUrl=baseURL+`uploads/`+primaryImage;
    return (

        <Col key={_id} xs={12} lg={3} >

            <Link to={'/'} className={Style.linkWrap}>

                <div className={Style.productWrap}>
                    <figure>
                        <img src={imgUrl} alt={productName} />
                    </figure>
                    <div className={Style.ProductDetailsWrap}>
                        <span className={Style.productTitle}>{productName}</span>
                        <div className={Style.PriceWrap}>
                            <span className={Style.CurrentPrice}> Rs. {productCurrentPrice}</span>
                            <span className={Style.oldPrice}> Rs. {productActualPrice}</span>
                            <span className={Style.discountPersantage}>{calculateDiscountPercentage()} off</span>
                        </div>
                    </div>

                </div>
            </Link>
        </Col>


    )
}

export default useProductList;