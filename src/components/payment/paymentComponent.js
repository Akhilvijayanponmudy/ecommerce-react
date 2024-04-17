import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";
import axios from 'axios';
import baseURL from '../../api/apiConfig';
import getJWTtoken from '../../contexts/checkJWTexistance';
import JwtValidateExpiry from '../../contexts/jwtVlidationCheck';

function PaymentComponent() {
    const location = useLocation();
    const navigate = useNavigate();

    const { totalPrice, address, state } = location.state || {};
    const PaymentSubmission = async (paymentMethod) => {
console.log(paymentMethod);
        const accessToken = getJWTtoken();
        const response = await axios.post(`${baseURL}buy/payment`,
            { paymentId: 'test-id', productAmount: totalPrice, address: address, state: state, paymentMethod:paymentMethod },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        const validation = JwtValidateExpiry(response);
        if (validation === false) {
            navigate('/login');
        }
        console.log(response.status);
        if (response.status === 200) {
            navigate('/account');
        } else {
            navigate('/');
        }
    }
    // const cashOnDelivery = async () => {

    // }

    return (
        <div>
            <h5>Total Price: {totalPrice}</h5>
            <input type="text" placeholder="Enter Account Number" />
            <Button variant="primary" onClick={() => PaymentSubmission('prepaid')}> Pay </Button>
            <Button variant="secondary" onClick={() => PaymentSubmission('cod')}> Cash On Delivery </Button>
        </div>
    );
}

export default PaymentComponent;