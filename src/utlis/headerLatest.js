import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './headerLatest.module.css'; // Import styles
import { Container, Row, Col } from 'react-bootstrap';

function HeaderLatest() {


    return (
        <header>

            <section className={styles.topHeader} >
                <Container>
                    <Row>
                        <Col xs={2} >
                            <figure className={`${styles.siteLogo} mb-0`}>
                                <img src="/images/header/logo.svg" alt="" />
                            </figure>
                        </Col>
                        <Col xs={4} >
                            <div className={styles.searchBar}>
                                <form action="">
                                    <input type="text" placeholder="I'm loking for..." />
                                    <input type="submit" value="Search" />
                                </form>
                            </div>
                        </Col>
                        <Col xs={6} >
                            <div className={styles.headerConatctWrap}>
                                <div className={styles.headerContact} >
                                    <div className={styles.numberSec}>
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                        <a href="#" className={styles.numLinkWrap}>
                                            <span className={styles.cardTitle}>Need Help</span>
                                            <span className={styles.secVal} >999 999 999</span>
                                        </a>
                                    </div>
                             
                                    <div className={styles.headerContact}>
                                        <div className={styles.numberSec}>
                                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                                            <a href="#" className={styles.numLinkWrap}>
                                                <span className={styles.cardTitle} >Product</span>
                                                <span className={styles.secVal}>Wishlist</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.headerContact}>
                                        <div className={styles.numberSec}>
                                            <i class="fa fa-sign-in" aria-hidden="true"></i>
                                            <a href="#" className={styles.numLinkWrap} >
                                                <span className={styles.cardTitle}>Login</span>
                                                <span className={styles.secVal}>Account</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.headerContact}>
                                        <div className={styles.numberSec}>
                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                            <a href="#" className={styles.numLinkWrap}>
                                                <span className={styles.cardTitle}>Cart</span>
                                                <span className={styles.secVal}>Rs.0.00</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>



            {/* <section className={styles.topHeader} >
                <Container>
                    <Row>
                        <Col xs={2} >
                            <figure className={`${styles.siteLogo} mb-0`} class="mb-0 site-logo">
                                <img src="/images/header/logo.svg" alt="" />
                            </figure>
                        </Col>
                        <Col xs={4} >

                            <div className={styles.searchBar}>
                                <form action="">
                                    <input type="text" placeholder="I'm loking for..." />
                                    <input type="submit" value="Search" />
                                </form>
                            </div>
                        </Col>
                        <Col xs={6} >

                            <div className={styles.headerConatctrap}>
                                <div className={styles.headerContact} >
                                    <div className={styles.numberSec}>
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                        <a href="#"  className={styles.numLinkWrap}>
                                            <span className={styles.cardTitle}>Need Help</span>
                                            <span className={styles.secVal} >999 999 999</span>
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.headerContact}>
                                    <div className={styles.numberSec}>
                                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                                        <a href="#"  className={styles.numLinkWrap}>
                                            <span className={styles.cardTitle} >Product</span>
                                            <span className={styles.secVal}>Wishlist</span>
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.headerContact}>
                                    <div className={styles.numberSec}>
                                        <i class="fa fa-sign-in" aria-hidden="true"></i>
                                        <a href="#" className={styles.numLinkWrap} >
                                            <span className={styles.cardTitle}>Login</span>
                                            <span className={styles.secVal}>Account</span>
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.headerContact}>
                                    <div className={styles.numberSec}>
                                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        <a href="#"  className={styles.numLinkWrap}>
                                            <span className={styles.cardTitle}>Cart</span>
                                            <span className={styles.secVal}>Rs.0.00</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section> */}
            {/* <section class="bottom-header">
                <Container>
                    <Row className="align-cen">
                        <Col xs={3} >

                            <div class="cat-drop-main-wrap notActive" id="dropDownWrap">
                                <button class="categories-btn" id="categoriesButton">
                                    <div class="dropdown-wrap header-titles-f">
                                        <span class="drop-menu-title">Shop by Categories</span>
                                    </div>
                                </button>

                                <div class="drop-menus header-titles-f">
                                    <ul>
                                        <li><a href="">
                                            <figure><img src="assets/demo-grocery-categories-menu-icon-01.png" alt="" />
                                            </figure> Fruits & Vegitables
                                        </a></li>
                                        <li><a href="">
                                            <figure><img src="assets/demo-grocery-categories-menu-icon-01.png" alt="" />
                                            </figure> Fruits & Vegitables
                                        </a></li>
                                        <li><a href="">
                                            <figure><img src="assets/demo-grocery-categories-menu-icon-01.png" alt="" />
                                            </figure> Fruits & Vegitables
                                        </a></li>
                                        <li><a href="">
                                            <figure><img src="assets/demo-grocery-categories-menu-icon-01.png" alt="" />
                                            </figure> Fruits & Vegitables
                                        </a></li>
                                        <li><a href="">
                                            <figure><img src="assets/demo-grocery-categories-menu-icon-01.png" alt="" />
                                            </figure> Fruits & Vegitables
                                        </a></li>
                                        <li><a href="">
                                            <figure><img src="assets/demo-grocery-categories-menu-icon-01.png" alt="" />
                                            </figure> Fruits & Vegitables
                                        </a></li>
                                    </ul>
                                </div>

                            </div>
                        </Col>
                        <Col xs={5} >

                            <ul class="d-flex menus header-titles-f">
                                <li><a href="#">Test</a></li>
                                <li><a href="#">Test</a></li>
                                <li><a href="#">Test</a></li>
                                <li><a href="#">Test</a></li>
                                <li><a href="#">Test</a></li>
                                <li><a href="#">Test</a></li>
                            </ul>
                        </Col>
                        <Col xs={4} >

                            <div class="button-group">
                                <a href="" class="offer-btn d-flex">OFFER ZONE</a>
                                <a href="" class="new-arrival-btn d-flex">NEW ARRIVAL</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}

            {/* <section class="mob-header">

                <Container>
                    <Row className="notActive" id="mobMenuWrap">
                        <Col xs={3} >
                            <figure class="mob-logo" id="mobMenuButton"><img src="assets/menu.svg" alt="" /></figure>
                        </Col>
                        <Col xs={5} >

                            <figure class="site-logo"><img src="assets/logo.svg" alt="" /></figure>
                        </Col>
                        <Col xs={4} >

                            <div class="icon-group">
                                <a href=""><i class="fa fa-sign-in" aria-hidden="true"></i></a>
                                <a href=""><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
                            </div>
                        </Col>

                        <div class="mob-hamberger-menu">
                            <figure class="mob-close-btn"><img src="assets/close.svg" alt="" /> </figure>


                            <ul class="header-titles-f">
                                <li><a href="">
                                    <figure><img src="assets/demo-grocery-categories-menu-icon-01.png" alt="" />
                                    </figure> Fruits & Vegitables
                                </a></li>
                                <li><a href="">
                                    <figure><img src="assets/demo-grocery-categories-menu-icon-01.png" alt="" />
                                    </figure> Fruits & Vegitables
                                </a></li>
                                <li><a href="">
                                    <figure><img src="assets/demo-grocery-categories-menu-icon-01.png" alt="" />
                                    </figure> Fruits & Vegitables
                                </a></li>
                                <li><a href="">
                                    <figure><img src="assets/demo-grocery-categories-menu-icon-01.png" alt="" />
                                    </figure> Fruits & Vegitables
                                </a></li>
                                <li><a href="">
                                    <figure><img src="assets/demo-grocery-categories-menu-icon-01.png" alt="" />
                                    </figure> Fruits & Vegitables
                                </a></li>
                                <li><a href="">
                                    <figure><img src="assets/demo-grocery-categories-menu-icon-01.png" alt="" />
                                    </figure> Fruits & Vegitables
                                </a></li>
                            </ul>
                        </div>

                    </Row>

                    <Row className="no-gutters">
                        <div class="search-bar">
                            <form action="">
                                <input type="text" placeholder="I'm loking for..." />
                                <input type="submit" value="Search" />
                            </form>
                        </div>
                    </Row>
                </Container>

            </section> */}
        </header>
    );
}

export default HeaderLatest;
