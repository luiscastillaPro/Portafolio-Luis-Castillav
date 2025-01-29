import React, { useEffect } from "react";
import { FaTools } from 'react-icons/fa';
import "../../styles/skills.css";
import "../../styles/home.css"; 
import html from "../../img/skills/html.webp";
import css from "../../img/skills/css.webp";
import javascript from "../../img/skills/javascript.webp";
import react from "../../img/skills/react.webp";
import node from "../../img/skills/node.webp";
import git from "../../img/skills/git.webp";
import github from "../../img/skills/github.webp";
import bootstrap from "../../img/skills/bootstrap.webp";
import python from "../../img/skills/python.webp";
import sql from "../../img/skills/sql.webp";
import flask from "../../img/skills/flask.webp";
import jwt from "../../img/skills/jwt.webp";
import response from "../../img/response.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    useEffect(() => {
        const handleScroll = () => {
            const fadeElements = document.querySelectorAll(".fade-in, .fade-in-image, .fade-in-paragraph");
            fadeElements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight - 150) {
                    element.classList.add("visible");
                } else {
                    element.classList.remove("visible");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const skillsData = [
        { src: html, name: "HTML5" },
        { src: css, name: "CSS3" },
        { src: javascript, name: "JavaScript" },
        { src: react, name: "React" },
        { src: node, name: "Node.js" },
        { src: git, name: "Git" },
        { src: github, name: "GitHub" },
        { src: bootstrap, name: "Bootstrap" },
        { src: python, name: "Python" },
        { src: sql, name: "SQL" },
        { src: flask, name: "Flask" },
        { src: jwt, name: "JWT" },
    ];

    return (
        <div id="skills" className="skills-container">
            <h2 className="skills-title fade-in">
                <FaTools className="skills-icon" />
                Habilidades
            </h2>
            <div className="skills-content">
                <div className="skills-left-column fade-in">
                    <div className="skills-table">
                        {skillsData.map((skill, index) => (
                            <div key={index} className="skill-item fade-in">
                                <img src={skill.src} alt={skill.name} loading="lazy" />
                                <span className="skill-text">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="skills-right-column">
                    <img src={response} alt="Responsive Design" className="responsive-image fade-in-image" loading="lazy" />
                    <p className="skills-description fade-in-paragraph">
                        Como desarrollador Full Stack, manejo una variedad de tecnologías clave tanto en el frontend como en el backend, incluyendo HTML, CSS, JavaScript, React, Node.js, Python, SQL y Flask. he trabajado con herramientas y frameworks como Bootstrap para el diseño, Git y GitHub para el control de versiones, y SQLAlchemy y JWT para la autenticación y la gestión de bases de datos. Me aseguro de que cada proyecto sea completamente responsivo. puedo llevar un proyecto desde su concepción hasta su implementación final.
                    </p>
                    <div className="button-group fade-in-image">
                        <a href="#contacto">
                            <button className="contact-button fade-in-element">
                                Contáctame
                                <FontAwesomeIcon icon={faUser} className="user-icon" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
