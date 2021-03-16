import React from "react";

const ErrorPage = (props) => {
    return (
        <>
        <h1>Error on page</h1>
        {props.error}
        </>
    );
}

export default ErrorPage;