import React, { useState, useEffect } from 'react';
import ProductsList from "../components/productsList/productsList";
import baseURL from '../api/apiConfig';
import Header from '../utlis/header';

function CatProducts() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(`${baseURL}products/category/${id}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch products: ${response.statusText}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <Header />
            {isLoading && <p>Loading products...</p>}
            {error && <p>Error: {error}</p>}
            {!isLoading && !error && <ProductsList props={products.products} />}

        </div>
    );
}

export default CatProducts;
