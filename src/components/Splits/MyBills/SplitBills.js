import React, { useState } from 'react';
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
  
  const { lumpState } = props;

  const [owingUsers, setOwingUsers] = useState([]);
  
  return (
    
    <StyledDiv>
      <Button variant="contained" className={classes.button} component={Link} to='/create_bill'>
        Create A Bill
      </Button>
      <div>
        {lumpState.currentUser.bills.map(bill => (
          <SplitBillsCard
            key={bill.id}
            setOwingUsers={setOwingUsers}
            bill={bill}
            owingUsers={owingUsers}
          />
        ))}
        </div>
    </StyledDiv>
    
  );
};

export default connect(
  state => state,
  actionCreators,
)(SplitBills);

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    display: flex;
    
  }
`;
