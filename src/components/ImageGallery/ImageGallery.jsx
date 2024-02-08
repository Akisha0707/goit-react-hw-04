import css from '/src/components/ImageGallery/ImageGallery.module.css';

const imagesGallery = ({ items }) => {
  return (
    <ul className={css.styleList}>
      {items.map(({ id, urls: { small }, slug }) => (
        <li key={id}>
          <div>
            <img src={small} alt={slug} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default imagesGallery;
