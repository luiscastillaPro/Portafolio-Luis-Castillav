import React, { useState } from 'react';
import '../../styles/proyectoCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faBootstrap, faPython } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle, faExternalLinkAlt, faKey, faDatabase, faBolt, faStar, faFire, faLeaf } from '@fortawesome/free-solid-svg-icons';

import Modal from "../component/modal.jsx";

const ProyectoCard = ({ proyecto, extraClass }) => {
    const [imagenActual, setImagenActual] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [hover, setHover] = useState(false);

    const siguienteImagen = () => {
        const imagenes = proyecto.imagenes;
        if (imagenes) {
            setImagenActual((imagenActual + 1) % imagenes.length);
        }
    };

    const anteriorImagen = () => {
        const imagenes = proyecto.imagenes;
        if (imagenes) {
            setImagenActual((imagenActual - 1 + imagenes.length) % imagenes.length);
        }
    };

    const { titulo, imagenes = [], liveLink, codigoLink, skills, proposito, funcionalidad, tecnologias, tipo } = proyecto;

    const skillIcons = {
        HTML: faHtml5,
        CSS: faCss3Alt,
        JavaScript: faJs,
        React: faReact,
        "Node.js": faNodeJs,
        Bootstrap: faBootstrap,
        Python: faPython,
        SQLAlchemy: faDatabase, // Asegúrate de que este ícono esté importado
        "API REST": faKey, // Asegúrate de que este ícono esté importado
        Vite: faBolt, // Usa el icono de un rayo (puedes buscar alternativas si usas otra librería)
        Astro: faStar, // Un icono de estrella (genérico para Astro)
        Firebase: faFire, // Representado por un icono de fuego
        MongoDB: faLeaf // Representado por una hoja
    };

    return (
        <div className={`proyecto-card fade-in ${extraClass}`}>
            {titulo && (
                <>
                    <div className='proyecto-informativo'>
                        <h2 className='proyecto-titul'>{titulo}</h2>
                        <button onClick={() => setModalVisible(true)} className="info-button">
                            <p className='proyecto-textico'>saber más</p>
                            <FontAwesomeIcon className='iconito' icon={faInfoCircle} />
                        </button>
                    </div>
                    <div
                        className="proyecto-carrusel"
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        <button className="proyecto-boton1" onClick={anteriorImagen}>{"<"}</button>
                        <img className='proyecto-imagen' src={imagenes[imagenActual]} alt={`${titulo} imagen`} loading="lazy" />

                        {/* Contenedor de habilidades con íconos y texto */}
                        <div className={`proyecto-skills-overlay ${hover ? 'show' : ''}`}>
                            {skills && skills.map((skill, index) => {
                                const icon = skillIcons[skill]; // Busca el ícono en el objeto skillIcons
                                return (
                                    <div key={index} className="proyecto-skill-item">
                                        {icon ? ( // Verifica si el ícono existe antes de renderizar
                                            <FontAwesomeIcon icon={icon} className="proyecto-skill-icon" />
                                        ) : (
                                            <span className="proyecto-skill-missing">Icono no disponible</span> // Texto alternativo si el ícono no existe
                                        )}
                                        <span>{skill}</span>
                                    </div>
                                );
                            })}
                        </div>

                        <button className='proyecto-boton2' onClick={siguienteImagen}>{">"}</button>
                    </div>
                    <div className="proyecto-botones">
                        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="proyecto-boton3">
                            <FontAwesomeIcon className='proyecto-icona' icon={faExternalLinkAlt} />
                            Ver sitio en live!
                        </a>
                        <div className="circulos">
                            {imagenes.map((_, index) => (
                                <div
                                    key={index}
                                    className={`circulo ${index === imagenActual ? 'activo' : ''}`}
                                ></div>
                            ))}
                        </div>
                        <a href={codigoLink} target="_blank" rel="noopener noreferrer" className="proyecto-boton4">
                            {"</>"} Ver código
                        </a>
                    </div>
                    <Modal
                        visible={modalVisible}
                        onClose={() => setModalVisible(false)}
                        title={titulo}
                        imagenes={imagenes}
                        skills={skills}
                        proposito={proposito}
                        funcionalidad={funcionalidad}
                        tecnologias={tecnologias}
                        tipo={tipo}
                    />
                </>
            )}
        </div>
    );
};

export default ProyectoCard;
