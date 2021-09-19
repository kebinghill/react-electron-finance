import React, { useState } from 'react';

import './FinancialNotes.css';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';
import ListGroup from 'react-bootstrap/ListGroup';

const listItem = (
  <>
    <Form.Check type="checkbox" />
    <Form.Control type="text" className="list-item-text" size="sm" />
  </>
);

const initialList = [];

export default function TodoList() {
  const [list, addToList] = useState(initialList);

  function handleAdd() {
    const newList = [...list, listItem];

    addToList(newList);
  }

  return (
    <div id="todo-list">
      <Button onClick={handleAdd}>+</Button>

      <ListGroup>
        {list.map((item, idx) => {
          return (
            <ListGroup.Item className="list-item" key={idx}>
              {item}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}