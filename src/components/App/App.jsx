import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '/src/components/SearchBar/SearchBar.jsx';
import ImagesGallery from '/src/components/ImageGallery/ImageGallery.jsx';
import { FallingLines } from 'react-loader-spinner';
import css from '/src/components/App/App.module.css';

function App() {
  const [message, setMessage] = useState('');
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const searchPictures = async newMessage => {
    setMessage(`${Date.now()}/${newMessage}`);
    setPage(1);
    setPictures([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (message === '') {
      return;
    }

    async function fetchImages() {
      try {
        setLoading(true);
        setError(false);
        const request = await axios.get(
          'https://api.unsplash.com/photos/?page=1&query=photo&per_page=10&client_id=8WljGh1dq48AOFZW3zSlYSx3-vUvfxbCL-dKI_bgnUY'
        );
        setPictures(allPictures => [...allPictures, ...request]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [message, page]);

  return (
    <div>
      <SearchBar onSearch={searchPictures} />
      {loading && (
        <FallingLines
          color="#4fa94d"
          width="100"
          visible={true}
          ariaLabel="falling-circles-loading"
        />
      )}
      {error && <p> Whoops, something went wrong!Please try reloading this page! </p>}
      {pictures.length > 0 && !loading && <ImagesGallery items={pictures} />}
      <button className={css.moreButton} onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
}

export default App;
