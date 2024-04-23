import React from "react";
import { Col, Row } from "react-bootstrap";
import Style from "./useOrders.module.css"
import axios from "axios";
import getJWTtoken from "../../contexts/checkJWTexistance";

const UseOrders = ({ id, orderID, productName, productActualPrice, paymentMethod, shippingAddressData, orderdDate, orderQuandity, productImage }) => {

    const apiImageUrl = process.env.REACT_APP_API_IMAGE_URL;
    const apiUrl = process.env.REACT_APP_API_URL;
    let data = '';
    if (orderQuandity === 1) {
        data = (
            <div className="">
                <p className="">Product Price : ${productActualPrice}</p>
                <p className="">Product Quandity : {orderQuandity}</p>
            </div>
        );

    } else {
        const totalPrice = orderQuandity * productActualPrice;
        data = (
            <div className={Style.d_flex}>
                <p className=""> <b>Product Price :</b> Rs. {productActualPrice}</p>
                <p className=""> <b>Product Quandity : </b>{orderQuandity}</p>
                <p className=""> <b>Total Price : </b>Rs. {totalPrice}</p>
            </div>
        );
    }

    const cancelOrder = (orderID) => {
        console.log(orderID);
        const accessToken = getJWTtoken();
        if (orderID) {
            try {
                const response = axios.get(`${apiUrl}orders/cancel/${orderID}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                if(response){
                // window.location.reload();
                console.log(response.data);

                }

            } catch (error) {
                console.log(error);
            }
        }

    }
    console.log(orderID);

    return (
        <Row>
            <Col xs={12} lg={8} >

                <div id={`orders_${id}`} className={Style.orderDetails}>
                    <p className=""> <b>Product Name :</b> {productName}</p>
                    <p className=""><b>Product payment Method :</b> {paymentMethod}</p>
                    <p className=""><b>Shipping Address :</b> {shippingAddressData}</p>
                    <p className=""><b>Ordered Date :</b> {orderdDate}</p>
                    {data}
                    <button className="bg-danger orderCancel" onClick={() => cancelOrder(orderID)}>Cancel Order</button>

                </div>
            </Col>
            <Col xs={12} lg={4}>
                <figure className={Style.orderProductImg}>
                    <img src={apiImageUrl + productImage} alt="" />
                </figure>
            </Col>
        </Row>
    );
}

export default UseOrders;
