import React from 'react';
import HomeView from './HomeView';

//STYLING
import { Tabs, Tab } from 'react-bootstrap';
import './Header.css';

export default function Header() {
  return (
    <div id="header">
      <Tabs defaultActiveKey="home" id="header-tabs" className="mb-3">
        <Tab eventKey="home" title="Home">
          <HomeView />
        </Tab>
        <Tab eventKey="profile" title="Finances">
          <h2>World</h2>
        </Tab>
        <Tab eventKey="contact" title="Investments">
          <h3>Bleh</h3>
        </Tab>
      </Tabs>
    </div>
  );
}
