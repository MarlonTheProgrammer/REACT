import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className = "footer">
            <div className = "footer-info">
                <h1>Marlon Deyber Restrepo Rodríguez</h1>
                <p>Colombia</p>
            </div>
            <div className = "footer-contact">
                <h3>Contactame</h3>
                <p>Whatsapp: +57 3206951693   correo electronico: MarlonTheProgrammer@gmail.com</p>
            </div>
            <div className = "footer-sns">
                <div className = "design-by">
                    Diseñado por Marlon Restrepo
                </div>
                <div className = "sns-links">
                    <a href="https://www.facebook.com/marlon.restrepo.18062/" target="_blank" rel="noreferrer">
                        <i className = "fab fa-facebook in facebook"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/marlon-deyber-restrepo-rodr%C3%ADguez-322824206/" target="_blank" rel="noreferrer">
                        <i className = "fab fa-linkedin  in linkedin"></i>
                    </a>

                    <a href="https://github.com/MarlonTheProgrammer" target="_blank" rel="noreferrer">
                        <i className = "fab fa-github in github"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
