import callAPI from "../service/callAPI";
import * as types from '../constants/ActionTypes';

const uuidv1 = require('uuid/v1');


let rootState = {
  tasks: [
          {
            "id": uuidv1(),
            "nameTask": "Play Game",
            "status": 0
          },
          {
            "id": uuidv1(),
            "nameTask": "Football",
            "status": 1
          },
          {
            "id": uuidv1(),
            "nameTask": "Study",
            "status": 2
          },
          {
            "id": uuidv1(),
            "nameTask": "Sleep",
            "status": 1
          },
          {
            "id": uuidv1(),
            "nameTask": "Read Book",
            "status": 2
          }
  ]
}
;
// callAPI('get','http://localhost:4000/tasks',null).then( res => {
//       console.log(res.data);
//       rootState = res.data
//     })

function findIndex(tasks, id){
 let result = -1;
 tasks.forEach((task, index)  => {
   if(task.id === id){
     result = index
   }
 });
 return result
}
export const reducer = (state = rootState, action) => {
  switch (action.type) {
    case types.GET_TASK:
      return state
    case types.ADD_TASK:
      let newTask = {
        id: uuidv1(),
        nameTask: action.task,
        status: 0
      }
      return Object.assign({},state,{tasks : [...state.tasks,newTask]})
    case types.DELETE_TASK:
      console.log(action);
      
      let index = findIndex(state.tasks, action.id);
      state.tasks.splice(index, 1);
      return {...state}
    case types.UPDATE_TASK:
      console.log(action);
      
      let indexUpdate = findIndex(state.tasks, action.task.id);
      // let newTask = {
      //   id: action.task.id,
      //   nameTask: action.task.nameTask,
      //   id
      // }
      return state
    default: return {
      ...state,
    }
  }
}
