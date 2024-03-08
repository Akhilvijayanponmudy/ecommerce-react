import React from "react";
import { Container, Row } from 'react-bootstrap';
import Style from "./HomeCategories.module.css";
import CategoryCard from './CategoryCard'; // Adjust the path based on your file structure

const HomeCategories = ({ props }) => {
    console.log(props);

    // Check if props is null or undefined
    if (!props) {
        console.error("Invalid props:", props);
        return null; // or return an error message, loading indicator, or handle it appropriately
    }

    // Check if props.categoryArr is an array before using map
    if (!Array.isArray(props.categoryArr)) {
        console.error("Invalid categoryArr in props:", props.categoryArr);
        return null; // or return an error message, loading indicator, or handle it appropriately
    }

    return (
        <Container>
            <h2 className={Style.h2}>Product Categories</h2>
            <Row>
                {props.categoryArr.map(category => (
                    <CategoryCard key={category._id} {...category} />
                ))}
            </Row>
        </Container>
    );
}

export default HomeCategories;
