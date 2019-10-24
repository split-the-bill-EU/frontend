import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux'
import { useStyles } from '../Layout';
import { Grid, Paper, } from '@material-ui/core';

export const Dashboard = props => {

  
  const { debts, bills, userId, users } = props;
  
 
  let peopleIOwe = [];
  debts.forEach(debt => {
    users.forEach(user => {
      if (user.id === debt.bill.userId) {    
        peopleIOwe.push(`${user.firstName}, ${debt.bill.amount} for ${debt.bill.title}`)
      }
    })    
  })

  let peopleOwingMe = [];
  bills.forEach(bill => {
    const filteredSplits = bill.splits.filter(split => split.userId !== userId);
    filteredSplits.forEach(split => {
      users.forEach(user => {
        if (user.id === split.userId) {
          peopleOwingMe.push(`${user.firstName}, ${split.amount} for ${bill.title}`)
        }
      })
    })
  })
  
  const owing = (debts.reduce((accum, bill) => accum + Number(bill.amount) - Number(bill.amountPaid), 0)).toFixed(2)

  let owed = [];
  let amountOwed
  bills.forEach(bill => {
    const cred = bill.splits.filter(split => split.userId !== userId);
    owed.push(cred.reduce((accum, cred) => accum + Number(cred.amount), 0));
    amountOwed = owed.reduce((accum, owe) => accum + owe, 0);
  })
  const total = (amountOwed - owing).toFixed(2)
  
  const classes = useStyles();
  const styles = { height: '100px', backgroundColor: '#FFB884', cursor: 'pointer' };
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={4}>
        <Paper className={fixedHeightPaper} style={styles} >
          Total Balance
          <div>{(isNaN(total)) ? -owing : total}</div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Paper className={fixedHeightPaper} style={styles} >
          Owing
          <div>{owing}</div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Paper className={fixedHeightPaper} style={styles} >
          Owed
          <div>{amountOwed}</div>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          {
            peopleOwingMe.map((person, index) => 
              <div key={index}>{person}</div>
            )
          }
        </Paper>
      </Grid>
    </Grid>
  )
}
const mapStateToProps = state => ({
  debts: state.lumpState.currentUser.splits,
  bills: state.lumpState.currentUser.bills,
  userId: state.lumpState.currentUser.id,
  users: state.lumpState.users,
})
export default connect(mapStateToProps)(Dashboard);