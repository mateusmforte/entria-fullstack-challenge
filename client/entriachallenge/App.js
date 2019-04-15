/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {View} from 'react-native';
import NewTaskField from './components/NewTaskField';


export default class App extends Component{
  render() {
    return (
      <View>
        <NewTaskField/>
      </View>
    );
  }
}

