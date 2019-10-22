import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout'
import Login from './components/Login';
import withAuthCheck from './AuthCheck';

function App() {
  return (
    <div className="App">
      {/* <Route path="/login" component={Login} />
      {/* Dashboard */}
      <Route path='/dashboard' render={props => withAuthCheck(Dashboard, props)} />
              {/* All Bills */}
              <Route path='/allbills' render={props => withAuthCheck(AllBills, props)} />
    </div>
  );
}

export default App;