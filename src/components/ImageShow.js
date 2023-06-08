import React, { useState } from 'react';
import Modal from './Modal';
import ImageShowStyle from '../styles/ImageShowStyle';
import defaultImage from '../images/defaultImage.jpeg';
import { useSpring, animated } from 'react-spring';
import HomeImageStyle from '../styles/HomeImageStyle';


function ImageShow({ image }) {
    const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });
    const [show, setShow] = useState(false);

    return (
        <div>
            <animated.div style={fadeIn} className="task-container"> 
            <ImageShowStyle>           
                {(image) === undefined 
                ? <HomeImageStyle><img src={defaultImage} alt="Home image" /></HomeImageStyle>
                : <img src={image.urls.small} alt={image.alt_description} onClick={() => setShow(true)} />
                }
            </ImageShowStyle>
            </animated.div>
            <Modal show={show} image={image} onClose={() => setShow(false)} />
        </div>
    );
}

export default ImageShow;
