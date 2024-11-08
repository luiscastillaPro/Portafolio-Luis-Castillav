import React from "react";
import ReactDOM from "react-dom";
import "../../styles/modal.css";

const Modal = ({ visible, onClose, title, imagenes, skills, proposito, funcionalidad, tecnologias, tipo }) => {
    if (!visible) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-separador">
                <h1 className="modal-title">{title}</h1>
                <button onClick={onClose} className="close-button" aria-label="Close modal">Volver</button>
                </div>
                
                <img src={imagenes.length > 0 ? imagenes[0] : ""} alt={title} className="modal-image" />
                <div className="modalito">
                    <div className="modal-proyect-caracteristi">
                        <h2>Propósito del sitio web</h2>
                        <p>{proposito}</p>
                        <h2>Funcionalidad del sitio web</h2>
                        <p>
                        {funcionalidad && funcionalidad.map((funcionalidad, index) => (
                                <li key={index}>{funcionalidad}</li>
                            ))}
                        </p>
                        <h2>Tecnologías utilizadas</h2>
                        <p>
                        {tecnologias && tecnologias.map((tecnologias, index) => (
                                <li key={index}>{tecnologias}</li>
                            ))}
                        </p>
                    </div>
                    <div className="modal-proyect-details">
                        <h2 className="modal-til">Detalles del proyecto</h2>
                        <div className="modal-propi1">
                        <h5>Nombre:</h5>
                        <p>{title}</p>
                        </div>
                        <h5>Habilidades:</h5>
                        <ul className="skills-list modal-propi1">
                            {skills && skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                        <h5>Categoría:</h5>
                        <p>{tipo}</p>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
