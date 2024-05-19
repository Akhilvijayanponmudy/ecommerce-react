import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Row, Col } from "react-bootstrap";
import 'swiper/css';
import styles from './homeOfferListing.module.css'
import { Link } from "react-router-dom";

const HomeOfferListing = () => {

    const productImages = [
        { id: 1, url: '/images/home/demo-grocery-slider-img-01.jpg', altText: 'Offer Image' },
        { id: 2, url: '/images/home/demo-grocery-slider-img-02.jpg', altText: 'Offer Image' },
    ];


    const swiperOptions = {
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: true,
        loop: true,
        effect: 'slide',
    };
    return (
        <section className={styles.homeOfferListing}>
            <Container>
                <Row>

                    <Col xs={12} lg={8} >

                        <Swiper {...swiperOptions} className={styles.swiperWrap}>

                            {productImages.map((image) => (
                                <SwiperSlide key={image.id} className={styles.offerWrap}>

                                    <figure>
                                        <Link to="#">
                                            <img src={image.url} alt={image.altText} />
                                        </Link>
                                    </figure>
                                    <div className={styles.cardContents}>
                                        <span className={styles.offerSubTitle}>100% NATURAL AND PREMIUM</span><br></br>
                                        <span className={styles.offerTitle}>Fresh bread  every day</span>
                                        <div className={styles.btnWrap}><Link href="#" className={styles.offerBtn}>EXPLORE PRODUCTS</Link></div>
                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </Col>
                    <Col xs={12} lg={4} >
                        <div className={styles.offerImgs}>
                            <div className={styles.imgWrap}>
                                <figure><Link href="#"><img src="/images/home/demo-grocery-banner-01.jpg" alt="" /></Link></figure>
                                <div className={styles.cardContents}>
                                    <span className={styles.offerSubTitle}>100% NATURAL AND PREMIUM</span><br></br>
                                    <span className={styles.offerTitle}>Fresh bread  every day</span>
                                    <div className={styles.btnWrap}><Link href="#" className={styles.offerBtn}>Shop Now</Link></div>
                                </div>
                            </div>
                            <div className={styles.imgWrap}>
                                <figure><Link href="#"><img src="/images/home/demo-grocery-banner-02.jpg" alt="" /></Link></figure>
                                <div className={styles.cardContents}>
                                    <span className={styles.offerSubTitle}>100% NATURAL AND PREMIUM</span><br></br>
                                    <span className={styles.offerTitle}>Fresh bread  every day</span>
                                    <div className={styles.btnWrap}><Link href="#" className={styles.offerBtn}>Shop Now</Link></div>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section >)
}
export default HomeOfferListing;