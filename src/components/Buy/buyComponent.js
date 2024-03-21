import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from './buy.module.css';



const BuyComponent = () => {
    return (
        <section className={Style.BuyComponentComponent}>
            <Container>
                <Row>
                    <Col xs={12} lg={7}>

<span>Deliver to this address</span>

                        <form action="">
                            <label htmlFor="FullName">Fullname</label>
                            <input type="text" name="FullName" id="" />

                            <label htmlFor="address">Address</label>
                            <input type="textarea" name="address" id="" />

                            <label htmlFor="landmark">Landmark</label>
                            <input type="text" name="landmark" id="" />

                            <label htmlFor="pincode">Pincode</label>
                            <input type="number" name="pincode" id="" />

                            <label htmlFor="mobile">Mobile Number</label>
                            <input type="number" name="mobile" id="" />

                            <input type="submit" value="Submit" />

                        </form>

                    </Col>
                    <Col xs={12} lg={5}>
                        <div className={Style.buyItemdetails}>
                            <figure><img src="/images/product.webp" alt="" srcset="" /></figure>
                            <p>Samsung Galaxy S24 Ultra</p>
                            <div>
                                <p>Price: 139000</p>
                                <p>Quandity: 1</p>
                            </div>
                        </div>
                        <div className={Style.buyItemdetails}>
                            <figure><img src="/images/product.webp" alt="" srcset="" /></figure>
                            <p>Samsung Galaxy S24 Ultra</p>
                            <div>
                                <p>Price: 139000</p>
                                <p>Quandity: 1</p>
                            </div>
                        </div>
                        <div className={Style.buyItemdetails}>
                            <figure><img src="/images/product.webp" alt="" srcset="" /></figure>
                            <p>Samsung Galaxy S24 Ultra</p>
                            <div>
                                <p>Price: 139000</p>
                                <p>Quandity: 1</p>
                            </div>
                        </div>

                        <h5>Total : Rs. 12000</h5>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BuyComponent;