import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import foto from "../../img/foto.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleDown, faDownload, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Skills from "../pages/Skills.js";
import Proyectos from "./proyectos.js";
import Contacto from "./Contacto.js";
import Educacion from "./educacion.js";

const socialLinks = [
    { icon: faLinkedin, url: "https://www.linkedin.com/in/luiscastillav30/" },
    { icon: faGithub, url: "https://github.com/luiscastillaPro" },
    { icon: faEnvelope, url: "mailto:luis.castillav30@gmail.com" }
];

const Home = () => {
    const [displayText, setDisplayText] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);
    const fullText = "Full Stack Developer";

    useEffect(() => {
        let index = 0;
        let isDeleting = false;

        const typeEffect = () => {
            if (index < fullText.length && !isDeleting) {
                setDisplayText((prev) => prev + fullText.charAt(index++));
                setTimeout(typeEffect, 150);
            } else if (index === fullText.length && !isDeleting) {
                setTimeout(() => { isDeleting = true; typeEffect(); }, 1000);
            } else if (index > 0 && isDeleting) {
                setDisplayText((prev) => prev.slice(0, -1));
                index--;
                setTimeout(typeEffect, 150);
            } else if (index === 0 && isDeleting) {
                isDeleting = false;
                setTimeout(typeEffect, 1000);
            }
        };
        typeEffect();

        const cursorTimer = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 500);

        return () => clearInterval(cursorTimer);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll(".fade-in-element");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => observer.observe(section));
        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    return (
        <div className="home-container fade-in-element">
            <div className="home-contai fade-in-element">
                <div className="home-con1 fade-in-element">
                    <h3 className="home-bienvenido fade-in-element">Disponible para Trabajar</h3>
                    <p className="home-texto fade-in-element">Hola, mi nombre es</p>
                    <h1 className="home-titulo fade-in-element">Luis Castilla</h1>
                    <p className="home-texto fade-in-element">Y soy </p>
                    <h2 className="home-full fade-in-element">
                        {displayText}
                        {cursorVisible && <span className="cursor">|</span>}
                    </h2>
                    <h6 className="home-intro fade-in-element">
                        Apasionado por la tecnología y el desarrollo web, he desarrollado habilidades tanto en el front-end como en el back-end, lo que me permite tener una visión integral del ciclo de desarrollo de software.
                        Comprometido con el aprendizaje continuo, siempre enfocado en mejorar mis habilidades y en mantenerme al día con las últimas tendencias tecnológicas.
                    </h6>
                    <div className="button-group">
                        <a href="https://drive.google.com/uc?export=download&id=1FJXKzgC5stMr66OCcgYsFG_EoLXDuz9U" download="CV_Luis_Castilla.pdf">
                            <button className="contact-button fade-in-element">
                                Descargar CV
                                <FontAwesomeIcon icon={faDownload} className="download-icon" />
                            </button>
                        </a>
                        <a href="#contacto">
                            <button className="contact-button fade-in-element">
                                Contáctame
                                <FontAwesomeIcon icon={faUser} className="user-icon" />
                            </button>
                        </a>
                    </div>
                </div>
                <div className="home-perfil fade-in-element">
                    <div className="home-con2">
                        <img className="foto-perfil" src={foto} alt="Luis Castilla" />
                    </div>
                    <div className="home-redes">
                        {socialLinks.map(({ icon, url }, index) => (
                            <a key={index} href={url} target="_blank" rel="noopener noreferrer">
                                <div className="icon-container fade-in-element">
                                    <FontAwesomeIcon icon={icon} className="redes-icono" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <ScrollIndicator1 />
            <section id="skills"><Skills /></section>
            <ScrollIndicator2 />
            <section id="proyectos"><Proyectos /></section>
            <ScrollIndicator />
            <section id="educacion"><Educacion /></section>
            <ScrollIndicator3 />
            <section id="contacto"><Contacto /></section>
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
