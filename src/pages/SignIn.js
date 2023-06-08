import React from 'react';
import SignInStyle from '../styles/SignInStyle';
import logo from '../images/logo.png';
import { TiSocialFacebook } from "react-icons/ti";


const SignIn = () => {
    return (
        <SignInStyle>
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
        </SignInStyle>
    )
}

export default SignIn;