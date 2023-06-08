import React from 'react';
import ImageList from '../components/ImageList';
import ResultsWrapper from '../styles/ResultsWrapper';
import ImageShow from '../components/ImageShow';
import SearchBar from '../components/SearchBar';
import MainBar from '../components/MainBar';


function Home({ images, handleSubmit, setImages }) {

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} emptyImages={setImages} />
            <MainBar onSubmit={handleSubmit} />
            <ResultsWrapper>
            <div className="container">
                {Array.isArray(images) && !images.length 
                ? <ImageShow />
                : <ImageList images={images} />
                }
            </div>
            </ResultsWrapper>
        </div>
    )
}

export default Home;