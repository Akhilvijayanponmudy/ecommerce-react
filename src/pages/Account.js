// import React, { useState, useEffect } from 'react';
import React from 'react';
import Header from "../utlis/header";
import UserAccount from "../components/account/accountComponent"
import Tabs from "../components/account/tabs"

function About() {

    return (
        <div>
            <Header />
            <h1>Account Page</h1>
            <UserAccount />
            <Tabs />
        </div>
    )
}
export default About;
