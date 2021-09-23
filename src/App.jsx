import './styles/App.css';
import React from 'react';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { /*incremented*/ amountAdded } from './features/example.js';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    //increment by 1
    // dispatch(incremented());

    //increment by fixed amount
    dispatch(amountAdded(7));
  };
  return (
    <div className="App">
      <Header />
      <button onClick={handleClick}>count is: {count}</button>
    </div>
  );
}

export default App;
