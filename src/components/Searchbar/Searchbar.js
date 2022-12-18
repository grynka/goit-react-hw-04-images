import {
  Searchbars,
  SearchForm,
  Button,
  Label,
  Input,
} from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';

export default function Searchbar( {onSubmit} ) {
     return (
      <Searchbars>
        <SearchForm onSubmit={onSubmit}>
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
            name="search"
          />
        </SearchForm>
      </Searchbars>
      
    );
}