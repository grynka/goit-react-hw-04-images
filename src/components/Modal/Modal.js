import { Component } from 'react';
import { Overlay, Modals } from './Modal.styled';
import PropTypes from 'prop-types';


export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImage, alt } = this.props;

    return (
      <Overlay onClick={ this.handleOverlayClick }>
        <Modals>
          <img src={ largeImage } alt={ alt } />
        </Modals>
      </Overlay>
    );
  }
}

Modal.propTypes = {
    largeImage: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};