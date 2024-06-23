import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHeart, faSignIn, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styles from './headerLatest.module.css';
import { Link } from 'react-router-dom';

function HeaderLatest() {

    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const [isActiveMobMenu, setIsActivemobMenu] = useState(false);


    // const apiUrl = baseURL + 'product-categories';
    // const [categoryArray, setcategoryArray] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(false);

    // useEffect(() => {
    //     setIsLoading(true);
    //     axios.get(apiUrl)
    //         .then(response => {
    //             setcategoryArray(response.data.categoryArr);
    //             setIsLoading(false);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //             setError(true);
    //             setIsLoading(false);
    //         });
    // }, [apiUrl]);



    const toggleMenu = () => {
        setIsActiveMenu(!isActiveMenu);
    };

    const toggleMbMenu = () => {
        setIsActivemobMenu(!isActiveMobMenu);
    }


    return (
        <header>
            <section className={styles.topHeader} >
                <Container>
                    <Row>
                        <Col xs={2} >
                            <Link to="/"> <figure className={`${styles.siteLogo} mb-0`}>
                                <img src="/images/header/logo.svg" alt="" />
                            </figure></Link>

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
                                <div className={styles.numberSec}>
                                    <i> <FontAwesomeIcon icon={faPhone} className={styles.icon} /></i>

                                    <a href="#" className={styles.numLinkWrap}>
                                        <span className={styles.cardTitle}>Need Help</span>
                                    </a>
                                </div>


                                <div className={styles.headerContact}>
                                    <div className={styles.numberSec}>
                                        <i> <FontAwesomeIcon icon={faSignIn} className={styles.icon} /></i>

                                        <a href="#" className={styles.numLinkWrap} >
                                            <span className={styles.secVal}>Account</span>
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.headerContact}>
                                    <div className={styles.numberSec}>
                                        <i> <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} /></i>

                                        <Link to="/cart" className={styles.numLinkWrap}>
                                            <span className={styles.cardTitle}>Cart</span>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className={styles.bottomHeader} >
                <Container>
                    <Row className="alignCent"  >
                        <Col xs={3} >

                            <div className={`${styles.catDropMainWrap} notActive`} id="dropDownWrap">

                                <button className={styles.categoriesBtn} onClick={toggleMenu} id="categoriesButton" >
                                    <div
                                        className={`${styles.dropdownWrap} ${styles.headerTitlesF} ${isActiveMenu ? styles.dropActive : styles.deopNotActive}`}>
                                        <span >Shop by Categories</span>
                                    </div>
                                </button>

                                {isActiveMenu && (
                                    <div className={`${styles.dropMenus} headerTitlesF`} >


                                        <ul className={styles.dropdownListWrap}>
                                            <li><a href="">
                                                <figure><img src="/images/header/demo-grocery-categories-menu-icon-01.png" alt="" />
                                                </figure> Fruits & Vegitables
                                            </a></li>
                                            <li><a href="">
                                                <figure><img src="/images/header/demo-grocery-categories-menu-icon-01.png" alt="" />
                                                </figure> Fruits & Vegitables
                                            </a></li>
                                            <li><a href="">
                                                <figure><img src="/images/header/demo-grocery-categories-menu-icon-01.png" alt="" />
                                                </figure> Fruits & Vegitables
                                            </a></li>
                                            <li><a href="">
                                                <figure><img src="/images/header/demo-grocery-categories-menu-icon-01.png" alt="" />
                                                </figure> Fruits & Vegitables
                                            </a></li>
                                            <li><a href="">
                                                <figure><img src="/images/header/demo-grocery-categories-menu-icon-01.png" alt="" />
                                                </figure> Fruits & Vegitables
                                            </a></li>
                                            <li><a href="">
                                                <figure><img src="/images/header/demo-grocery-categories-menu-icon-01.png" alt="" />
                                                </figure> Fruits & Vegitables
                                            </a></li>
                                        </ul>


                                    </div>
                                )}
                            </div>
                        </Col>
                        <Col xs={5} >

                            <ul className={`${styles.menus} dFlex headerTitlesF`}>
                                <li><a href="#">Test</a></li>
                                <li><a href="#">Test</a></li>
                                <li><a href="#">Test</a></li>
                                <li><a href="#">Test</a></li>
                                <li><a href="#">Test</a></li>
                                <li><a href="#">Test</a></li>
                            </ul>
                        </Col>
                        <Col xs={4} >

                            <div className={`${styles.buttonGroup} headerTitlesF`}>
                                <a href="" className={`${styles.offerBtn} dFlex`} >OFFER ZONE</a>
                                <a href="" className={`${styles.newArrivalBtn} dFlex`} >NEW ARRIVAL</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className={`${styles.mobHeader} `}>

                <Container>
                    {/* <Row className={`${styles.notActive} `} id="mobMenuWrap"> */}
                    <Row className={`${styles.notActive}  ${isActiveMobMenu ? styles.activeMobHeader : styles.notActiveMobHeader}`} id="mobMenuWrap">
                        <Col xs={3} >
                            <figure className={`${styles.mobLogo} `} id="mobMenuButton" onClick={toggleMbMenu}><img src="/images/header/menu.svg" alt="" /></figure>
                        </Col>
                        <Col xs={5} >
                            <Link to="/">
                                <figure className={`${styles.siteLogo} `} ><img src="/images/header/logo.svg" alt="" /></figure>
                            </Link>
                        </Col>
                        <Col xs={4} >

                            <div className={`${styles.iconGroup} `} >
                                <Link to="/cart" ><i> <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} /></i></Link>
                                <Link><i> <FontAwesomeIcon icon={faSignIn} className={styles.icon} /></i></Link>


                            </div>
                        </Col>

                        <div className={`${styles.mobHambergerMenu}  ${isActiveMobMenu ? styles.activeMobHeader : styles.notActiveMobHeader}`} onClick={toggleMbMenu}>
                            <figure className={`${styles.mobCloseBtn} `} ><img src="/images/header/close.svg" alt="" /> </figure>


                            <ul className={`${styles.headerTitlesF} `} >
                                <li><a href="">
                                    <figure><img src="/images/header/demo-grocery-categories-menu-icon-01.png" alt="" />
                                    </figure> Fruits & Vegitables
                                </a></li>
                                <li><a href="">
                                    <figure><img src="/images/header/demo-grocery-categories-menu-icon-01.png" alt="" />
                                    </figure> Fruits & Vegitables
                                </a></li>
                                <li><a href="">
                                    <figure><img src="/images/header/demo-grocery-categories-menu-icon-01.png" alt="" />
                                    </figure> Fruits & Vegitables
                                </a></li>
                                <li><a href="">
                                    <figure><img src="/images/header/demo-grocery-categories-menu-icon-01.png" alt="" />
                                    </figure> Fruits & Vegitables
                                </a></li>
                                <li><a href="">
                                    <figure><img src="/images/header/demo-grocery-categories-menu-icon-01.png" alt="" />
                                    </figure> Fruits & Vegitables
                                </a></li>
                                <li><a href="">
                                    <figure><img src="/images/header/demo-grocery-categories-menu-icon-01.png" alt="" />
                                    </figure> Fruits & Vegitables
                                </a></li>
                            </ul>
                        </div>

                    </Row>

                    <Row className="no-gutters">
                        <Container>
                            <div className={`${styles.searchBar} `} >
                                <form action="">
                                    <input type="text" placeholder="I'm loking for..." />
                                    <input type="submit" value="Search" />
                                </form>
                            </div>
                        </Container>
                    </Row>
                </Container>

            </section>
        </header>
    );
}

export default HeaderLatest;
