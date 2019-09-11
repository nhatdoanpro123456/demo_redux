import React, { Component } from 'react';
import TaskBoard from '../TaskBoard';
import { Store, sagaMiddleware } from '../../redux/configStore';
import {Provider} from 'react-redux';
import rootSaga from '../../sagas/index';

sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
          <TaskBoard/>
      </Provider>
    )
  }
}


export default App;
