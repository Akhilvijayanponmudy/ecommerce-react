import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Style from './ProductDetails.module.css';
import { Link } from "react-router-dom";
import baseURL from "../../api/apiConfig";
import { useNavigate } from 'react-router-dom';
import getJWTtoken from "../../contexts/checkJWTexistance";
import axios from 'axios';

const ProductDetail = ({ props }) => {
  const [currentImage, setCurrentImage] = useState('');
  const navigate = useNavigate();

  if (!props) {
    console.error("Invalid props:", props);
    return null;
  }

  const productDetailsArray = Object.entries(props);
  if (!Array.isArray(productDetailsArray)) {
    console.error("Invalid Product in props:", props);
    return null;
  }

  const productId = productDetailsArray[0][1]._id;
  const productName = productDetailsArray[0][1].productName;
  const primaryImageUr = productDetailsArray[0][1].primaryImage;
  const productDescription = productDetailsArray[0][1].productDescription;
  const productActualPrice = productDetailsArray[0][1].productActualPrice;
  const productCurrentPrice = productDetailsArray[0][1].productCurrentPrice;
  const secondaryImages = productDetailsArray[0][1].imageGroup;

  const primaryImage = baseURL + 'uploads/' + primaryImageUr;

  const handleSecondaryImageClick = (imgUrl) => {
    setCurrentImage(baseURL + 'uploads/' + imgUrl); // Construct full path
  };


  const handleAddToCart = async () => {
    const accessToken = getJWTtoken();
    if (!accessToken) {
      navigate('/login');
    } else {
      try {
        const response = await axios.post(`${baseURL}cart/add-to-cart/${productId}`,
          { quantity: 1, },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

        if (response.data.status === true) {
          navigate('/cart')
        } else {
          alert('Something Went Wrong')
        }

        console.log('Added to cart:', response.data);


      } catch (error) {
        navigate('/login')
        console.log(error);
      }

    }
  };




  return (
    <section className={Style.productDetailSection}>
      <Container>
        <Row className={Style.rowStyle}>
          <Col xs={12} lg={6} >
            <figure className={Style.PrimaryImage}>
              <img src={currentImage || baseURL + 'uploads/' + secondaryImages[0]} alt="" /> 
            </figure>


            <div className={Style.productImageGroupWrap}>

              {secondaryImages.map((imageUrl, index) => (
                <figure key={index} className={Style.secondaryImages}>
                  <img
                    src={baseURL + 'uploads/' + imageUrl}
                    alt=""
                    onClick={() => handleSecondaryImageClick(imageUrl)}
                  />
                </figure>
              ))}
            </div>
          </Col>
          <Col xs={12} lg={6} className={Style.ProductDetailsWrap}>
            <span className={Style.ProductTitle}>{productName}</span>
            <span className={Style.productDescription}>{productDescription}</span>

            <div className={Style.PriceWrap}>
              <span className={Style.CurrentPrice}> Rs. {productCurrentPrice}</span>
              <span className={Style.oldPrice}> Rs. {productActualPrice}</span>
              <span className={Style.discountPersantage}>50% off</span>
            </div>

            <div className={Style.productBtnWrap}>

              {/* <Link to={`/add-to-cart/${productId}`} className={Style.cartBtn}>Add to Cart</Link> */}
              <button className={Style.cartBtn} onClick={handleAddToCart}>Add to Cart</button>
              <Link to={`/buy/${productId}`} className={Style.buyBtn} >Buy Now</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetail;
