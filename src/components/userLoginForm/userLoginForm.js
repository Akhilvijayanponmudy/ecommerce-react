import React, { useState } from "react";
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import Style from './userLogin.module.css'
import { Link } from "react-router-dom";
const UserLoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [validationError, setValidationError] = useState('');

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setValidationError('Email and password are required.');
            return;
        }

        try {
            // const response = await axios.post('http://localhost:5000/login', { email, password });
            // setResponseMessage(response.data.message);


            //********** */ express code starts
            // res.cookie('jwt', token, { httpOnly: true, secure: true }); // Set HttpOnly and Secure flags (optional)
            // res.json({ message: 'Login successful', accessToken: token });
            //*********** */ express code ends

            const accessToken = 'accessTokenGenarated';
            if (accessToken) {
                setIsLoggedIn(true);
            }

            // if (response.data.accessToken) { // Check if access token is in response
            if (accessToken) { // Check if access token is in response
                document.cookie = `jwt=${accessToken}; HttpOnly; Secure`;  // Store access token in HttpOnly cookie
                setIsLoggedIn(true); // Update logged-in state
            } else {
                setResponseMessage('Login failed. Access token not received.');
            }



        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('An error occurred.');
        }
    }

    return (

        <section className={Style.userloginsection}>


            <Container className={Style.WidHei}>
                <div className={Style.formWrap}>
                    <span className={Style.Logintitle}>Login Here</span>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </Form.Group>

                        {validationError && <p style={{ color: 'red' }}>{validationError}</p>}

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <p>{responseMessage}</p>

                    <div className={Style.linkwrap}>
                        <Link to="/registration">Create Your Account</Link>
                    </div>
                    <Link to="/">Forgot Password</Link>



                </div>

            </Container >
        </section>
    );
}

export default UserLoginForm;
