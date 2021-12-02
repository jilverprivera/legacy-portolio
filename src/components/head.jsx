import React from "react";
import { Helmet } from "react-helmet";

const Head = () => {
    return (
        <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Roboto+Condensed:wght@300;700&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    );
};

export default Head;
