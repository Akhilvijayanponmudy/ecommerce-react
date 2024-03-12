import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './Header.module.css'; // Import styles
import { Container, Row, Col } from 'react-bootstrap';

function Header() {
  // State to track menu activation
  const [isMenuActive, setMenuActive] = useState(false);

  // Function to toggle menu activation
  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

  return (
    <header>
      <Container>
        <Row>
          <Col xs={12} lg={4}>
            <figure className={`${styles.websiteLogo} mb-0`}>
              <img src="/images/logo.png" alt="logo" />
            </figure>
          </Col>
          <Col xs={12} lg={8} className={styles.noGutters}>
            <div className={`${styles.menuWrap} ${isMenuActive ? styles.mobMenuActive : ''}`}>
              <ul className={`${styles.headermenus} mb-0`}>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/products">PRODUCTS</Link></li>
                <li><Link to="/about">ABOUT US</Link></li>
                <li><Link to="/contact">CONTACT US</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
        <div className={styles.mobBtn} onClick={toggleMenu}>
          <img src="/images/Hamburger.png" alt="" />
        </div>
      </Container>
    </header>
  );
}

export default Header;
