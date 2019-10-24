import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PaymentIcon from '@material-ui/icons/Payment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logout from '../../Functions/logout';

export const mainListItems = (
  
  <div>
    <ListItem button component={NavLink} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={NavLink} to="/create_bill">
      <ListItemIcon>
        <PaymentIcon />
      </ListItemIcon>
      <ListItemText primary="Create Bill" />
    </ListItem>
    <ListItem button component={NavLink} to="/my_credit">
      <ListItemIcon>
        <PaymentIcon />
      </ListItemIcon>
      <ListItemText primary="My Credit" />
    </ListItem>
    <ListItem button component={NavLink} to="/my_debit">
      <ListItemIcon>
        <PaymentIcon />
      </ListItemIcon>
      <ListItemText primary="My Debit" />
    </ListItem>
    
    <ListItem button component={NavLink} to="/" onClick={logout}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);