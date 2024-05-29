// import React, { useState, useEffect } from 'react';
import React from 'react';

import HeaderLatest from "../utlis/headerLatest";
import HomehotDealBanner from "../components/homeHotDeal/homeHotDeal";
import HomeOfferListing from '../components/homeOfferListing/homeOfferListing';
import ProductCard from '../components/productCard/productCard';
import Categories from '../components/categories/categoriesComponent';
import OfferCards from '../components/offerCards/offerCards'
import TodaysDeals from '../components/todaysDeals/todaysDeals' 

function NewHome() {

    return (
        <div>
            <HeaderLatest />
            <HomehotDealBanner />
            <HomeOfferListing />
            <Categories />
            <OfferCards />
            <ProductCard />
            <TodaysDeals />
            
        </div>
    )
}
export default NewHome;
