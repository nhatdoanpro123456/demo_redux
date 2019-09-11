import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux';
import * as actions from '../Actions/index';

class  FormEdit extends Component {
  onSubmit = (e) => { 
    e.preventDefault();

    console.log(e.target.ready);
    
  }

  handleEdit = () => {
    return !this.props.open
  }

  // showOption = () =>{
  //   const {task} = this.props;
  //   let option = null;
  //   if(task.status === 0){
  //     option = <option value="0">Ready</option>
  //   }else if(task.status === 1){
  //     option = <option value="1">Proccess</option>
  //   }else{
  //     option = <option value="2">Completed</option>
  //   }
  //   return option
  // }

  handleChange = (e) =>{
    console.log(e.currentTarget.value);
    
  }

  render() {
    const { open, onClose, task } = this.props;
    return (
      <div>
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" >
          <DialogTitle id="form-dialog-title">Edit Task</DialogTitle>
          <form onSubmit={this.onSubmit}>
            <DialogContent>
              <TextField
                id="standard-name"
                label="Name Task"
                margin="normal"
                fullWidth
                name="name"
                label = {task.nameTask}
              />
              <select name="selectStatus" id="input" class="form-control" required="required" onChange = {this.handleChange}>
                <option value="0" selected>Ready</option>
                <option value="1">Proccess</option>
                <option value="2">Completed</option>
                </select>
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
                type="submit"
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

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDelTask: (task) => dispatch(actions.delTask(task))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormEdit);
