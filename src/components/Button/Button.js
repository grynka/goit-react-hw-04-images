import { Load } from "./Button.styled";
import PropTypes from 'prop-types';

export default function Button(onClick)  {
  
      return <Load 
      type="button"
      onClick={onClick}
      >Load more</Load>;
  }


Button.propTypes = {
  onClick: PropTypes.func.isRequired
}
