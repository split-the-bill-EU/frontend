import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Debit from './components/Splits/Debit';
import Credit from './components/Splits/Credit';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import withAuthCheck from './AuthCheck';
import Dashboard from './components/Dashboard';
import CreateBill from './components/CreateBill';
import BillSplits from './Billsplits/billSplits';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path='/dashboard' render={props => withAuthCheck(Dashboard, props)} />
      <Route path='/my_credit' render={props => withAuthCheck(Credit, props)} />
      <Route path='/my_debit' render={props => withAuthCheck(Debit, props)} />
      <Route path='/create_bill' render={props => withAuthCheck(CreateBill, props)} />
      <Route path='/my_billsplits/:billId' render={props => withAuthCheck(BillSplits, props)} />
    </div>
  );
}

export default App;