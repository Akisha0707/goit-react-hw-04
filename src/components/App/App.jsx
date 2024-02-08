import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '/src/components/SearchBar/SearchBar.jsx';
import ImagesGallery from '/src/components/ImageGallery/ImageGallery.jsx';
import css from '/src/components/App/App.module.css';

function App() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        const request = await axios.get(
          'https://api.unsplash.com/photos/?page=1&query=office&per_page=10&client_id=8WljGh1dq48AOFZW3zSlYSx3-vUvfxbCL-dKI_bgnUY'
        );
        setPictures(request.data);
        console.log(request.data);
      } catch (error) {
        //error
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  return (
    <div>
      <SearchBar />
      {loading && <p>Loading data, please wait...</p>}
      {pictures.length > 0 && <ImagesGallery items={pictures} />}
    </div>
  );
}

export default App;
