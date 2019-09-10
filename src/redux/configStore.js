import allReducer  from '../reducers/index';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware()
const Store = createStore(
    allReducer,
    applyMiddleware(sagaMiddleware)
    )

export default Store;