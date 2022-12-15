import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { useState } from 'react';

export default function App() {
  const [searchImages, setSearchImages] = useState('')

  const handleFormSubmit = ({ searchRequest }) => {
   setSearchImages(searchRequest);
  };

  return (
      <>
        <Searchbar onSubmit={handleFormSubmit} />
        <ImageGallery searchImages={searchImages} />
      </>
    );
}
