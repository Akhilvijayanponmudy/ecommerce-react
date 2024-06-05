import React from 'react';
import Header from "../utlis/headerLatest";
import ProductListOnCategories from '../components/productListOnCategories/productListOnCategories'
import { useParams } from 'react-router-dom'; 


function CatProducts() {
    const { id } = useParams();

    return (
        <div>
            <Header />
            <ProductListOnCategories  catId={id} />
        </div>
    );
}

export default CatProducts;
