import {
  Searchbars,
  SearchForm,
  Button,
  Label,
  Input,
} from './Searchbar.styled';
import { toast, ToastContainer } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import 'react-toastify/dist/ReactToastify.css';
const { Component } = require('react');

export default class Searchbar extends Component {
  state = {
    searchRequest: '',
  };
  handleRequestChange = event => {
    this.setState({
      searchRequest: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchRequest.trim() === '') {
      toast.error('Enter search query.');
      return;
    }

    this.props.onSubmit({
      searchRequest: this.state.searchRequest,
    });
    this.reset();
  };

  reset = () => {
    this.setState({
      searchRequest: '',
    });
  };

  render() {
    return (
      <Searchbars>
        <SearchForm onSubmit={this.handleSubmit}>
          <Button type="submit" className="button">
            <ImSearch />
            <Label>Search</Label>
          </Button>

          <Input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchRequest}
            onChange={this.handleRequestChange}
          />
        </SearchForm>
        <ToastContainer />
      </Searchbars>
      
    );
  }
}
