import React from 'react';
import { useLocation } from 'react-router-dom';
import {  Button } from "react-bootstrap";
import axios from 'axios';
import baseURL from '../../api/apiConfig';

function PaymentComponent() {
    const location = useLocation();
    const { totalPrice, address } = location.state || {};

    const PaymentSubmission= async()=>{

        const response=await axios.post(`${baseURL}buy/payment`)

    }
    const cashOnDelivery= async()=>{

    }

    return (
        <div>
            <h5>Total Price: {totalPrice}</h5>
            <input type="text" placeholder="Enter Account Number" />
            <Button variant="primary" onClick={()=>PaymentSubmission()}> Pay </Button>
            <Button variant="secondary" onClick={()=>cashOnDelivery()}> Cash On Delivery </Button>
        </div>
    );
}

export default PaymentComponent;
