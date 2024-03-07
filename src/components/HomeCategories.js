import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Style from "./HomeCategories.module.css";

const HomeCategories = () => {

    return (
        <Container>
            <h2 className={Style.h2}>Product Categories</h2>
            <Row>

                <Col xs={4} lg={3}>
                    <div className={Style.card}>
                        <figure className="mb-0">
                            <img src="/images/electronics.png" alt="produt-cat" />
                        </figure>
                        <a href="/">Electronics</a>

                    </div>
                </Col>
                <Col xs={4} lg={3}>
                    <div className={Style.card}>
                        <figure className="mb-0">
                            <img src="/images/electronics.png" alt="produt-cat" />
                        </figure>
                        <a href="/">Electronics</a>


                    </div>
                </Col>
                <Col xs={4} lg={3}>
                    <div className={Style.card}>
                        <figure className="mb-0">
                            <img src="/images/electronics.png" alt="produt-cat" />
                        </figure>
                        <a href="/">Electronics</a>

                    </div>
                </Col>
                <Col xs={4} lg={3}>
                    <div className={Style.card}>
                        <figure className="mb-0">
                            <img src="/images/electronics.png" alt="produt-cat" />
                        </figure>
                        <a href="/">Electronics</a>

                    </div>
                </Col>
                <Col xs={4} lg={3}>
                    <div className={Style.card}>
                        <figure className="mb-0">
                            <img src="/images/electronics.png" alt="produt-cat" />
                        </figure>
                        <a href="/">Electronics</a>

                    </div>
                </Col>
                <Col xs={4} lg={3}>
                    <div className={Style.card}>
                        <figure className="mb-0">
                            <img src="/images/electronics.png" alt="produt-cat" />
                        </figure>
                        <a href="/">Electronics</a>

                    </div>
                </Col>
                <Col xs={4} lg={3}>
                    <div className={Style.card}>
                        <figure className="mb-0">
                            <img src="/images/electronics.png" alt="produt-cat" />
                        </figure>
                        <a href="/">Electronics</a>

                    </div>
                </Col>
                <Col xs={4} lg={3}>
                    <div className={Style.card}>
                        <figure className="mb-0">
                            <img src="/images/electronics.png" alt="produt-cat" />
                        </figure>
                        <a href="/">Electronics</a>

                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default HomeCategories;