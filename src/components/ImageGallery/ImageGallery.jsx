import ImageCard from '../ImageCard/ImageCard';
import css from '/src/components/ImageGallery/ImageGallery.module.css';

const imagesGallery = ({ items }) => {
  return (
    <ul className={css.styleList}>
      {items.map(item => (
        <li key={item.id}>
          <ImageCard items={item} />
        </li>
      ))}
    </ul>
  );
};

export default imagesGallery;
