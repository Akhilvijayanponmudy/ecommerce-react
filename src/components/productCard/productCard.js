import React from "react";
import { Container, Row } from "react-bootstrap";
import UseProductcard from "./useProductCard";
const productCard = () => {
  const productArr = [
    {
      id: 1,
      productName: "S22 Ultra",
      productcat: "Samsung",
      Imgurl: "/images/home/demo-grocery-slider-img-01.jpg",
      altText: "Offer Image",
      link: "###",
    },
    {
      id: 2,
      productName: "S22 Ultra",
      productcat: "Samsung",
      Imgurl: "/images/home/demo-grocery-slider-img-01.jpg",
      altText: "Offer Image",
      link: "###",
    },
    {
      id: 3,
      productName: "S22 Ultra",
      productcat: "Samsung",
      Imgurl: "/images/home/demo-grocery-slider-img-01.jpg",
      altText: "Offer Image",
      link: "###",
    },
  ];

  return (
    <Container>
      <Row>
        {productArr.map((prodcuct) => (
          <UseProductcard key={prodcuct._id} {...prodcuct} />
        ))}
      </Row>
    </Container>
  );
};

export default productCard;
