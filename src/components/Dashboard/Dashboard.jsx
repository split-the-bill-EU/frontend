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
  const styles = { height: '100px', backgroundColor: '#FFB884', };  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightPapercursor = clsx(classes.cursor, classes.paper, classes.fixedHeight);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={4}>
        <Paper className={fixedHeightPaper} style={styles} >
          Total Balance
          <div>{(isNaN(total)) ? -owing : total}</div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Paper className={fixedHeightPapercursor} style={styles} onClick={setListOwing}>
          Owing
          <div>{owing}</div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Paper className={fixedHeightPapercursor} style={styles} onClick={setListToOwed}>
          Owed
          <div>{owed}</div>
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