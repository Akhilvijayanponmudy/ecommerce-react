// import React, { useState, useEffect } from 'react';
import React from 'react';
import Header from "../utlis/header";
import BuyComponent from '../components/Buy/buyComponent';
import Address from '../components/buyAddress/BuyComponent';
function BuyPage() {

    return (
        <div>
            <Header /> 
            <Address /> 
            <BuyComponent />
        </div>
    )
}
export default BuyPage;
