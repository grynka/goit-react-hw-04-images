import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { useState } from 'react';

export default function App() {
  const [searchImages, setSearchImages] = useState('')

  return (
      <>
        <Searchbar onSubmit={setSearchImages} />
        <ImageGallery searchImages={searchImages} />
      </>
    );
}
