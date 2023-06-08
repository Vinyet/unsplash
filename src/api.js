import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID PXDAtnwo-2lJpdZHu4TwrMFIV3eNBERPKjPj7jd0CpI',
        },
        params: {
            query: term,
        },
    });
    
    return response.data.results;
};

/*export function getRandomImage() {
    return fetch(`https://api.unsplash.com/photos/random?client_id=PXDAtnwo-2lJpdZHu4TwrMFIV3eNBERPKjPj7jd0CpI`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        return data.urls.regular;
      })
      .catch(error => {
        console.error('Error fetching random image:', error);
        return ''; // return an empty string to ensure that the function always returns a promise
      });
  }*/
  

export default searchImages;

