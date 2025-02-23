import React, { Suspense, lazy } from "react";
import "../../styles/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import Homesito from "../component/Homesito.jsx";

const Skills = lazy(() => import("../pages/Skills.js"));
const Proyectos = lazy(() => import("./proyectos.js"));
const Educacion = lazy(() => import("./educacion.js"));
const Contacto = lazy(() => import("./Contacto.js"));

const Home = () => {

    return (
        <div className="fade-in-element">
            <Homesito />
            <ScrollIndicator1 />
            <section id="skills">
                <Suspense fallback={<div>Loading...</div>}>
                    <Skills />
                </Suspense>
            </section>
            <ScrollIndicator2 />
            <section id="proyectos">
                <Suspense fallback={<div>Loading...</div>}>
                    <Proyectos />
                </Suspense>
            </section>
            <ScrollIndicator />
            <section id="educacion">
                <Suspense fallback={<div>Loading...</div>}>
                    <Educacion />
                </Suspense>
            </section>
            <ScrollIndicator3 />
            <section id="contacto">
                <Suspense fallback={<div>Loading...</div>}>
                    <Contacto />
                </Suspense>
            </section>
        </div>
    );
};

const ScrollIndicator = () => (
    <div className="scroll-indicator">
        <FontAwesomeIcon icon={faAngleDoubleDown} className="down-arrow" />
    </div>
);

const ScrollIndicator1 = () => (
    <div className="scroll-indicator-educacion">
        <FontAwesomeIcon icon={faAngleDoubleDown} className="down-arrow" />
    </div>
);

const ScrollIndicator2 = () => (
    <div className="scroll-indicator-skills">
        <FontAwesomeIcon icon={faAngleDoubleDown} className="down-arrow" />
    </div>
);

const ScrollIndicator3 = () => (
    <div className="scroll-indicator-proyectos">
        <FontAwesomeIcon icon={faAngleDoubleDown} className="down-arrow" />
    </div>
);

export default Home;
