import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PaymentIcon from '@material-ui/icons/Payment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const mainListItems = (
  <div>
    <ListItem button component={NavLink} to="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={NavLink} to="/allbills">
      <ListItemIcon>
        <PaymentIcon />
      </ListItemIcon>
      <ListItemText primary="All Bills" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);