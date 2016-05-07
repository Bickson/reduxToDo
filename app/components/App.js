/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> REDUX MADDAFAKKA </Text>
      </View>
    );
  }
};

