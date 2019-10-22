import React from 'react';
import './App.css';
import Counter from './components/Counter';
import CreateBill from './components/CreateBill/createBill';

function App() {
  return (
    <div className="App">
      <Counter/>
      <CreateBill/>
    </div>
  );
}

export default App;
