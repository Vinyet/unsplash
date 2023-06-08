import React from 'react';
import ModalWrapper from '../styles/ModalWrapper';
import ModalSignInStyle from '../styles/ModalSignInStyle';
import logo from '../images/logo.png';
import { TiSocialFacebook } from "react-icons/ti";


const Modal = props => {
    return (
        <ModalWrapper>
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-body">
                    <ModalSignInStyle>
                        <div className="sign-in-container">
                            <img src={logo} alt="Unsplash logo" />
                            <h2>Iniciar sesión</h2>
                            <p>Te damos la bienvenida.</p>
                            <button className="fb-btn" onClick={() => alert("Inicio sesión con Facebook")}><span><TiSocialFacebook /></span>Inicia sesión con Facebook</button>
                            <p>o</p>
                            <form>
                                <label className="email-label">Email</label>
                                <input type="email" />
                                <div className="password-field">
                                    <label>Contraseña</label>
                                    <a href="#">¿Has olvidado tu contraseña?</a>
                                </div>
                                <input type="password" />
                                <button className="signin-btn" onClick={() => alert("Esta opción no está habilitada.")}>Iniciar sesión</button>
                            </form>
                            <div className="register-box">
                                <p>¿Aún no tienes una cuenta? <a href="/signup">Registrarse</a></p>
                            </div>
                        </div>
                    </ModalSignInStyle>
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
        </ModalWrapper>
    )
}

export default Modal;
