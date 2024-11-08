import React, { useEffect, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaPen, FaUsers } from 'react-icons/fa';
import "../../styles/contacto.css";

const Contacto = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: ""
    });

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("visible", entry.isIntersecting);
            });
        }, { threshold: 0.5 });

        document.querySelectorAll(".input-icon-container").forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowConfirmation(true);

        setFormData({
            nombre: "",
            email: "",
            asunto: "",
            mensaje: ""
        });

        setTimeout(() => {
            setShowConfirmation(false);
        }, 8000);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div id="contacto" className="contacto-container fade-in">
            <h2 className="contact-title">
                <FaUsers className="contact-icon" /> Contacto
            </h2>
            <div className="contacto-contin fade-in">
                <div className="contact-info fade-in">
                    <h3>Hablemos</h3>
                    {[
                        { icon: <FaPhone />, text: "+34 641992406" },
                        { icon: <FaEnvelope />, text: "luis.castillav30@gmail.com" },
                        { icon: <FaMapMarkerAlt />, text: "Sineu, Palmas de Mallorca" }
                    ].map(({ icon, text }, index) => (
                        <div key={index} className="contact-detail">
                            <span className="contacto-ico">{icon}</span>
                            <p>{text}</p>
                        </div>
                    ))}
                    <p className="contacto-mensajee">¡No dudes en contactarme!</p>
                </div>
                <div className="contact-form fade-in">
                    <form onSubmit={handleSubmit}>
                        <label className="input-icon-container slide-left">
                            <input
                                type="text"
                                name="nombre"
                                required
                                placeholder="Tu nombre"
                                style={{ color: "black" }}
                                value={formData.nombre}
                                onChange={handleChange}
                            />
                            <span className="input-icon"><FaUser /></span>
                            <span className="error-message">El nombre es requerido</span>
                        </label>
                        <label className="input-icon-container slide-right">
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Tu email"
                                style={{ color: "black" }}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <span className="input-icon"><FaEnvelope /></span>
                            <span className="error-message">El email es requerido</span>
                        </label>
                        <label className="input-icon-container slide-left">
                            <input
                                type="text"
                                name="asunto"
                                required
                                placeholder="Asunto"
                                style={{ color: "black" }}
                                value={formData.asunto}
                                onChange={handleChange}
                            />
                            <span className="input-icon"><FaPen /></span>
                            <span className="error-message">El asunto es requerido</span>
                        </label>
                        <label className="input-icon-container slide-right">
                            <textarea
                                name="mensaje"
                                required
                                placeholder="Escriba su mensaje..."
                                style={{ color: "black" }}
                                value={formData.mensaje}
                                onChange={handleChange}
                            ></textarea>
                            <span className="error-message">El mensaje es requerido</span>
                        </label>
                        <button type="submit">Enviar</button>
                    </form>
                    {showConfirmation && (
                        <p className="confirmation-message">¡Gracias! Tu mensaje ha sido enviado exitosamente.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contacto;
