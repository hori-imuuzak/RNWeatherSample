import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/Store';
import { NavigationContainer } from './container/NavigationContainer';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer />
      </Provider>
    );
  }
}