import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from './categoriesComponent.module.css'
import { Link } from "react-router-dom";



const categoriesComponent = () => {

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


    return (
        <section className={styles.homeCategoriesSection}>
            <Container>
                <Row>
                    <span className="h1 t-cen pb-5"> Explore With Categories</span>

                    <div className={styles.iconWrap}>
                        {/* <span className="h1"> Explore With Categories</span> */}
                        {categoryArr.map((category) => (
                            <Link to="#"  key={category.id} className={styles.catLink}>
                                <div className={styles.iconFullWrap}>

                                    <figure><img src={category.imgUrl} alt="" /></figure>
                                </div>
                                <span className="pt-2">{category.title}</span>
                            </Link>

                        ))}
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default categoriesComponent;