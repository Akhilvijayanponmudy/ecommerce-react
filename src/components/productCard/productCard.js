import React from "react";
import { Container, Row } from "react-bootstrap";
import UseProductcard from "./useProductCard";
import styles from './productCard.module.css';
const productCard = () => {
  const productArr = [
    {
      id: 1,
      productName: "S22 Ultra",
      productcat: "Samsung",
      Imgurl: "/images/Product/grosery-product-03-a.jpg",
      altText: "Offer Image",
      link: "###",
      productCurrentPrice: '99,999',
      productActualPrice: '89,999',
    },
    {
      id: 2,
      productName: "S22 Ultra",
      productcat: "Samsung",
      Imgurl: "/images/Product/grosery-product-03.jpg",
      altText: "Offer Image",
      link: "###",
      productCurrentPrice: '99,999',
      productActualPrice: '89,999',
    },
    {
      id: 3,
      productName: "S22 Ultra",
      productcat: "Samsung",
      Imgurl: "/images/Product/s20.jpg",
      altText: "Offer Image",
      link: "###",
      productCurrentPrice: '99,999',
      productActualPrice: '89,999',
    },
    {
      id: 4,
      productName: "S22 Ultra",
      productcat: "Samsung",
      Imgurl: "/images/Product/s22.jpg",
      altText: "Offer Image",
      link: "###",
      productCurrentPrice: '99,999',
      productActualPrice: '89,999',
    },
    {
      id: 5,
      productName: "S22 Ultra",
      productcat: "Samsung",
      Imgurl: "/images/Product/s23.jpg",
      altText: "Offer Image",
      link: "###",
      productCurrentPrice: '99,999',
      productActualPrice: '89,999',
    },
    {
      id: 6,
      productName: "S22 Ultra",
      productcat: "Samsung",
      Imgurl: "/images/Product/grosery-product-03.jpg",
      altText: "Offer Image",
      link: "###",
      productCurrentPrice: '99,999',
      productActualPrice: '89,999',
    },
    {
      id: 7,
      productName: "S22 Ultra",
      productcat: "Samsung",
      Imgurl: "/images/Product/grosery-product-03-a.jpg",
      altText: "Offer Image",
      link: "###",
      productCurrentPrice: '99,999',
      productActualPrice: '89,999',
    },
    {
      id: 8,
      productName: "S22 Ultra",
      productcat: "Samsung",
      Imgurl: "/images/Product/grosery-product-03.jpg",
      altText: "Offer Image",
      link: "###",
      productCurrentPrice: '99,999',
      productActualPrice: '89,999',
    },
    {
      id: 9,
      productName: "S22 Ultra",
      productcat: "Samsung",
      Imgurl: "/images/Product/s20.jpg",
      altText: "Offer Image",
      link: "###",
      productCurrentPrice: '99,999',
      productActualPrice: '89,999',
    },
    {
      id: 10,
      productName: "S22 Ultra",
      productcat: "Samsung",
      Imgurl: "/images/Product/s22.jpg",
      altText: "Offer Image",
      link: "###",
      productCurrentPrice: '99,999',
      productActualPrice: '89,999',
    },
    {
      id: 11,
      productName: "S22 Ultra",
      productcat: "Samsung",
      Imgurl: "/images/Product/s23.jpg",
      altText: "Offer Image",
      link: "###",
      productCurrentPrice: '99,999',
      productActualPrice: '89,999',
    },
    {
      id: 12,
      productName: "S22 Ultra",
      productcat: "Samsung",
      Imgurl: "/images/Product/grosery-product-03.jpg",
      altText: "Offer Image",
      link: "###",
      productCurrentPrice: '99,999',
      productActualPrice: '89,999',
    },
  ];

  return (
    <section className={styles.prodcutSection}>
      <Container>
        <Row>

          <span className="h1 pb-5">Latest Products</span>

          {productArr.map((prodcuct) => (
            <UseProductcard key={prodcuct.id} {...prodcuct} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default productCard;
