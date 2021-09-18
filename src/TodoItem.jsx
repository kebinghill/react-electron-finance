import React from 'react';

import Form from 'react-bootstrap/form';
import ListGroup from 'react-bootstrap/listgroup';

export default function TodoItem() {
  return (
    <ListGroup id="financial-todo-list">
      <ListGroup.Item className="financial-todo-item">
        <Form.Group className="mb-0" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
      </ListGroup.Item>
    </ListGroup>
  );
}
