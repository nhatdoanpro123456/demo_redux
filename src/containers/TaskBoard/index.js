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
import { connect } from 'react-redux';


class TaskBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listTask: [],
      open : false,
    }
  }

  // componentDidMount() {
  //   callAPI('get','http://localhost:4000/tasks',null).then( response => {
  //     this.setState({
  //       listTask: response.data
  //     })
  //   })
  // }
  
  showTaskBoard = () => {
    // const { classes } = this.props;
    // const { listTask } = this.state;
    const { allTasks } = this.props;
    let result = null;
    result = (
      <Grid container spacing={2} >
        {STATUSES.map((status, index) => { 
          const taskfilter = allTasks.filter(task => task.status === status.value);
          return (
            <TaskList tasks = {taskfilter} status = {status} key={index}/>
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
    // const { classes } = this.props;
    console.log(this.props.allTasks);
    
    return (
      <div>
        <Button variant="contained" color="primary"  onClick={this.openDialog}>
          <AddIcon/> Add new task
        </Button>
        {this.showTaskBoard()}
        {this.showDialog()}
      </div>
    )
  }
}

const mapStatetoProps = (state) =>{
  return {
    allTasks: state.taskReducer
  }
}
export default connect(mapStatetoProps,null) (TaskBoard);
