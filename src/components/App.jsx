import Searchbar from './Searchbar/Searchbar';
import { Component } from 'react';
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

export  class Appold extends Component {

  state = {
    searchImages: '',
  };

  handleFormSubmit = ({ searchRequest }) => {
    this.setState({ searchImages: searchRequest });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchImages={this.state.searchImages} />
      </>
    );
  }
}
