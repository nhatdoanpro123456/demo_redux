import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Styles from './styles';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TaskItem from '../TaskItem';

class TaskList extends Component {
  render() {
    const { classes, tasks, status } = this.props;
    return (
      <Grid item md={4} key={tasks.id}>
        <Box component="h2" mt={5} mb={5}>
          <div>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map(task => {
            return (
              <TaskItem task = {task} status={status} key={task.id}/>
            )
          })}
        </div>
      </Grid>
    )
  }
}


export default withStyles(Styles)(TaskList);
