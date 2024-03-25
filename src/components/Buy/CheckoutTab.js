import React, { useState } from 'react';
import { Nav, Tab, Col, Row } from 'react-bootstrap';
import SavedAddresses from './SavedAddresses';
import AddressForm from './AddressForm';

const CheckoutTab = ({ onSubmit }) => {
  const [activeKey, setActiveKey] = useState('select');

  const handleSelectAddress = (address) => {
    setActiveKey('select'); // Switch to "Select Address" tab on selection
    onSubmit(address); // Pass the selected address to parent component
  };

  const handleNewAddressSubmit = (formData) => {
    // Handle submission of new address
    // You can define the onSubmit function to handle this
    // For now, let's just log the form data
    console.log(formData);
  };

  return (
    <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
      <Row>
        <Col sm={12}>
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link eventKey="select">Select Saved Address</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="add">Add New Address</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Tab.Content>
            <Tab.Pane eventKey="select">
              <SavedAddresses onSelectAddress={handleSelectAddress} />
            </Tab.Pane>
            <Tab.Pane eventKey="add">
              <AddressForm onSubmit={handleNewAddressSubmit} />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default CheckoutTab;
