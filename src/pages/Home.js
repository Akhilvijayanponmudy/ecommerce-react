import React, { useState, useEffect } from 'react';
import Header from "../utlis/header";
import HomeBanner from "../components/Banner";
import axios from 'axios';
import baseURL from '../api/apiConfig';

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
        </div>
    );
}

export default Home;
