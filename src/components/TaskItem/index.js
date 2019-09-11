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
import {connect} from 'react-redux';
import * as actions from '../Actions/index';
// import FormEdit from '../FormEdit';


class TaskItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open : false
    }
  }
  
  updateTask = () =>{
    console.log(this.props.task);
    this.props.updateTask(this.props.task)
    
    this.setState({
      open: true
    })
  }

  handleClose =() =>{
    this.setState({
      open: false
    })
  }
  // showEditForm = () =>{
  //   let result = null;
  //   result =(
  //     <div>
  //       <FormEdit open = {this.state.open} onClose = {this.handleClose} task = {this.props.task}/>
  //     </div>
  //   )
  //   return result
  // }

  onDelete = () =>{
    this.props.onDelTask(this.props.task.id)
  }
 
  render() {
    const { task, status } = this.props;
    return (
      <Card key={task.id} >
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography color="textPrimary" gutterBottom>
                {task.nameTask}
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Typography color="textPrimary" gutterBottom>
                {status.label}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
        <Fab color="secondary" aria-label="edit" size= "small" onClick={this.updateTask}>
          <EditIcon />
        </Fab>
        <Fab color="primary" aria-label="delete" size= "small" onClick={this.onDelete}>
        <DeleteIcon />
        </Fab>
        </CardActions>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelTask: (id) => {
      dispatch(actions.delTask(id))
    },
    updateTask: task =>{
      dispatch(actions.updateTask(task))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
