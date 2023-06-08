import React from 'react';
import defaultImage from '../images/defaultImage.jpeg';
import HomeImageStyle from '../styles/HomeImageStyle';

function LazyHomeImage() {
  return (
      <HomeImageStyle>
        <img src={defaultImage} alt="Home image" />
      </HomeImageStyle>
  )
}

export default LazyHomeImage;
