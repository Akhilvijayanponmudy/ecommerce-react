// import React, { useState, useEffect } from 'react';
import React from 'react';
import { useLocation } from 'react-router-dom';

import HeaderLatest from "../utlis/headerLatest";
import HomehotDealBanner from "../components/homeHotDeal/homeHotDeal";
import HomeOfferListing from '../components/homeOfferListing/homeOfferListing'

function NewHome() {

    return (
        <div>
            <HeaderLatest />
            <HomehotDealBanner />
            <HomeOfferListing />
        </div>
    )
}
export default NewHome;
