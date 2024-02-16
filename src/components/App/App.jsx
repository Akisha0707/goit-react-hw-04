import { useState, useEffect } from 'react';
import SearchBar from '/src/components/SearchBar/SearchBar.jsx';
import ImagesGallery from '/src/components/ImageGallery/ImageGallery.jsx';
import { FallingLines } from 'react-loader-spinner';
import css from '/src/components/App/App.module.css';
// import fetchImages from '/src/api';
// import Modal from '/src/components/Modal/Modal.jsx';
import axios from 'axios';

function App() {
  //useStates
  const [message, setMessage] = useState('');
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  // const [modalIsOpen, setIsOpen] = React.useState(false);

  const API_KEY = 'dG5L3_N7jK2vmib_YSZnWSNFPM_wV1uL5IP8cLRXGvs';

  const searchPictures = async newMessage => {
    setMessage(`${Date.now()}/${newMessage}`);
    setPage(1);
    setPictures([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  //useEfeect

  useEffect(() => {
    if (message === '') {
      return;
    }

    async function fetchImages() {
      try {
        setLoading(true);
        setError(false);
        const request = await axios.get(
          `https://api.unsplash.com/photos/?page=${page}&query=${message}&per_page=5&client_id=${API_KEY}`
        );
        setPictures(allPictures => [...allPictures]);
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
      {pictures.length > 0 && (
        <button className={css.moreButton} onClick={handleLoadMore}>
          Load more
        </button>
      )}
      {/* <Modal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} /> */}
    </div>
  );
}

export default App;
