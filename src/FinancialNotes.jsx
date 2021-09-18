import React from 'react';
import TodoItem from './TodoItem';

import Form from 'react-bootstrap/form';
import './FinancialNotes.css';

export default function FinancialNotes() {
  return (
    <div id="financial-notes">
      <h3>Financial Notes</h3>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={5} id="financial-text-area" />
        </Form.Group>
      </Form>
      <h3>To-Do List</h3>
      <TodoItem />
    </div>
  );
}
