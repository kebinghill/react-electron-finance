import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/LoginModal.css';

import DogsExample from './DogsExample';

const LoginModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        className="modal-background"
      >
        <Modal.Header closeButton className="modal-header">
          <Modal.Title className="modal-title">My Finance App</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sign-Up
          </Button>
          <Button variant="primary">Login</Button>
        </Modal.Footer>
      </Modal>
      <DogsExample />
    </div>
  );
};

export default LoginModal;
