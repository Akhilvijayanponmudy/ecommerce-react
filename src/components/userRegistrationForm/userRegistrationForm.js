import React, { useState } from "react";
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL;



const UserRegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handleNameChange = (e) => {
        setFullname(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        try {
            const response = await axios.post(`${apiUrl}register`, { username, password, fullname });
            setResponseMessage(response.data.message);
            if (response.status == 201) {
                <Navigate to="/login" />
            }
        } catch (error) {
            setResponseMessage('An error occurred.');
        }
    };

    return (
        <div>
            <h1>User Registration</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name</label>
                    <input type="text" value={fullname} onChange={handleNameChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={username} onChange={handleUsernameChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} required />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
                </div>
                <button type="submit">Register</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default UserRegistrationForm;
