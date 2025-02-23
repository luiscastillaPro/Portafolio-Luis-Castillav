import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.js";
import Navbar from "./component/navbar.jsx";
import ParticlesBackground from "./component/ParticlesBackground.jsx";
import Footer from "./component/footer.jsx";

const Layout = () => {

    return (
        <BrowserRouter>
            <ParticlesBackground />
            <Navbar />
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<h1>Not found!</h1>} path="*" />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Layout;
