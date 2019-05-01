import React, { Component } from "react";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import env from "./relay/Environment";
import TaskList from "./components/TaskList";

import "./css/main.css";

const renderTaskQuery = ({ error, props }) => {
  if (error) {
    return <div>Error!</div>;
  } else if (props) {
    return (
      <TaskList
        key={props.tasks._id}
        title={props.tasks.title}
        description={props.tasks.description}
      />
    );
  }
  return <div>Carregando Tarefas...</div>;
};
class App extends Component {
  render() {
    return (
      <div>
        <h1 className="main-header">My Tasks</h1>
        <ul className="tasks-container">
          <QueryRenderer
            environment={env}
            query={graphql`
              query AppQuery {
                tasks {
                  _id
                  ...TaskList_task
                }
              }
            `}
            variables={{}}
            render={renderTaskQuery}
          />
        </ul>
      </div>
    );
  }
}

export default App;
