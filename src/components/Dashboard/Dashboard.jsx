import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux'
import { useStyles } from '../Layout';
import { Grid, Paper, } from '@material-ui/core';
import * as actionCreators from '../../state/actionCreators';

export const Dashboard = props => {  
  
  const { owed, owing, setListOwing, setListToOwed, splitsList, splitsListTitle } = props; 
  const total = (owed - owing).toFixed(2)  
  const classes = useStyles();
  const styles = { height: '12em', backgroundColor: '#070F11', color: 'white', };  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightPapercursor = clsx(classes.cursor, classes.paper, classes.fixedHeight);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={4}>
        <Paper className={fixedHeightPaper} style={styles} >
          <h3>Total Balance</h3>
          <h2>{(isNaN(total)) ? -owing : total}</h2>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Paper className={fixedHeightPapercursor} style={styles} onClick={setListOwing}>
          <h3>Owing</h3>
          <h2>{owing}</h2>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Paper className={fixedHeightPapercursor} style={styles} onClick={setListToOwed}>
          <h3>Owed</h3>
          <h2>{owed}</h2>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <h3>{splitsListTitle}</h3>
          {
            splitsList.map((person, index) => 
              <div key={index}>{person}</div>
            )
          }
        </Paper>
      </Grid>
    </Grid>
  )
}
const mapStateToProps = state => ({
  owed: state.dashboard.owed,
  owing: state.dashboard.owing,
  splitsList: state.dashboard.splitsList,
  splitsListTitle: state.dashboard.splitsListTitle,
})
export default connect(mapStateToProps, actionCreators)(Dashboard);