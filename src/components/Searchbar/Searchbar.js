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
import { useState } from 'react';

export default function Searchbar({ onSubmit }) {
  const [searchRequest, setSearchRequest] = useState('')

  const handleRequestChange = event => {
    setSearchRequest(event.currentTarget.value.toLowerCase())
    }

  const handleSubmit = event => {
      event.preventDefault();
  
      if (searchRequest.trim() === '') {
        toast.error('Enter search query.');
        setSearchRequest('')
        return;
      }
      
     onSubmit(searchRequest);

    };


    return (
      <Searchbars>
        <SearchForm onSubmit={handleSubmit}>
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
            value={searchRequest}
            onChange={handleRequestChange}
          />
        </SearchForm>
        <ToastContainer />
      </Searchbars>
      
    );
}