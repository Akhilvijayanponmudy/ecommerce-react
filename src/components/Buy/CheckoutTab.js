import React, { useState } from 'react';
import { Nav, Tab, Col, Row } from 'react-bootstrap';
import AddressForm from './AddressForm';
import SavedAddresses from './SavedAddresses';

const CheckoutTab = ({ onSubmit, savedAddresses }) => {
  const [activeKey, setActiveKey] = useState('new');

  const handleSelectAddress = (address) => {
    setActiveKey('select'); // Switch to "Select Address" tab on selection
    onSubmit(address); // Pass the selected address to parent component
  };

  const handleNewAddressSubmit = (formData) => {
    setActiveKey('select'); // Switch to "Select Address" tab on submission
    onSubmit(formData); // Pass the new address to parent component
  };
  savedAddresses='';
  return (
    <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
      <Row>
        <Col sm={4}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="new">Add New Address</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="select">Select Saved Address</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="new">
              <AddressForm onSubmit={handleNewAddressSubmit} />
            </Tab.Pane>
            <Tab.Pane eventKey="select">
              {savedAddresses.length > 0 ? (
                <SavedAddresses addresses={savedAddresses} onSelectAddress={handleSelectAddress} />
              ) : (
                <p>You don't have any saved addresses yet.</p>
              )}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default CheckoutTab;
