import React from "react";
import Layout from "../src/components/layout/layout";
import About from "../src/components/sections/about/About";
import Hero from "../src/components/sections/hero/Hero";
import { Seo } from "../src/seo";

const Home = () => {
    return (
        <>
            <Seo
                lang="en"
                title="Jilver Pacheco — Frontend Developer / Electronic Engineer"
            />
            <Layout>
                <Hero />
                <About />
            </Layout>
        </>
    );
};

export default Home;
