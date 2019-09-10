import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Styles from './styles';
import AddIcon from '@material-ui/icons/Add';
import { STATUSES } from '../../constants';
import { Grid } from '@material-ui/core';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';
import callAPI from '../../service/callAPI';


class TaskBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listTask: [],
      open : false,
    }
  }

  componentDidMount() {
    callAPI('get','http://localhost:4000/tasks',null).then( response => {
      this.setState({
        listTask: response.data
      })
    })
  }
  
  showTaskBoard = () => {
    const { classes } = this.props;
    const { listTask } = this.state;
    
    let result = null;
    result = (
      <Grid container spacing={2} className = {classes.container}>
        {STATUSES.map((status, index) => {
          const taskfilter = listTask.filter(task => task.status === status.value);
          return (
            <TaskList tasks = {taskfilter} status = {status}/>
          )
        })}
      </Grid>
    )
    return result;
  }
  openDialog = () =>{
    this.setState({
      open: true
    })
  }
  handleClose = () =>{
    this.setState({
      open: false
    })
  }
  showDialog =() =>{
    let result = null;
    result = (
      <div>
        <TaskForm open = {this.state.open} onClose = {this.handleClose}/>
      </div>
    )
    return result;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.openDialog}>
          <AddIcon/> Add new task
        </Button>
        {this.showTaskBoard()}
        {this.showDialog()}
      </div>
    )
  }
}


export default withStyles(Styles)(TaskBoard);
