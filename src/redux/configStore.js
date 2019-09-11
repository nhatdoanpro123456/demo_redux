import allReducer from '../reducers/index';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

export const sagaMiddleware = createSagaMiddleware()
export const Store = createStore(
    allReducer,
    applyMiddleware(sagaMiddleware, logger)
)
