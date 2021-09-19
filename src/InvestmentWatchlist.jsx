import React from 'react';
import InvestmentReturns from './InvestmentReturns';

import './styles/InvestmentWatchlist.css';

export default function InvestmentWatchlist() {
  return (
    <div id="investment-watchlist">
      <h3>Investment Watchlist</h3>
      <InvestmentReturns />
    </div>
  );
}
