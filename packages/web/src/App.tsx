import React, { Component } from 'react';
import {graphql, QueryRenderer} from 'react-relay';

import env from '../relay/Environment';
import TaskList from "./components/TaskList";

import './css/main.css';


class App extends Component{
  render() {
    return (
      <div>
          <h1 className="main-header">My Tasks</h1>
          <ul className="tasks-container">
            <QueryRenderer
            environment={env}
            query={graphql`
              query TaskQuery{
                  viewer{
                      id
                      ...Tasklist_task
                  }
              }
            `
            }
            variables={{}}
            render={({error,props}) => {
                if(error) return <div>Error!{error}</div>
                if(!props) return <div>Loading...</div>
                return  <TaskList key={props.viewer.id} title={props.viewer.title} description={props.viewer.description}/>
            }}
            /> 
          </ul>
       
      </div>
    );
  }
}

export default App;
