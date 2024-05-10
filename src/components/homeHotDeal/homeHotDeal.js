import React from "react";
import styles from './homeHotDeal.module.css'
import { Container } from "react-bootstrap";


function HomehotDealBanner() {


    return (
        <section className={styles.hotDeal}>
            <Container>
                <div className={styles.hotDealWrap}>
                    <figure><img src="/images/header/nestlay.svg" alt="" /></figure>
                    <p>Celebrate world chocolate day with a sweet indulgence! <span> <a href="#">Save 50% off
                    </a></span></p>
                </div>
            </Container>
        </section>
    )
}

export default HomehotDealBanner;