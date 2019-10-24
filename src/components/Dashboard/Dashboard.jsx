import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux'
import { useStyles } from '../Layout';
import { Grid, Paper, } from '@material-ui/core';

export const Dashboard = ({ debt }) => {
    const classes = useStyles();
    const styles = {height: '100px', backgroundColor: '#FFB884'}

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <Grid container spacing={3}>
            <Grid item xs={8} md={3} lg={4}>
                <Paper className={fixedHeightPaper} style={styles}>
                Total Balance
              </Paper>
            </Grid>
            <Grid item xs={8} md={3} lg={4}>
              <Paper className={fixedHeightPaper} style={styles}>
                Owing Balance
              </Paper>
            </Grid>
            <Grid item xs={8} md={3} lg={4}>
              <Paper className={fixedHeightPaper} style={styles}>
                Owed Balance
              </Paper>
            </Grid>
            <Grid item xs={8} md={3} lg={4}>
              <Paper className={classes.paper} style={styles}>
                Orders
              </Paper>
            </Grid>
          </Grid>
    )
}
const mapStateToProps = state => ({
  debt: state.lumpState.currentUser.splits,
})
export default connect(mapStateToProps, )(Dashboard);