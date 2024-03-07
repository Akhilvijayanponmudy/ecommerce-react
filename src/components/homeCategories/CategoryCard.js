import React from 'react';
import { Col } from 'react-bootstrap';
import Style from "./HomeCategories.module.css";
import baseURL from '../../api/apiConfig';

const CategoryCard = ({ _id, categoryName, primaryImage }) => {
  return (
    <Col key={_id} xs={12} lg={3}>
      <div className={Style.card}>
        <figure className="mb-0">
        <img src={primaryImage} alt={categoryName} />
        </figure>
        <div className={Style.linkWrap}>
          <a href='/'>
            <h4 className="mb-0">{categoryName}</h4>
          </a>
        </div>
      </div>
    </Col>
  );
};

export default CategoryCard;
