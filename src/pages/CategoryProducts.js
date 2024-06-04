import React from 'react';
import Header from "../utlis/headerLatest";
import ProductCard from '../components/productCard/productCard'
import { useParams } from 'react-router-dom'; 


function CatProducts() {
    const { id } = useParams();

    return (
        <div>
            <Header />
            <ProductCard count={2} catId={id} />
        </div>
    );
}

export default CatProducts;
