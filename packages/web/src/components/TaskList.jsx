import React,{Component} from 'react';
import {createFragmentContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro'

class TaskTitle extends Component{
    render(){
        return(
            <h3>{this.props.title}</h3>
        )
    }
}

class TaskDescription extends Component{
    render(){
        return(
            <p>{this.props.description}</p>
        )
    }
}

class TaskList extends Component{
    render(){
        return(
            <li className="tasks">
                <TaskTitle title={this.props.title}/>
                <TaskDescription description={this.props.description}/>
            </li>
        )
    }
}

export default createFragmentContainer(
    TaskList,
    graphql`
        fragment TaskList_task on tasks{
            title 
            description
        }
    `
); 
