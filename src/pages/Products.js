import React, { useState, useEffect } from 'react';
import ProductsList from "../components/productsList/productsList";
import baseURL from '../api/apiConfig';
import Header from '../utlis/header';

function Products() {
    const [products, setProducts] = useState([]); // Initialize empty products state
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const [error, setError] = useState(null); // Handle potential errors

    const productsUrl = 'products'; // Replace if your products endpoint has a different path

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); // Set loading state to true
            setError(null); // Clear any previous errors

            try {
                const response = await fetch(`${baseURL}${productsUrl}`);

                if (!response.ok) { // Check for successful response
                    throw new Error(`Failed to fetch products: ${response.statusText}`);
                }

                const data = await response.json(); // Parse JSON response
                setProducts(data); // Update products state
            } catch (err) {
                setError(err.message); // Set error state
            } finally {
                setIsLoading(false); // Set loading state to false after fetching or error
            }
        };

        fetchData();
    }, []); // Empty dependency array to fetch data only once on component mount
    console.log(products.products);

    // {!isLoading && !error && <ProductsList products={products} />}
    return (
        <div>
            <Header />
            {isLoading && <p>Loading products...</p>}
            {error && <p>Error: {error}</p>}
             {!isLoading && !error && <ProductsList props={products.products} />}

        </div>
    );
}

export default Products;
