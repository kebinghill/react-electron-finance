import React from 'react';
import UpcomingPayday from './UpcomingPayday';
import UpcomingBills from './UpcomingBills';
import RemainingBalance from './RemainingBalance';

import './HomeView.css';

export default function HomeView() {
  return (
    <div id="home-view">
      <div id="income-container-main">
        <h3>Goodmorning, Kevin!</h3>
        <UpcomingPayday />
        <UpcomingBills />
        <RemainingBalance />
      </div>
    </div>
  );
}
