import React from 'react';
import './App.css';
import Counter from './components/Counter';
import SplitBills from './components/SplitBills';

function App() {
  return (
    <div className="App">
      <Counter/>
      <SplitBills />
    </div>
  );
}

export default App;
