// import React, { useState, useEffect } from 'react';
import React from 'react';
import Header from "../utlis/headerLatest";

// import axios from 'axios';
// import baseURL from '../api/apiConfig'; // Import the base URL

function About() {
//     const [data, setData] = useState(null);
//     useEffect(() => {
//         // Make a GET request to fetch data for the home page from the backend
// console.log(data);
//         axios.get(baseURL + 'about/')
//             .then(response => {
//                 setData(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

    return (
        <div>
            <Header />

            <h1>About Page</h1>
        </div>
    )
}
export default About;
