import React, { useEffect } from "react";
import { FaClipboardList } from 'react-icons/fa';
import ProyectoCard from '../component/proyectoCard.jsx';
import portada from "../../img/HooBoo/portada.webp";
import primera from "../../img/HooBoo/primera.webp";
import segunda from "../../img/HooBoo/segunda.webp";
import tercera from "../../img/HooBoo/tercera.webp";
import cuarta from "../../img/HooBoo/cuarta.webp";
import quinta from "../../img/HooBoo/quinta.webp";
import portadaa from "../../img/todolist/portada1.webp";
import imagen1 from "../../img/todolist/imagen1.webp";
import imagen2 from "../../img/todolist/imagen2.webp";
import imagen3 from "../../img/todolist/imagen3.webp";
import imagen4 from "../../img/todolist/imagen4.webp";
import portada2 from "../../img/contactlist/portada2.webp";
import contact1 from "../../img/contactlist/contact1.webp";
import contact2 from "../../img/contactlist/contact2.webp";
import tetrisini from "../../img/Tetris/tetrisini.webp";
import tetrisconte from "../../img/Tetris/tetrisconte.webp";
import tetrisnivel from "../../img/Tetris/tetrisnivel.webp";
import tetrisover from "../../img/Tetris/tetrisover.webp";
import tetrispuntos from "../../img/Tetris/tetrispuntos.webp";
import construccion from "../../img/construccion.webp";
import cashperfil from "../../img/CashUp/cash-perfil.webp";
import cashregistro from "../../img/CashUp/cash-registro.webp";
import cashprincipal from "../../img/CashUp/cash-principal.webp";
import cashlogin from "../../img/CashUp/cash-login.webp";
import cashgastos from "../../img/CashUp/cash-gastos.webp";
import cashcategoria from "../../img/CashUp/cash-categoria.webp";
import cashcategoriadesplegable from "../../img/CashUp/cash-categoria-desplegable.webp";
import inversores1 from "../../img/Inversores/inversores1.webp";
import inversores2 from "../../img/Inversores/inversores2.webp";
import inversores3 from "../../img/Inversores/inversores3.webp";
import inversores4 from "../../img/Inversores/inversores4.webp";
import inversores5 from "../../img/Inversores/inversores5.webp";
import inversores6 from "../../img/Inversores/inversores6.webp";
import inversores7 from "../../img/Inversores/inversores7.webp";
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
    titulo: "Juego Tetris",
    imagenes: [tetrisnivel, tetrisover, tetrisini, tetrisconte, tetrispuntos],
    liveLink: "https://tetris-luis-castilla.vercel.app/",
    codigoLink: "https://github.com/luiscastillaPro/Tetris-Luis-Castilla",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    proposito: "El propósito de este juego es recrear la clásica experiencia de Tetris, desafiando a los jugadores a encajar piezas de diferentes formas en un espacio limitado. El juego busca ofrecer entretenimiento mientras pone a prueba las habilidades cognitivas y de resolución de problemas de los usuarios, mejorando su rapidez y capacidad de tomar decisiones bajo presión. ",
    funcionalidad: ["Juego de Tetris: El jugador debe mover y rotar las piezas de diferentes formas para que encajen en el espacio disponible.", "Cuenta Regresiva: Antes de que inicie el juego, hay una cuenta regresiva que añade emoción al comenzar.", "Puntajes y Niveles: El juego aumenta en dificultad conforme se eliminan filas, aumentando la velocidad de las piezas y acumulando puntos.", "Sonidos y Música: Incluye efectos de sonido para el inicio del juego, las eliminaciones de filas, y un sonido para cuando el jugador pierde.", "Sistema de Game Over: El juego termina cuando las piezas llegan a la parte superior de la pantalla, y permite reiniciar desde el final.",],
    tecnologias: ["React: Biblioteca de JavaScript para construir una interfaz interactiva y administrar el estado del juego.", "HTML y CSS: Usados para estructurar y diseñar la interfaz visual del juego.", "JavaScript: Lenguaje de programación principal para la lógica del juego, incluyendo la gestión del tablero, las piezas y los puntajes.", "Hooks de React (useState, useEffect): Para manejar el estado del juego y los efectos, como la cuenta regresiva y la actualización del puntaje.", "Audio: Reproductores de audio para efectos de sonido y música de fondo.",],
    tipo: "Juego Web"
  },
  {
    titulo: "CashUp",
    imagenes: [cashlogin, cashprincipal, cashcategoria, cashgastos, cashregistro, cashperfil, cashcategoriadesplegable],
    liveLink: "https://cash-up-eight.vercel.app/login",
    codigoLink: "https://github.com/luiscastillaPro/CashUp",
    skills: ["API REST", "React", "JavaScript", "Firebase", "CSS", "Node.js"],
    proposito: "El propósito de CashUp es brindar una herramienta intuitiva y práctica para gestionar las finanzas personales de manera eficiente. Permite a los usuarios registrar ingresos, gastos y categorizarlos, proporcionando una visión clara de su salud financiera. Esta aplicación está diseñada para ayudar a las personas a mejorar su administración del dinero, identificar patrones de gasto y tomar decisiones informadas para lograr sus objetivos financieros.",
    funcionalidad: ["Inicio de Sesión y Registro: Los usuarios pueden crear una cuenta o iniciar sesión para acceder a sus datos financieros personales.", "Gestión de Categorías: Permite a los usuarios crear, editar y eliminar categorías de gastos para una mejor organización.", "Registro de Transacciones: Los usuarios pueden registrar ingresos y gastos, especificando la categoría y el monto.", "Visualización de Gastos por Categoría: Una vista detallada que muestra los gastos organizados por categorías, ayudando a identificar áreas de alto gasto.", "Resumen Financiero: Muestra un balance general de ingresos, gastos y saldo restante en tiempo real.", "Interfaz Responsive: La aplicación está optimizada para dispositivos móviles, tabletas y computadoras.", "Sistema Seguro: Los datos de usuario están protegidos utilizando autenticación Firebase.", "Alertas y Límites: Notificaciones visuales para alertar al usuario cuando se acerque a un límite de gasto establecido."],
    tecnologias: ["React: Utilizado para construir la interfaz de usuario dinámica y manejar el estado de la aplicación.", "JavaScript: Lenguaje de programación principal para la lógica de la aplicación y la interacción con el backend.", "Firebase Authentication: Proporciona un sistema de inicio de sesión seguro para los usuarios.", "Firebase Firestore: Base de datos en tiempo real para almacenar y recuperar las transacciones financieras del usuario.", "HTML y CSS: Usados para estructurar y diseñar la aplicación, garantizando una experiencia visual atractiva.", "API REST: Implementada para manejar la lógica de negocio y la interacción con el backend.", "Hooks de React (useState, useEffect, useContext): Para gestionar estados, efectos y contexto de la aplicación.", "Responsiveness: Adaptación de la interfaz a diferentes dispositivos con diseño responsive usando CSS Grid y Flexbox."],
    tipo: "Aplicacion Web"
  },
  {
    titulo: "Inversores",
    imagenes: [inversores1, inversores2, inversores3, inversores4, inversores5, inversores6, inversores7],
    liveLink: "https://inversores-inmobiliario.vercel.app/",
    codigoLink: "https://github.com/luiscastillaPro/Inversores-inmobiliario",
    skills: ["React", "Bootstrap", "Firebase", "JavaScript", "Astro", "Vite"],
    proposito: "El propósito de la landing page Inversores es captar la atención de posibles clientes interesados en inversiones inmobiliarias, presentando información clara, atractiva y organizada sobre los beneficios y oportunidades del mercado. Diseñada para crear confianza, esta página busca generar leads a través de un formulario de contacto y destacar la experiencia y profesionalismo de la empresa.",
    funcionalidad: [
      "Sección de Presentación: Una introducción visualmente atractiva con imágenes y un eslogan que resalta el enfoque principal del negocio.",
      "Sección de Servicios: Explica los principales servicios y beneficios que ofrece la empresa a los inversores.",
      "Formulario de Contacto: Permite a los usuarios interesados dejar sus datos para ser contactados por la empresa.",
      "Sección de Testimonios: Incluye comentarios de clientes satisfechos que refuerzan la credibilidad del negocio.",
      "Diseño Responsive: La página está optimizada para ser visualizada correctamente en dispositivos móviles, tabletas y computadoras.",
      "Optimización para SEO: La estructura y el contenido de la página están diseñados para mejorar su posicionamiento en motores de búsqueda.",
      "Animaciones Sutiles: Efectos visuales para mejorar la experiencia del usuario sin distraer del contenido principal."
    ]
    ,
    tecnologias: [
      "React: Utilizado para crear los componentes de la interfaz de usuario de manera dinámica y eficiente.",
      "Bootstrap: Framework utilizado para el diseño responsive y los estilos predefinidos.",
      "Firebase: Usado para gestionar la base de datos del formulario de contacto y posibles integraciones futuras.",
      "JavaScript: Lenguaje principal para la lógica de la aplicación y la interacción dinámica con los componentes.",
      "Astro: Framework para construir sitios estáticos rápidos y optimizados.",
      "Vite: Herramienta de desarrollo utilizada para la configuración y el despliegue rápido del proyecto.",
      "HTML y CSS: Usados para estructurar y estilizar el contenido, garantizando una experiencia visual profesional.",
      "SEO Básico: Implementación de etiquetas y metadatos clave para mejorar el posicionamiento en buscadores."
    ]
    ,
    tipo: "Landing Page"
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
    skills: ["React", "Bootstrap", "API REST", "JavaScript", "MongoDB", "CSS"],
    proposito: "Gosh es una aplicación en desarrollo que tiene como objetivo ofrecer una experiencia innovadora.",
    funcionalidad: ["Esta sección estará disponible cuando el proyecto esté más avanzado.", "En su versión final, Gosh ofrecerá una experiencia personalizada para los usuarios."],
    tecnologias: ["React: Para la creación de componentes interactivos y dinámicos en la interfaz de usuario.", "Bootstrap: Proporciona una base sólida para el diseño responsivo y moderno.", "API REST: Facilitará la comunicación entre el frontend y los datos almacenados en el backend.", "JavaScript, HTML y CSS: Tecnologías base para la estructura y estilo de la aplicación."],
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
