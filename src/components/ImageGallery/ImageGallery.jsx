import css from '/src/components/ImageGallery/ImageGallery.module.css';
// import axios from 'axios';

const imagesGallery = ({ items }) => {
  return (
    <ul>
      {items.map(({ id, url, title }) => (
        <li key={id}>
          <div>
            <img src={url} alt="cat" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default imagesGallery;
