import React, { useState, useEffect } from 'react';
import Header from "../utlis/header";
import axios from 'axios';
import baseURL from '../api/apiConfig';
import HomeBanner from "../components/homeBanner/Banner";
import HomeCategories from "../components/homeCategories/HomeCategories";
import LatestProducts from "../components/homeLatestProducts/latestProducts";

function Home() {
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState([]); // Separate state for categories
  const [products, setProducts] = useState([]); // Separate state for products

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL);
        setData(response.data); // Store entire response for potential future use

        // Extract categories and products from response (check if they exist)
        if (response.data && response.data.categoryArr && response.data.productArr) {
          const { categoryArr, productArr } = response.data;
          setCategories(categoryArr);
          setProducts(productArr);
        } else {
          console.warn('Data structure might have changed. Missing categoryArr or productArr in response.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Fetch data on component mount
  }, []); // Empty dependency array to fetch data only once

console.log(categories);

  return (
    <div>
      <Header />
      <HomeBanner />
      <HomeCategories props={categories} />
      <LatestProducts />
    </div>
  );
}

export default Home;
