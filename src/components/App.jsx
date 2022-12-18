import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { loadImages } from 'service/API';


export default function App() {
  const [searchImages, setSearchImages] = useState('');
  const [images, setImages] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await loadImages(searchImages, page);
      setLoading(false);

      if (res.hits.length === 0) {
        toast.error('Oops! No matches found.');
        setPage();
        setSearchImages('');
        return;
      }

      if (page === 1) {
        setImages('');
      }

      setImages(images => [...images, ...res.hits]);
    };

    if (searchImages !== '') {
        console.log(searchImages);
        fetchData(searchImages, page);
      }

  }, [searchImages, page]);

 const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const onSubmit = event => {
    evt.preventDefault();
    const input = evt.target.elements.search;
    const value = input.value.trim();
    const page = 1;

    if (value === '') {
      toast.error("You didn't enter anything!");
      return;
    }

    setQuery(value);
    setPage(page);
    setError(false);

  }

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <ToastContainer />
      <ImageGallery images={images} />
      {images && images.length >= 12 && <Button onClick={loadMore} />}
      {loading && <Loader />}
    </>
  );
}
