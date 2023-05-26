import React from 'react';
import {ModalCloseButton, ModalContainer, ModalContent, ModalOverlay} from "./style";

function Modal(props) {
  const modal = props.modal;
  const setModal = props.setModal

  const toggleModal = () => {
    setModal(!modal)
    if (props.onModalClose) {
      props.onModalClose();
    }
  }

  return (
    <>
      {modal &&
        <ModalContainer>
          <ModalOverlay onClick={toggleModal}/>
          <ModalContent>
            <ModalCloseButton onClick={toggleModal}>
              &#10005;
            </ModalCloseButton>
            {props.children}
          </ModalContent>
        </ModalContainer>}
    </>
  );
}

export default Modal;