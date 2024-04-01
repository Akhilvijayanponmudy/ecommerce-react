import React, { useState } from 'react';
import axios from 'axios';
import getJWTtoken from '../../contexts/checkJWTexistance';
import baseURL from '../../api/apiConfig';
import { useNavigate } from 'react-router-dom';
import JwtValidateExpiry from '../../contexts/jwtVlidationCheck'

const AddressForm = ({ onSubmit }) => {

    const [isSuccessMessage, setIsSuccessMessage] = useState(false);


    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zip: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(formData);
        // onSubmit(formData);
        const accessToken = getJWTtoken();
        if (!accessToken) {
            navigate('/login');
        } else {
            const response = await axios.post(`${baseURL}account/address/add`,
                { data: formData },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

            const validation = JwtValidateExpiry(response);
            if (validation === false) {
                navigate('/login');
            } else if (validation === true) {
                setIsSuccessMessage(true); // Show success message
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="addressLine1">Address Line 1:</label>
                <input type="text" id="addressLine1" name="addressLine1" value={formData.addressLine1} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="addressLine2">Address Line 2 (Optional):</label>
                <input type="text" id="addressLine2" name="addressLine2" value={formData.addressLine2} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="state">State:</label>
                <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="zip">ZIP Code:</label>
                <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} required />
            </div>
            <button type="submit">Add Address</button>

            {isSuccessMessage && (
                <div className="success-message">Address added successfully!</div>
            )}


        </form>
    );
};

export default AddressForm;
