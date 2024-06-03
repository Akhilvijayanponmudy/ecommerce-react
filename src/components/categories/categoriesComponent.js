import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import styles from './categoriesComponent.module.css'
import { Link } from "react-router-dom";
import axios from 'axios';
const baseURL = process.env.REACT_APP_API_URL;



const CategoriesComponent = () => {

    const categoryArr = [
        {
            id: 1,
            title: 'Category',
            imgUrl: '/images/home/catIcon.svg',

        },
        {
            id: 2,
            title: 'Category',
            imgUrl: '/images/home/catIcon.svg',

        },
        {
            id: 3,
            title: 'Category',
            imgUrl: '/images/home/catIcon.svg',

        },
        {
            id: 4,
            title: 'Category',
            imgUrl: '/images/home/catIcon.svg',

        },
        {
            id: 5,
            title: 'Category',
            imgUrl: '/images/home/catIcon.svg',

        },
        {
            id: 6,
            title: 'Category',
            imgUrl: '/images/home/catIcon.svg',

        },
        {
            id: 7,
            title: 'Category',
            imgUrl: '/images/home/catIcon.svg',

        },
        {
            id: 8,
            title: 'Category',
            imgUrl: '/images/home/catIcon.svg',

        },
        {
            id: 9,
            title: 'Category',
            imgUrl: '/images/home/catIcon.svg',

        },

    ];

    const apiUrl = baseURL + 'product-categories';
    const [categoryArray, setcategoryArray] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(apiUrl)
            .then(response => {
                setcategoryArray(response.data.categoryArr);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(true);
                setIsLoading(false);
            });
    }, [apiUrl]);

    if (isLoading) {
        return <div>Loading Categories</div>;
    }
    if (error) {
        return <div>Error fetching product: {error.message}</div>;
    }
    return (
        <section className={styles.homeCategoriesSection}>
            <Container>
                <Row>
                    <span className="h1 t-cen pb-5"> Explore With Categories</span>

                    <div className={styles.iconWrap}>
                        {categoryArray.map((category) => (
                            <Link to={`category-products/${category.id}`} className={styles.catLink}>
                                <div className={styles.iconFullWrap}>

                                    <figure><img src={category.categoryImg} alt="" /></figure>
                                </div>
                                <span className="pt-2">{category.categoryName}</span>
                            </Link>

                        ))}
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default CategoriesComponent;