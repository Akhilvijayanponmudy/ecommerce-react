import React from "react";

const UseOrders = ({id, productName, productActualPrice, paymentMethod, shippingAddressData,orderdDate }) => {
    return (
   
           <div className="card"  id={`orders_${id}`}>
            <span className="">Product Name : {productName}</span>
            <span className="">Product Price : {productActualPrice}</span>
            <span className="">Product payment Method : {paymentMethod}</span>
            <span className="">shipping Address : {shippingAddressData}</span>
            <span className="">shipping Address : {orderdDate}</span>
           </div>
    );
}

export default UseOrders;