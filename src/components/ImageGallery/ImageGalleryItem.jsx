import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
export const ImageGalleryItem = ({ images, openModal }) => {
  return images.map(image => (
    <li
      className={css.ImageGalleryItem}
      key={image.id}
      onClick={() => {
        openModal({ src: image.largeImageURL });
      }}
    >
      <img
        className={css.ImageGalleryItem_image}
        src={image.webformatURL}
        alt=""
      />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};
