import React from 'react';
import ImageShow from './ImageShow';


function ImageList({ images }) {

    if (Array.isArray(images) && images.length > 0) {
        const renderedImages = images.map((image, key) => {
            return (
                <ImageShow key={image.id} image={image} />
            )
        });

        return <div>{renderedImages}</div>

    }

}

export default ImageList;

