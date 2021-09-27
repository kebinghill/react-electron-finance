import React from 'react';
import InvestmentReturns from './InvestmentReturns';

import '../styles/InvestmentWatchlist.css';

export default function InvestmentWatchlist() {
  return (
    <div id="investment-watchlist">
      <h4>Investment Watchlist</h4>
      <InvestmentReturns />
    </div>
  );
}
