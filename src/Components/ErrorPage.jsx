import React from "react";

const ErrorPage = (props) => {
    return (
        <>
        <h1>Error on page: </h1>
        <h5 style={{color:"red"}}>{props.error}</h5>
        {"Invalid credentials"}
        </>
    );
}

export default ErrorPage;