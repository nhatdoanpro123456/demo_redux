import callAPI from "../service/callAPI";


let rootState = [];
callAPI('get','http://localhost:4000/tasks',null).then( res => {
      console.log(res.data);
      rootState = res.data
    })

const reducer = (state = rootState, action) => {
    switch (action.type) {
        default: return {
            ...state,
        };
    } 
}

export default reducer ;