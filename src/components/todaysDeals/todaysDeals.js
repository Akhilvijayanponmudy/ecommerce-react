import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const todaysDeals = () => {

    return (
        <section className="todaysDealsSection">
            <Container>
                <Row>
                    <div className="titleWrap">
                        <span className="dealsTitle">Today's special deals!</span>
                        <span className="dealsSubTitle">Don't miss today's featured deals.</span>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default todaysDeals;