import React from "react";
import { Container, Row } from 'react-bootstrap';
import Style from "./HomeCategories.module.css";
import CategoryCard from './CategoryCard'; // Adjust the path based on your file structure

const HomeCategories = ({ props }) => {

    if (!props) {
        console.error("Invalid props:", props);
        return null;
    }
    if (!Array.isArray(props)) {
        console.error("Invalid categoryArr in props:", props);
        return null; 
    }

    return (
        <Container>
            <h2 className={Style.h2}>Product Categories</h2>
            <Row>
                {props.map(category => (
                    <CategoryCard key={category._id} {...category} />
                ))}
            </Row>
        </Container>
    );
}

export default HomeCategories;
