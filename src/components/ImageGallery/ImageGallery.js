import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export default function ImageGallery({ images }) {
  return (
    <>
      <Gallery className="gallery">
        {images &&
          images.map(image => {
            return (
              <ImageGalleryItem
                key={image.id}
                url={image.webformatURL}
                alt={image.tags}
                largeImage={image.largeImageURL}
              />
            );
          })}
      </Gallery>
    </>
  );
}


ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired}