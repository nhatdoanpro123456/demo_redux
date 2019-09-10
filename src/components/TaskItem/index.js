import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Styles from './styles';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    return (
      <Card key={task.id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography className={classes.title} color="textPrimary" gutterBottom>
                {task.nameTask}
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Typography className={classes.title} color="textPrimary" gutterBottom>
                {status.label}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
        <Fab color="secondary" aria-label="edit" size= "small" className={classes.fab}>
          <EditIcon />
        </Fab>
        <Fab color="primary" aria-label="delete" size= "small" className={classes.fab}>
        <DeleteIcon />
        </Fab>
        </CardActions>
      </Card>
    )
  }
}


export default withStyles(Styles)(TaskItem);
