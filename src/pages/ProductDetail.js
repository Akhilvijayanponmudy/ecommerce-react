import React, { useState, useEffect } from 'react';
import Header from "../utlis/header";
import ProductDetail from "../components/ProductDetails/ProductDetails"
import { useParams } from 'react-router-dom';
import baseURL from '../api/apiConfig';



function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${baseURL}products/detail/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const productData = await response.json();
                // console.log(productData);
                // const productArray = productData[0];
                setProduct(productData);


            } catch (error) {
                console.log(error);
            }
        }

        fetchProduct();
        // Clean up function for useEffect
        return () => {
            // Any cleanup code here (if needed)
        };
    }, [id]);
    return (
        <div>
            <Header />
            <ProductDetail props={product}/>
            
        </div>
    )
}
export default ProductDetails;