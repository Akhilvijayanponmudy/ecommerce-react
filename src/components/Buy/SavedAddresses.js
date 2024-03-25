import React from 'react';
import axios from 'axios';
import baseURL from '../../api/apiConfig';
import getJWTtoken from '../../contexts/checkJWTexistance';

const SavedAddresses =  () => {
  try {
    const accessToken = getJWTtoken();

    // const response = await axios.get(`${baseURL}account/address`, {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // });

}catch (error) {
  console.log(error);
}

return (
  <div>
    <h2>Saved Addresses</h2>

  </div>
);
};



export default SavedAddresses;
