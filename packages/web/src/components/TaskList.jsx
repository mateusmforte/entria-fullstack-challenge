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
            <div>
                {this.props.tasks.map(tasks => (
                    <li key={tasks._id} className="tasks">
                        <TaskTitle title={tasks.title}/>
                        <TaskDescription description={tasks.description}/>
                    </li>
                   )
                )}
            </div>    
        )
    }
} 
export default createFragmentContainer(
    TaskList,
    graphql`
        fragment TaskList_tasks on tasks @relay(plural: true){
            title 
            description
        }
    `
)
