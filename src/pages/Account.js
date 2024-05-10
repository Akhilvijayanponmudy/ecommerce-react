// import React, { useState, useEffect } from 'react';
import React from 'react';
import Header from "../utlis/header";
import UserAccount from "../components/account/accountComponent"
import Tabs from "../components/account/tabs"
import { Container, Row, Col } from "react-bootstrap";


function About() {

    return (
        <div>
            <Header />
            <Container>
            <h1>Account Page</h1>
            <UserAccount />
            <Tabs />
            </Container>
        </div>
    )
}
export default About;
