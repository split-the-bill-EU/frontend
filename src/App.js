import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import withAuthCheck from './AuthCheck';
import Dashbaord from './components/Dashboard';
import AllBills from './components/AllBills';

function App() {
  return (
    <div className="App">
      <Route exact path="/login" component={Login} />
      {/* Dashboard */}
      <Route path='/dashboard' render={props => withAuthCheck(Dashbaord, props)} />
      {/* All Bills */}
      <Route path='/allbills' render={props => withAuthCheck(AllBills, props)} />
    </div>
  );
}

export default App;