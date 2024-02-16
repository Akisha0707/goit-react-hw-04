import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import css from '/src/components/Modal/Modal.module.css';
Modal.setAppElement('#yourAppElement');
let subtitle;

function openModal() {
  setIsOpen(true);
}

function afterOpenModal() {
  subtitle.style.color = '#f00';
}

function closeModal() {
  setIsOpen(false);
}

const Modal = () => {
  return (
    <div className={css.content}>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
};

export default Modal;
