// import React, { useState, useEffect } from 'react';
import React from 'react';

import HeaderLatest from "../utlis/headerLatest";
import HomehotDealBanner from "../components/homeHotDeal/homeHotDeal";
import HomeOfferListing from '../components/homeOfferListing/homeOfferListing';
import ProductCard from '../components/productCard/productCard';
import Categories from '../components/categories/categoriesComponent'

function NewHome() {

    return (
        <div>
            <HeaderLatest />
            <HomehotDealBanner />
            <HomeOfferListing />
            <Categories />
            <ProductCard />
        </div>
    )
}
export default NewHome;
