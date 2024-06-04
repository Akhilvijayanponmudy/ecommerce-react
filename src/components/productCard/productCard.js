import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import UseProductcard from "./useProductCard";
import styles from './productCard.module.css';
import axios from 'axios';
const baseURL = process.env.REACT_APP_API_URL;


const ProductCard = ({ count, catId }) => {


  console.log(count);
  console.log(catId);


  let apiUrl = '';
  if (catId) {
    apiUrl = baseURL + `products/category/${catId}`;

  } else {
    apiUrl = baseURL + 'latest-products';
  }

  const [productArray, setProductArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(apiUrl)
      .then(response => {
        setProductArray(response.data.productArr);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(true);
        setIsLoading(false);
      });
  }, [apiUrl]);

  if (isLoading) {
    return <div>LoadingProducts</div>;
  }
  if (error) {
    return <div>Error fetching product: {error.message}</div>;
  }

  return (
    <section className={styles.prodcutSection}>
      <Container>
        <Row>

          <span className="h1 pb-5">Latest Products</span>

          {productArray.map((prodcuct) => (
            <UseProductcard key={prodcuct.id} {...prodcuct} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProductCard;
