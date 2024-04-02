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
    const PaymentSubmission = async () => {

        const accessToken = getJWTtoken();
        const response = await axios.post(`${baseURL}buy/payment`,
            { paymentId: 'test-id', amount: totalPrice, address: address, state: state },
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
    const cashOnDelivery = async () => {

    }

    return (
        <div>
            <h5>Total Price: {totalPrice}</h5>
            <input type="text" placeholder="Enter Account Number" />
            <Button variant="primary" onClick={() => PaymentSubmission()}> Pay </Button>
            <Button variant="secondary" onClick={() => cashOnDelivery()}> Cash On Delivery </Button>
        </div>
    );
}

export default PaymentComponent;
