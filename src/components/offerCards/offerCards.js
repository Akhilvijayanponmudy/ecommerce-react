import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './offerCards.module.css'

const offerCards = () => {

    return (
        <section className={styles.homeOfferSection}>
            <Container>
                <Row>
                    <Col xs={12} lg={4} >
                        <div className={styles.imgWrap}>
                            <figure><img src="/images/home/demo-grocery-banner-01.jpg" alt="" /></figure>
                            <div className={styles.cardContents}>
                                <span className={styles.offerSubTitle}>Sales upto 30% off</span>
                                <span className={styles.offerTitle}>Fresh bread  every day</span>
                                <div className={styles.btnWrap}><Link href="#" className={styles.offerBtn}>Shop Now</Link></div>
                            </div>
                        </div>
                    </Col>


                    <Col xs={12} lg={4} >
                        <div className={styles.imgWrap}>
                            <figure><img src="/images/home/demo-grocery-banner-01.jpg" alt="" /></figure>
                            <div className={styles.cardContents}>
                                <span className={styles.offerSubTitle}>Sales Upto 30% off</span>
                                <span className={styles.offerTitle}>Fresh bread  every day</span>
                                <div className={styles.btnWrap}><Link href="#" className={styles.offerBtn}>Shop Now</Link></div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={4} >
                        <div className={styles.imgWrap}>
                            <figure><img src="/images/home/demo-grocery-banner-01.jpg" alt="" /></figure>
                            <div className={styles.cardContents}>
                                <span className={styles.offerSubTitle}>Sales Upto 30% off</span>
                                <span className={styles.offerTitle}>Fresh bread  every day</span>
                                <div className={styles.btnWrap}><Link href="#" className={styles.offerBtn}>Shop Now</Link></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default offerCards;