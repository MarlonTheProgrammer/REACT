import React from 'react';
import "./Slider.css";

  
const slidesInfo = [
    {
        src: "https://data.barcelona/wp-content/uploads/2020/06/lenguaje-de-programacion-Python.jpg",
        href: "https://www.xvideos.com/"
    
    },

    {
        src: "https://lh3.googleusercontent.com/proxy/cVjSz_hFgWjcxSnfK0j5SV09c62Jf2lF8bhxCOA7OoK79rjLPtgP_orvQ1GbOMm7VIUrKK8ZRn4BSRPjtUJ1AXJLs61H6xkSr62QIwefnUPkitR8xmtPTDcXfRVl3XJJGn98mXNWo8cZqzv9vQ3RgRaPqg",
        href: "https://www.cuantocabron.com/"
    },

    {
        src: "https://i0.wp.com/evilnapsis.com/wp-content/uploads/2019/02/Webp.net-resizeimage-7.jpg?fit=960%2C540",
        href: "https://github.com/MarlonTheProgrammer/JAVA/tree/main" 
    },
]

const slides = slidesInfo.map(slide =>(
    <div className = "slide-container">
     <a href = {slide.href} target="_blank" rel="noreferrer"><img src = {slide.src} alt ={slide.alt}></img></a>
        <div className = "slide-desc">
            <span>{slide.desc}</span>
        </div>
        
    </div>
))

export default slides;