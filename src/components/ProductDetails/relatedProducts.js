import React from "react";
import { Container } from 'react-bootstrap';
import SwiperCarouselSildes from './useRelatedProductsSwiper';
import Style from './relatedProducts.module.css'

const RelatedProducts = () => {


    const slides = [
        { imageUrl: '/images/product/s20.jpg', caption: 'Galaxy S24 Ultra', Rate: '899999' },
        { imageUrl: '/images/product/s22.jpg', caption: 'Galaxy S24 Ultra', Rate: '899999' },
        { imageUrl: '/images/product/s23.jpg', caption: 'Galaxy S24 Ultra', Rate: '899999' },
        { imageUrl: '/images/product/s24.webp', caption: 'Galaxy S24 Ultra', Rate: '899999' },

    ];

    return (
        <section className={Style.relatedProductWrap}>
            <Container>
                <span className={Style.title}>Related Products</span>
                <SwiperCarouselSildes slides={slides} />
            </Container>
        </section>
    )
}

export default RelatedProducts;
