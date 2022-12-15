import Searchbar from './Searchbar/Searchbar';
import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';

export default class App extends Component {

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
