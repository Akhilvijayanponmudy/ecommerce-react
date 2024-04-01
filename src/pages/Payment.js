// import React, { useState, useEffect } from 'react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from "../utlis/header";
import PaymentComponent from '../components/payment/paymentComponent';

function Payment() {

    return (
        <div>
            <Header />
            <h1>Payment Page</h1>
            <PaymentComponent />
        </div>
    )
}
export default Payment;
