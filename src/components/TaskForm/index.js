import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Styles from './styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux'; 
import * as actions from '../Actions/index';

class TaskForm extends Component {

  onSubmit=(e)=>{
    e.preventDefault();
    let value = e.target.name.value
    console.log(value);
    this.props.onAddTask(value);
    // callAPI('post','http://localhost:4000/tasks',{
    //   nameTask: this.state.name
    // }).then( response => {
    //   this.setState({
    //     id: response.data.length + 1,
    //     listTask: response.data,
    //     status = 0
    //   })
    // })
  }
  render() {
    const {open, onClose} =this.props;
    
    return (
      <div>
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" >
          <DialogTitle id="form-dialog-title">Add new task</DialogTitle>
          <form onSubmit = {this.onSubmit}>
            <DialogContent>
              <TextField
                id="standard-name"
                label="Name Task"
                margin="normal"
                fullWidth
                name="name"
              />
            </DialogContent>
            <DialogActions>
              <Button 
              onClick={onClose} 
              color="primary"
              >
                Cancel
              </Button>
              <Button 
              onClick={onClose} 
              color="primary"
              type = "submit"
              >
                OK
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => dispatch(actions.addTask(task))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
