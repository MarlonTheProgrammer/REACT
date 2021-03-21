import React from 'react';
import "./About.css";
import picture from "../about/picture.jpg"



const About = () => {
    return (
        <div className = "about-container">
            <div className = "about-desc ">
                <h3> Dejame contarte acerca de mi </h3>
                <p>Soy un programador y diseñador apasionado, nacido y criado en colombia. Soy estudiante de ingenieria en sistemas y computación, a lo largo de mi carrera estudiantil he
                desarrollado proyectos en diferentes plataformas con diferentes lenguajes de programación.
                Me facina aprender acerca de nuevas tecnologias y herramientas de desarrollo para adaptarlas a nuevos proyectos.</p>
            </div>

            <div className = "about-img">
                <img src = {picture}  alt="about"/>
            </div>
            
        </div>
    )
}

export default About
