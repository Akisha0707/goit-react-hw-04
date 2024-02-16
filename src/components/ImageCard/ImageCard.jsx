import css from '/src/components/ImageCard/ImageCard.module.css';

const ImageCard = ({ items }) => {
  return (
    <div>
      <img src={items.urls.small} alt={items.slug} width="300" height="300" />
    </div>
  );
};

export default ImageCard;
