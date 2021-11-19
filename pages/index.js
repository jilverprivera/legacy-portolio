import React from "react";

import Layout from "../src/components/layout/layout";
import { Seo } from "../src/seo";

import Hero from "../src/components/sections/hero/Hero";
import About from "../src/components/sections/about/About";
import Portfolio from "../src/components/sections/portfolio/Portfolio";
import Contact from "../src/components/sections/contact/Contact";

const Home = ({ profile }) => {
    return (
        <>
            <Seo
                lang="es"
                title="Jilver Pacheco — Desarrollador Frontend / Ingeniero Electrónico"
            />
            <Layout>
                <Hero />
                <About />
                <Portfolio />
                <Contact />
            </Layout>
        </>
    );
};

export default Home;
