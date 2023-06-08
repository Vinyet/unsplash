import { useState } from 'react';
import logo from '../images/logo.png';
import SearchBarStyle from '../styles/SearchBar';
import SignInModal from './SignInModal';
import { useNavigate, NavLink } from 'react-router-dom';


function SearchBar({ onSubmit, emptyImages }) {
    const [ term, setTerm ] = useState('');
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }

    const handleChange = (event) => {
        event.preventDefault();
        setTerm(event.target.value);
    }

    const handleClick = () => {
        emptyImages([]);
        navigate('/');
    };

    return (
        <SearchBarStyle>
        <div>
            <a href="/" onClick={handleClick}><img src={logo} alt="Unsplash logo" /></a>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange} placeholder="Busca imágenes de alta resolución" />
            </form>
            <div className="lists">
                <ul>
                    <li>Explorar</li>
                    <li>Anunciarse</li>
                    <li className="colored-li">Unsplash+</li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/signin" activeclassname="" style={{ color: 'gray', textDecoration: 'none' }}>Inicia sesión</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup" activeclassname="" style={{ color: 'gray', textDecoration: 'none' }}>Regístrate</NavLink>
                    </li>
                </ul>
            </div>
            <button onClick={() => setShow(!show)}>Enviar una foto</button>
            {(show)
            ? <SignInModal show={show} onClose={() => setShow(false)} /> 
            : null
            }
        </div>
        </SearchBarStyle>
    )
}

export default SearchBar;
