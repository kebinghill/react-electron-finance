import React from 'react';
import TodoList from './TodoList';

import Form from 'react-bootstrap/form';
import '../styles/FinancialNotes.css';

export default function FinancialNotes() {
  return (
    <div id="financial-notes">
      <h4>Financial Notes</h4>
      <Form id="financial-text-form">
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={5}
            size="sm"
            id="financial-text-area"
          />
        </Form.Group>
      </Form>
      <h4>To-Do List</h4>
      <TodoList />
    </div>
  );
}
