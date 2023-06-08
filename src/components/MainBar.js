import React, { useEffect } from 'react';
import { useState } from 'react';
import MainWrapper from '../styles/MainWrapper';


function MainBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    useEffect(() => {
        onSubmit(term);
    }, [term]);

    return (
        <MainWrapper>
        <div className="main-container">
            <ul>
                <li onClick={(e) => setTerm(e.target.innerText)}>Fondos De Pantalla</li>
                <li onClick={(e) => setTerm(e.target.innerText)}>Renders 3D</li>
                <li onClick={(e) => setTerm(e.target.innerText)}>Viajar</li>
                <li onClick={(e) => setTerm(e.target.innerText)}>Naturaleza</li>
                <li onClick={(e) => setTerm(e.target.innerText)}>Fotografía Callejera</li>
                <li onClick={(e) => setTerm(e.target.innerText)}>Experimental</li>
                <li onClick={(e) => setTerm(e.target.innerText)}>Texturas y Patrones</li>
                <li onClick={(e) => setTerm(e.target.innerText)}>Animales</li>
                <li onClick={(e) => setTerm(e.target.innerText)}>Arquitectura E Interiorismo</li>
                <li onClick={(e) => setTerm(e.target.innerText)}>Moda</li>
                <li onClick={(e) => setTerm(e.target.innerText)}>Película</li>
                <li onClick={(e) => setTerm(e.target.innerText)}>Comida y Bebida</li>
                <li onClick={(e) => setTerm(e.target.innerText)}>Personas</li>
                <li onClick={(e) => setTerm(e.target.innerText)}>Espiritualidad</li>
                <li onClick={(e) => setTerm(e.target.innerText)}>Negocios y Trabajo</li>
            </ul>
        </div>
        </MainWrapper>
    )
}

export default MainBar;