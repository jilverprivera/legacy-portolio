import React from "react";
import Layout from "../src/components/layout/layout";
import { Seo } from "../src/seo";

const Home = () => {
    return (
        <>
            <Seo title="Jilver Pacheco — Web Developer / Electronic Engineer" />
            <Layout>
                <p>Hola Jilver</p>
            </Layout>
        </>
    );
};

export default Home;
