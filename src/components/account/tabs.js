import React, { useState } from 'react';
import AddressForm from "../Buy/AddressForm"
import Orders from './orders';
import AllOrders from './allOrders'

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div>
            <div className="tab-buttons">
                {children.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={index === activeTab ? 'active' : ''}
                    >
                        {tab.props.title}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {children[activeTab]}
            </div>
        </div>
    );
};

const Tab = ({ children }) => {
    return <>{children}</>;
};

const ExampleComponent = () => {
    return (
        <Tabs>
            <Tab title="Active Orders">
                <div>
                    <h2>Active Orders</h2>
                    <Orders />
                </div>
            </Tab>
            <Tab title="All Orders">
                <div>
                    <h2>All Orders</h2>
                    <AllOrders />
                </div>
            </Tab>

            <Tab title="Add New Address">
                <div>
                    <AddressForm />
                </div>
            </Tab>
        </Tabs>
    );
};

export default ExampleComponent;
