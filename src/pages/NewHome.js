// import React, { useState, useEffect } from 'react';
import React from 'react';

import HeaderLatest from "../utlis/headerLatest";
import HomehotDealBanner from "../components/homeHotDeal/homeHotDeal";
import HomeOfferListing from '../components/homeOfferListing/homeOfferListing'
import ProductCard from '../components/productCard/productCard'

function NewHome() {

    return (
        <div>
            <HeaderLatest />
            <HomehotDealBanner />
            <HomeOfferListing />
            <ProductCard />
        </div>
    )
}
export default NewHome;
