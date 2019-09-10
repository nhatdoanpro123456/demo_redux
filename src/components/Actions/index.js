import * as types from '../../constants/ActionTypes';
export const getTask = () =>{
 return {
     type: types.GET_TASK
 }   
}
export const addTask = (task) =>{
    return {
        type: types.ADD_TASK,
        task : task
    }   
   }
   export const delTask = (task,id) =>{
    return {
        type: types.DELETE_TASK
    }   
   }