import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux'
import { useStyles } from '../Layout';
import { Grid, Paper, } from '@material-ui/core';

export const Dashboard = props => {

  const { debt, bills, userId } = props;
  let owed = [];
  let amountOwed
  const owing = (debt.reduce((accum, bill) => accum + Number(bill.amount) - Number(bill.amountPaid), 0 )).toFixed(2)
  bills.forEach(bill => {
    const cred = bill.splits.filter(split => split.userId !== userId);
    owed.push(cred.reduce((accum, cred) => accum + Number(cred.amount), 0));
    amountOwed = owed.reduce((accum, owe) => accum + owe, 0);
  })
  const total = (amountOwed - owing).toFixed(2)
  console.log(total)
 
  const classes = useStyles();
  const styles = { height: '100px', backgroundColor: '#FFB884' };
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={4}>
        <Paper className={fixedHeightPaper} style={styles}>
          Total Balance
          <div>{(isNaN(total)) ? -owing : total}</div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8} lg={4}>
        <Paper className={fixedHeightPaper} style={styles}>
          Owing
          <div>{owing}</div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Paper className={fixedHeightPaper} style={styles}>
          Owed
          <div>{amountOwed}</div>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          Orders
              </Paper>
      </Grid>
    </Grid>
  )
}
const mapStateToProps = state => ({
  debt: state.lumpState.currentUser.splits,
  bills: state.lumpState.currentUser.bills,
  userId: state.lumpState.currentUser.id,
  users: state.lumpState.users,
})
export default connect(mapStateToProps)(Dashboard);