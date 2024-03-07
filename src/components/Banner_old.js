import React from "react";

function HomeBanner({ props }) {
    console.log(props);
    if (!props) {
        return <p>Loading data...</p>; // Or a loading indicator
    }
    return (

        <div><h1>Home Banner</h1>
            <p>{props.message}</p>
        </div>
    )
}
export default HomeBanner;