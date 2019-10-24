import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../state/actionCreators';
import SplitBillsCard from './SplitBillsCard';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

export const SplitBills = props => {

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));
  
  
  const classes = useStyles();
  
  const { lumpState, getUsers } = props;

  const [owingUsers, setOwingUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    
    <StyledDiv>
      <Button variant="contained" className={classes.button} component={Link} to='/create_bill'>
        Create A Bill
      </Button>
      <ParentDiv>
        {lumpState.currentUser.bills.map(bill => (
          <SplitBillsCard
            key={bill.id}
            setOwingUsers={setOwingUsers}
            bill={bill}
            owingUsers={owingUsers}
          />
        ))}
        </ParentDiv>
    </StyledDiv>
    
  );
};

export default connect(
  state => state,
  actionCreators,
)(SplitBills);

const ParentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
