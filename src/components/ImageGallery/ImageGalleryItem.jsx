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
      {image.id}

      <img
        className={css.ImageGalleryItem_image}
        src={image.webformatURL}
        alt=""
      />
    </li>
  ));
};

{
  /* <li className={css.ImageGalleryItem}>
  <img className={css.ImageGalleryItem_image} src={image.webformatURL} alt="" />
</li>; */
}
