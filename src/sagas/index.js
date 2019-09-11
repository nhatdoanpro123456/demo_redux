import { put, takeLatest, all } from 'redux-saga/effects';

function* addTask(action) {
    yield put({ type: "GET_TASK", task: action.payload.task });
}

function* actionWatcher() {
     yield takeLatest('ADD_TASK', addTask)
}

export default function* rootSaga() {
   yield all([
       actionWatcher()
   ]);
}
