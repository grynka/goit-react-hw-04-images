import { useEffect } from 'react';
import { Overlay, Modals } from './Modal.styled';
import PropTypes from 'prop-types';

export default function Modal({ largeImage, alt, onClose }) {
  useEffect(() => {
  const handleKeydown = (event) => {
    if (event.code === 'Escape') {
      onClose()
    }
  };

 
    window.addEventListener('keydown', handleKeydown);
    return () => {
    window.removeEventListener('keydown', handleKeydown);

    }

  }, [onClose])

const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onClose()
    }
  };
  
  return (
    <Overlay onClick={ handleOverlayClick }>
      <Modals>
        <img src={ largeImage } alt={ alt } />
      </Modals>
    </Overlay>
  );
}


Modal.propTypes = {
    largeImage: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};