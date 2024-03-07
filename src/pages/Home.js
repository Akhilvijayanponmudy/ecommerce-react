import React, { useState, useEffect } from 'react';
import Header from "../utlis/header";
import axios from 'axios';
import baseURL from '../api/apiConfig';
import HomeBanner from "../components/homeBanner/Banner";
import HomeCategories from "../components/homeCategories/HomeCategories";
import LatestProducts from "../components/homeLatestProducts/latestProducts"
function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Check if data is already available
        if (!data) {
            // Make a GET request to fetch data for the home page from the backend
            axios.get(baseURL).then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [data]); // Add data as a dependency
    return (
        <div>
            <Header />
            <HomeBanner props={data} />
            <HomeCategories props={data} />
            <LatestProducts />
        </div>
    );
}

export default Home;
