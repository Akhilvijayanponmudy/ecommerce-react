import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from '../../api/apiConfig';
import getJWTtoken from '../../contexts/checkJWTexistance';

const SavedAddresses = ({ sendDataToParent }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [addresses, setAddresses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = getJWTtoken();
        const response = await axios.get(`${baseURL}account/address`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        if (response.data.addressArr.items) {
          setAddresses(response.data.addressArr.items);
        } else {
          setAddresses([]);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddressSelect = (event) => {
    const selectedAddressId = event.target.value;
    // const selectedAddress = addresses.find(address => address._id === selectedAddressId);
    const selectedAddress = event.target.value;
    sendDataToParent(selectedAddress);
  };

  if (isLoading) {
    return <div>Loading product details...</div>;
  };
  if (error) {
    return <div>Error fetching product: {error.message}</div>;
  }
  if (!addresses) {
    return <div>No Saved Addresses</div>
  }

  return (
    <div>
      <h2>Saved Addresses</h2>
      <select name="format" id="format" onChange={handleAddressSelect}>
        <option selected disabled>Choose Address</option>
        {addresses.map(address => (
          <option key={address._id} value={address._id}>
            <p>{address.name}</p>
            <p>{address.addressLine1}</p>
            <p>{address.addressLine2}</p>
            <p>{address.city}</p>
            <p>{address.state}</p>
            <p>{address.zip}</p>
          </option>
        ))}
      </select>
    </div>
  );
};

export default SavedAddresses;
