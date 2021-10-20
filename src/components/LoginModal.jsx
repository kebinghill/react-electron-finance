import React, { useState } from 'react';
import axios from 'axios';

import { Modal, Button } from 'react-bootstrap';
import '../styles/LoginModal.css';

import LoginForm from './LoginForm';
import DogsExample from './DogsExample';

const LoginModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const credential = { email: '93kevingil@gmail.com', password: 'password' };

  const login = async (credentials) => {
    const token = (await axios.post('http://localhost:3001/auth', credentials))
      .data;
    console.log(token);
    const user = (
      await axios.get('http://localhost:3001/auth', {
        headers: {
          authorization: token,
        },
      })
    ).data;
    console.log(user);
  };

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
          <LoginForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sign-Up
          </Button>
          <Button variant="primary">Login</Button>
          <button onClick={() => login(credential)}>Login Test</button>
        </Modal.Footer>
      </Modal>
      <DogsExample />
    </div>
  );
};

export default LoginModal;
