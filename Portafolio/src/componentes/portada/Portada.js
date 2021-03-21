import React from 'react';
import "./Portada.css";
import portadaVideo from "../../media/portadaVideo.mp4";

const portada = () => {
    return <div className = "contenedor-portada" >
        <video className = "video" src = {portadaVideo} autoPlay loop muted />    
        <h1>Marlon Restrepo </h1>
        <p>Desarrollador ǀ Diseñador </p>    
    </div>;
};

export default portada
