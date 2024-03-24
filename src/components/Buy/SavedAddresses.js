import React from 'react';

const SavedAddresses = ({ addresses, onSelectAddress }) => {
  return (
    <div>
      <h2>Saved Addresses</h2>
      {addresses.map((address) => (
        <div key={address.id} onClick={() => onSelectAddress(address)}>
          <p>{address.name}</p>
          <p>{address.addressLine1}</p>
          {address.addressLine2 && <p>{address.addressLine2}</p>}
          <p>{`${address.city}, ${address.state} ${address.zip}`}</p>
        </div>
      ))}
    </div>
  );
};

export default SavedAddresses;
