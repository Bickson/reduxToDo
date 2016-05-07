/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import todoApp from './app/reducers'
import { addTodo, completeTodo, setVisibilityFilter } from './app/actions'
import App from './app/containers/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

let store = createStore(todoApp);

class reduxToDo extends Component {
  render() {
    console.log("render");
    console.log(store.getState());
    store.dispatch(addTodo('Learn about actions'));
    store.dispatch(addTodo('Learn about reducers'));
    store.dispatch(addTodo('Learn about store'));
    store.dispatch(completeTodo(1));
    console.log(store.getState());
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('reduxToDo', () => reduxToDo);
