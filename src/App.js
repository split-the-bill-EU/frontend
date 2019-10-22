import React from 'react';
import './App.css';
import Counter from './components/Counter';
import SplitsPage from './components/Splits/SplitsPage';

function App() {
  return (
    <div className="App">
      <Counter/>
      <SplitsPage/>
    </div>
  );
}

export default App;
