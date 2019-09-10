import {combineReducers} from 'redux';
import taskReducer from './task';
const allReducers = combineReducers({
    taskReducer
});

export default allReducers;