import React, { useState, useEffect } from "react";
import axios from "axios";
import baseURL from "../../api/apiConfig";
import getJWTtoken from "../../contexts/checkJWTexistance";
import { useNavigate } from 'react-router-dom';
import JwtValidateExpiry from "../../contexts/jwtVlidationCheck";

const Orders = () => {
    const navigate = useNavigate();
    const accessToken = getJWTtoken();
    const [addressArr, setAddressArr] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        if (accessToken) {
            setIsLoading(true);
            const fetchAddress = async () => {
                try {
                    const response = await axios.get(`${baseURL}account/address`, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    })
                    const validation = JwtValidateExpiry(response);
                    if (validation === false) {
                        navigate('/login');
                    } else if (validation === true) {
                        const userAddresses = response.data.addressArr.items;
                        setAddressArr(userAddresses);
                    }

                } catch (error) {
                    console.log(error);
                    setError(error);

                } finally {
                    setIsLoading(false);
                }
            }
            fetchAddress();

        } else {
            navigate('/login');

        }
    }, []);



    if (isLoading) {
        return <div>Loading Addresses</div>;
    }

    if (error) {
        return <div>Error fetching product: {error.message}</div>;
    }

    return (
        <div>
            <p>Order Component</p>
        </div>
    )
}

export default Orders
