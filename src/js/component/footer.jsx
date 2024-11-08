import React from "react";
import "../../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
    { icon: faLinkedin, url: "https://www.linkedin.com/in/luiscastillav30/" },
    { icon: faGithub, url: "https://github.com/luiscastillaPro" },
    { icon: faEnvelope, url: "mailto:luis.castillav30@gmail.com" }
];

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="home-redes">
                {socialLinks.map(({ icon, url }, index) => (
                    <a key={index} href={url} target="_blank" rel="noopener noreferrer">
                        <div className="icon-container fade-in-element">
                            <FontAwesomeIcon icon={icon} className="redes-icono" />
                        </div>
                    </a>
                ))}
            </div>
            <p className="footer-text">
                <FontAwesomeIcon icon={faPalette} /> Diseñado y construido por Luis Castilla
            </p>
            <p className="footer-year">¡Gracias por visitar! 
                 &copy; {new Date().getFullYear()}
            </p>
            <div className="navbar-logo">
                <span className="logo-white">Luis</span>
                <span className="logo-orange">coded.</span>
            </div>
        </div>
    );
};

export default Footer;
