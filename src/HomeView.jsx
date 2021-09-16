import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

export default function HomeView() {
  return (
    <div id="home-view">
      <h3>Annual Income</h3>
      <InputGroup
        className="mb-3"
        style={{
          width: '250px',
        }}
      >
        <InputGroup.Text>$</InputGroup.Text>
        <FormControl aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
    </div>
  );
}
