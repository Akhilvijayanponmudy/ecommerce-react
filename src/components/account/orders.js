import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import baseURL from "../../api/apiConfig";
import getJWTtoken from "../../contexts/checkJWTexistance";
import { useNavigate } from 'react-router-dom';
import JwtValidateExpiry from "../../contexts/jwtVlidationCheck";
import UseOrders from "./useOrders";

const Orders = () => {
    const navigate = useNavigate();
    const accessToken = getJWTtoken();
    const [OrdersArr, setOrdersArr] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (accessToken) {
            setIsLoading(true);
            const fetchAddress = async () => {
                try {
                    const response = await axios.get(`${baseURL}orders`, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    })
                    const validation = JwtValidateExpiry(response);
                    if (validation === false) {
                        navigate('/login');
                    } else if (validation === true) {
                        const ordersRecArr = response.data.ordersArr;
                        setOrdersArr(ordersRecArr);
                    }

                } catch (error) {
                    console.log(error);
                    setError(error);
                } finally {
                    setIsLoading(false);
                }
            }
            fetchAddress();
        } else {
            navigate('/login');
        }
    }, []);
    if (isLoading) {
        return <div>Loading Addresses</div>;
    }
    if (error) {
        return <div>Error fetching product: {error.message}</div>;
    }

    return (
        <div>
            <p>Active Orders</p>
            {
                OrdersArr.map((orders, index) => {
                    const { orderID, productName, productActualPrice, paymentMethod, shippingAddress, orderdDate, orderQuandity, productImage } = orders;
                    const date = new Date(orderdDate);
                    const options = { month: 'short', day: '2-digit', year: 'numeric' };
                    const formattedDate = date.toLocaleDateString('en-US', options);
                    return (
                        <UseOrders
                            id={index}
                            orderID={orderID}
                            productName={productName}
                            productActualPrice={productActualPrice}
                            paymentMethod={paymentMethod}
                            shippingAddressData={shippingAddress}
                            orderdDate={formattedDate}
                            orderQuandity={orderQuandity}
                            productImage={productImage}
                        />
                    )
                })
            }
        </div>
    )
}

export default Orders