import React from "react";
import Style from "./buy.module.css";
const ProductCard = () => {
  console.log();
  return (
    <div className={Style.buyItemdetails}>
      <figure>
        <img src="/images/product.webp" alt="" />
      </figure>
      <p>Samsung Galaxy S24 Ultra</p>
      <div>
        <p>Price: 139000</p>
        <p>Quandity: 1</p>
      </div>
    </div>
  );
};

export default ProductCard;
