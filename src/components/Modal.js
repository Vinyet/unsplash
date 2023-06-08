import React, { useState, useEffect } from 'react';
import ModalWrapper from '../styles/ModalWrapper';
import { useSpring, animated } from 'react-spring';
import { AiFillHeart } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import {saveAs} from 'file-saver';
import Spinner from 'react-spinner-material';


const Modal = props => {
    const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });
    const [loading, setLoading] = useState(true);
    const [loadedImage, setLoadedImage] = useState(false);

    useEffect(() => {
        if (loadedImage) {
          setLoading(false);
        }
    }, [loadedImage]);

    const handleImageLoad = () => {
        setLoadedImage(true);
    };

    if (!props.show) {
        return null;
    }

    const downloadImg = () => {
        saveAs(props.image.urls.full, 'Sin título.png')
    }

    return (
        <ModalWrapper>
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="author-box">
                        <img src={props.image.user.profile_image.small} alt="Author image" />
                        <p>{props.image.user.name}</p>
                    </div>
                    <div className="buttons">
                        <button className="heart-btn" onClick={() => alert("¡Gracias por dejar tu like!")}><AiFillHeart /></button>
                        <button className="add-btn" onClick={() => alert('Has añadido esta foto a tus favoritas.')}><BsFillPlusCircleFill /></button>
                        <button className="download-btn" onClick={downloadImg}>Descargar gratis</button>
                    </div>
                </div>
                <div className="modal-body">
                    {loading && <Spinner radius={50} color={"#333"} stroke={2} visible={true} />}
                    <animated.div style={fadeIn} className="task-container"> 
                        <img src={props.image.urls.full} alt={props.image.alt_description} onLoad={handleImageLoad} style={{ display: loading? 'none' : 'block' }} />
                    </animated.div>
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

