import React, { useEffect } from "react";
import { FaClipboardList } from 'react-icons/fa';
import ProyectoCard from '../component/proyectoCard.jsx';
import portada from "../../img/HooBoo/portada.jpeg";
import primera from "../../img/HooBoo/primera.jpeg";
import segunda from "../../img/HooBoo/segunda.jpeg";
import tercera from "../../img/HooBoo/tercera.jpeg";
import cuarta from "../../img/HooBoo/cuarta.jpeg";
import quinta from "../../img/HooBoo/quinta.jpeg";
import portadaa from "../../img/todolist/portada1.jpeg";
import imagen1 from "../../img/todolist/imagen1.jpeg";
import imagen2 from "../../img/todolist/imagen2.jpeg";
import imagen3 from "../../img/todolist/imagen3.jpeg";
import imagen4 from "../../img/todolist/imagen4.jpeg";
import portada2 from "../../img/contactlist/portada2.jpeg";
import contact1 from "../../img/contactlist/contact1.jpeg";
import contact2 from "../../img/contactlist/contact2.jpeg";
import construccion from "../../img/construccion.jpeg";
import "../../styles/proyectos.css";

const proyectosData = [
  {
    titulo: "HooBoo",
    imagenes: [portada, primera, segunda, tercera, cuarta, quinta],
    liveLink: "https://sample-service-name-nn8y.onrender.com/",
    codigoLink: "https://github.com/luiscastillaPro/HooBoo",
    skills: ["React", "Node.js", "JavaScript", "API REST", "Python", "SQLAlchemy"],
    proposito: "HooBoo es una plataforma interactiva diseñada para conectar a lectores y escritores a través de una experiencia social centrada en la literatura. Los usuarios pueden explorar una amplia variedad de libros, compartir reseñas, y conectarse con otros lectores, mientras disfrutan de un diseño visualmente atractivo y adaptable. HooBoo no solo fomenta la lectura, sino que también promueve el crecimiento de nuevos lectores y escritores, ofreciendo una experiencia literaria única.",
    funcionalidad: ["Exploración de Libros: Todos los usuarios pueden navegar y buscar libros en una biblioteca visualmente atractiva.", "Interacción Social: Los usuarios registrados pueden añadir libros a favoritos, comentar, y compartir reseñas.", "Personalización: Opción de cambiar entre modo claro y oscuro.", "Gestión de Perfil: Los usuarios pueden personalizar su avatar, nombre de usuario y configuración de privacidad.", "Calificación y Opinión del Usuario: Sistema de calificación visible para todos los visitantes, que recopila y muestra una media basada en los votos de los usuarios."],
    tecnologias: ["Google Books API: Permite acceder a una biblioteca extensa de libros, con detalles como descripción, imágenes y autores.", "Commento: Gestiona el sistema de comentarios para fomentar la interacción de los usuarios.", "CHATRA: Integración de un chat en vivo para mejorar la experiencia de usuario.", "Base de Datos de Usuarios: Almacena credenciales, preferencias de usuario, y tokens de autenticación.", "Base de Datos de Libros de Respaldo: Incluye información relevante de los libros para garantizar disponibilidad aún sin conexión a Google Books.", "Base de Datos de Calificaciones: Recopila y promedia calificaciones de usuarios, proporcionando feedback valioso."],
    tipo: "Aplicacion Web"
  },
  {
    titulo: "Todo List",
    imagenes: [portadaa, imagen1, imagen2, imagen3, imagen4],
    liveLink: "",
    codigoLink: "https://github.com/luiscastillaPro/luis-castilla-lista-de-tareas",
    skills: ["React", "Bootstrap", "API REST", "JavaScript", "HTML", "CSS"],
    proposito: "El objetivo de esta aplicación es ayudar a los usuarios a organizar sus tareas diarias de manera eficiente, permitiéndoles agregar, editar y eliminar tareas en una interfaz intuitiva.",
    funcionalidad: ["Gestión de Tareas: Los usuarios pueden agregar nuevas tareas, marcarlas como completadas o pendientes, y eliminarlas según sea necesario.", "Edición de Tareas: Opción para modificar la descripción o detalles de una tarea ya creada.", "Filtrado de Tareas: Posibilidad de filtrar y visualizar tareas completadas, pendientes, o todas las tareas a la vez.", "Interfaz Responsiva: Diseño adaptativo que se ajusta a cualquier dispositivo, ya sea móvil, tablet o computadora.", "Almacenamiento Persistente: Uso de almacenamiento local o base de datos para que las tareas se mantengan disponibles al recargar la página."],
    tecnologias: ["React: Biblioteca de JavaScript usada para construir una interfaz de usuario interactiva y eficiente.", "Bootstrap: Framework de CSS que facilita el diseño responsivo y estilizado de la aplicación.", "API REST: Conexión a una API para almacenar y recuperar las tareas del usuario de forma remota.", "LocalStorage: Permite que los datos de las tareas persistan incluso al recargar la página, si no hay conexión con la API.", "React Hooks: Utilización de hooks como useState y useEffect para manejar el estado y los ciclos de vida del componente."],
    tipo: "Aplicacion Web"
  },
  {
    titulo: "Contact List",
    imagenes: [portada2, contact1, contact2],
    liveLink: "",
    codigoLink: "https://github.com/luiscastillaPro/luiscastilla-listaDeContactos",
    skills: ["JavaScript", "HTML", "CSS", "Bootstrap", "React", "API REST"],
    proposito: "Contact List es una aplicación que permite a los usuarios gestionar y organizar sus contactos de manera eficiente y segura. La plataforma ofrece una interfaz simple e intuitiva que facilita la búsqueda, edición y eliminación de contactos. Este proyecto demuestra habilidades en el manejo de datos a través de una API REST y el diseño de interfaces atractivas y funcionales usando React y Bootstrap.",
    funcionalidad: ["Agregar Contactos: Los usuarios pueden añadir nuevos contactos con información detallada, como nombre, número de teléfono, dirección de correo y otros datos relevantes.", "Edición de Contactos: Posibilidad de actualizar la información de un contacto existente.", "Eliminación de Contactos: Los usuarios pueden eliminar contactos de manera sencilla y rápida.", "Búsqueda de Contactos: Permite buscar contactos por nombre o información de contacto específica para encontrarlos rápidamente.", "Vista en Modal: Cada contacto se puede ver en un modal o tarjeta que muestra toda la información relevante del contacto.", "Diseño Responsivo: La interfaz es adaptable a dispositivos móviles y de escritorio para una experiencia de usuario óptima."],
    tecnologias: ["React: Framework de JavaScript para la creación de interfaces de usuario interactivas y dinámicas.", "Bootstrap: Biblioteca de CSS que facilita el diseño responsivo y estilos prediseñados.", "API REST: Implementada para la comunicación y manejo de datos de los contactos, permitiendo crear, leer, actualizar y eliminar información.", "Local Storage: Utilizado para almacenar los datos de los contactos en el navegador, asegurando que se mantengan accesibles incluso sin conexión.", "JavaScript: Lenguaje de programación utilizado para la lógica de la aplicación y manejo de eventos en la interfaz.", "HTML y CSS: Tecnologías base para la estructura y estilos del proyecto, proporcionando una experiencia visual y de usuario agradable."],
    tipo: "Aplicacion Web"
  },
  {
    titulo: "Gosh",
    imagenes: [construccion], 
    liveLink: "", 
    codigoLink: "",
    skills: ["React", "Bootstrap", "API REST", "JavaScript", "HTML", "CSS"],
    proposito: "Gosh es una aplicación en desarrollo que tiene como objetivo ofrecer una experiencia innovadora.",
    funcionalidad: ["Esta sección estará disponible cuando el proyecto esté más avanzado.","En su versión final, Gosh ofrecerá una experiencia personalizada para los usuarios."],
    tecnologias: ["React: Para la creación de componentes interactivos y dinámicos en la interfaz de usuario.","Bootstrap: Proporciona una base sólida para el diseño responsivo y moderno.","API REST: Facilitará la comunicación entre el frontend y los datos almacenados en el backend.","JavaScript, HTML y CSS: Tecnologías base para la estructura y estilo de la aplicación."],
    tipo: "Proyecto en desarrollo - funcionalidad y enlaces disponibles próximamente."
  },
];

const Proyectos = () => {
  useEffect(() => {
    const handleScroll = () => {
      const fadeElements = document.querySelectorAll(".fade-in");
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

  return (
    <div id="proyectos" className="proyectos-contain">
      <h1 className="proyectos-title fade-in">
        <FaClipboardList className="projects-icon" /> Proyectos
      </h1>
      <div className="proyectos-container">
        {proyectosData.map((proyecto, index) => (
          <ProyectoCard
            key={index}
            proyecto={proyecto}
            extraClass={index === 1 || index === 3 ? 'slide-right' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
