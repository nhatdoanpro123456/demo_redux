import React, { Component } from 'react';
import TaskBoard from '../TaskBoard';
import Store from '../../redux/configStore';
import {Provider} from 'react-redux';

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
