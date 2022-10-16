import { Component } from 'react';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from './ImageGalleryItem';

// export class ImageGallery extends Component {
//   render() {
//     return (
//       <ul className={css.ImageGallery}>
//         {images.map(image => {
//           return (
//             <li className={css.ImageGalleryItem}>
//               <img
//                 className={css.ImageGalleryItem_image}
//                 src={image.webformatURL}
//                 alt=""
//               />
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
// }

// export const ImageGallery = ({ images }) => {
//   console.log(images);
//   return (
//     <ul className={css.ImageGallery}>
//       {images.map(image => {
//         return (
//           <li className={css.ImageGalleryItem}>
//             <img
//               className={css.ImageGalleryItem_image}
//               src={image.webformatURL}
//               alt=""
//             />
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
//--------EORK VERSION
export const ImageGallery = ({ images, openModal }) => {
  console.log(images);
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem images={images} openModal={openModal} />;
    </ul>
  );
};

// export class ImageGallery extends Component {
//   state = {
//     loading: false,
//   };
// }
