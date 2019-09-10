import callAPI from "../service/callAPI";
import { types } from "@babel/core";
const uuidv1 = require('uuid/v1');


let rootState = [
    {
        "id": 1,
        "nameTask": "Play Game",
        "status": 0
      },
      {
        "id": 2,
        "nameTask": "Football",
        "status": 1
      },
      {
        "id": 3,
        "nameTask": "Study",
        "status": 2
      },
      {
        "id": 4,
        "nameTask": "Sleep",
        "status": 1
      },
      {
        "id": 5,
        "nameTask": "Read Book",
        "status": 2
      }
];
// callAPI('get','http://localhost:4000/tasks',null).then( res => {
//       console.log(res.data);
//       rootState = res.data
//     })

const reducer = (state = rootState, action) => {
    
    switch (action.type) {
        case types.GET_TASK: 
        console.log(action);
        
            return state
        case types.ADD_TASK:
            console.log(action);
            let newTask = {
                id: uuidv1,
                nameTask: action.name.nameTask,
                status:0
            }
            state = state.push(newTask);
            return state;
        default: return [
            ...state,
        ] 
            
        ;
    } 
}

export default reducer ;