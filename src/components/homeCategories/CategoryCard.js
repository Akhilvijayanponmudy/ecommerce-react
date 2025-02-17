import React from 'react';
import { Col } from 'react-bootstrap';
import Style from "./HomeCategories.module.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ _id, categoryName, primaryImage }) => {
  return (
    <Col key={_id} xs={12} lg={3}>
      <Link to={`/products/${_id}`}>
        <div className={Style.card}>
          <figure className="mb-0">
            <img src={primaryImage} alt={categoryName} />
          </figure>
          <div className={Style.linkWrap}>

            <h4 className="mb-0">{categoryName}</h4>

          </div>
        </div>
      </Link>
    </Col >
  );
};

export default CategoryCard;
