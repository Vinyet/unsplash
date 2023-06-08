import React from 'react';
import SignUpStyle from '../styles/SignUpStyle';
import logo from '../images/logo.png';
import { TiSocialFacebook } from "react-icons/ti";
import { NavLink } from 'react-router-dom';


const SignUp = () => {
    return (
        <SignUpStyle>
        <div className="main-container">
            <div className="sidebar">
                <img src={logo} alt="Unsplash logo" />
                <h3>La creación comienza aquí</h3>
                <h5>Accede a 4.883.033 fotos gratis en alta resolución que no encontrarás en ningún otro sitio</h5>
                <p>Subido hace alrededor de 3 horas por Kate Tepl</p>
            </div>
            <div className="form-container">
                <h2>Únete a Unsplash</h2>
                <p>¿Ya tienes una cuenta?</p>
                <NavLink to="/signin">Iniciar sesión</NavLink>
                <button className="fb-btn" onClick={() => alert("Unirse con Facebook")}><span><TiSocialFacebook /></span>Únete mediante Facebook</button>
                <p className="o">o</p>
                <form>
                    <div className="form-names">
                        <div>
                            <label>Nombre</label>
                            <input style={{ marginRight: '-120px' }} type="text" /> 
                        </div>
                        <div>
                            <label>Apellidos</label>
                            <input type="text" />
                        </div>
                    </div>
                        <label>Email</label>
                        <input type="email" />
                        <label>Nombre de usuario <span style={{ color: "gray"}}>(únicamente letras, números y guiones bajos)</span></label>
                        <input type="text" />
                        <label>Contraseña <span style={{ color: "gray"}}>(mín. 8 caracters)</span></label>
                        <input type="password" />
                        <button className="signup-btn" onClick={() => alert("Esta opción no está habilitada.")}>Regístrarse</button>
                </form>
                <p>Al unirte, aceptas los <a href="#">Términos</a> y <a href="#">Política de privacidad</a>.</p>
            </div>
        </div>
        </SignUpStyle>
    )
}

export default SignUp;
