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
import TaskList from "./components/TaskList";


export default class App extends Component{

  render() {
    return (
      <View>
        <NewTaskField/>
        <TaskList/>
      </View>
    );
  }
}

