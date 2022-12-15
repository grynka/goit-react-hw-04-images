import { Component } from "react";
import { Load } from "./Button.styled";
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
      return <Load 
      type="button"
      onClick={this.props.onClick}
      >Load more</Load>;
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}
