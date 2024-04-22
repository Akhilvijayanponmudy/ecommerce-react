import React, { useState, useEffect } from 'react';
import { Nav, Tab, Col, Row } from 'react-bootstrap';
import SavedAddresses from './SavedAddresses';
import AddressForm from './AddressForm';

const CheckoutTab = ({ sendDataToParent }) => {
  const [activeKey, setActiveKey] = useState('select');
  const [dataFromChild, setDataFromChild] = useState(null);

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  useEffect(() => {
    sendDataToParent(dataFromChild);
  }, [dataFromChild, sendDataToParent]);

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
              <SavedAddresses sendDataToParent={handleDataFromChild} />
            </Tab.Pane>
            <Tab.Pane eventKey="add">
              <AddressForm />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default CheckoutTab;
