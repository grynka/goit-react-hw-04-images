import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

export default function ImageGallery({searchImages}) {
  const [images, setImages] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
setPage(1);
setImages('');
  }, [searchImages])

  useEffect(() => {
    if (searchImages !== '') {
   async function loadImages(searchImages, page) {
      setLoading(true)
        const URL = 'https://pixabay.com/api/';
        const key = '30502346-d120979d6222d217ab4c63b0e';
        await  fetch(
          `${URL}?key=${key}&q=${searchImages}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
        )
          .then(res => res.json())
          .then(data => { 
            if (data.totalHits > 0)
           setImages(state => [...state, ...data.hits])
               else toast.error('Oops! No matches found.');
          })
          .catch(error =>
            toast.error('Error while loading data. Try again later.')
          )
          .finally(setLoading(false));
      };
      loadImages(searchImages, page)
}

    }, [searchImages, page])

 const loadMore = () => {
   setPage(state => state + 1)
   };

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
      <ToastContainer />
      {loading && <Loader />}
      {images.length >= 12 && <Button onClick={loadMore} />}
    </>
  );

}


ImageGallery.propTypes = {
  searchImages: PropTypes.string.isRequired,
};
