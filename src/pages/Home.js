import React, { useState, useEffect } from 'react';
import Header from "../utlis/header";
import axios from 'axios';
import baseURL from '../api/apiConfig';
import HomeBanner from "../components/homeBanner/Banner";
import HomeCategories from "../components/homeCategories/HomeCategories";
import LatestProducts from "../components/homeLatestProducts/latestProducts";

function Home() {
  const [data] = useState(null);
  const [categories, setCategories] = useState([]); // Separate state for categories
  const [products, setProducts] = useState([]); // Separate state for products

  useEffect(() => {
    
    if (!data) {
      axios.get(baseURL).then(response => {
          setCategories(response.data.categoryArr);
          setProducts(response.data.productArr);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [data]); 

  return (
    <div>
      <Header />
      <HomeBanner />
      <HomeCategories props={categories} />
      <LatestProducts props={products} />
    </div>
  );
}

export default Home;
