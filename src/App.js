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
      <Route exact path="/" render={props => withAuthCheck(Layout, props)} /> */}
      <Layout/>
    </div>
  );
}

export default App;