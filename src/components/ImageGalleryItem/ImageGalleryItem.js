import {  useState } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
import  Modal  from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ url, alt, largeImage }){
const [showModal, setShowModal] = useState(false)
const toggleModal = () => {
   setShowModal( prevShowModal => !prevShowModal)
  };

return (
  <>
    <Item>
      <Image src={url} alt={alt} onClick={toggleModal} />
    </Item>
    {showModal && (
      <Modal largeImage={largeImage} alt={alt} onClose={toggleModal} />
    )}
  </>
);

}


ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};