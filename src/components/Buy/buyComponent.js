import React from "react";
import { Container } from "react-bootstrap";
const Style = import('./Buy.module.css');



const BuyComponent = () => {


    return (
        <section className={Style.BuyComponentComponent}>
            <Container>
                <span className={Style.title}>Address</span>
                <p>Address line 1 Address line 1Address line 1</p>
                <p>Address line 1 Address line 1Address line 1</p>
                <p>Address line 1 Address line 1Address line 1</p>
            </Container>
        </section>
    )
}

export default BuyComponent;