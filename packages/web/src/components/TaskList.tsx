import React,{Component} from 'react';
import {graphql, createFragmentContainer} from 'react-relay';

type Props = {
    task: TaskList_task

};

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

class TaskList extends Component<Props>{
    render(){
        const {title, description} = this.props.task;
        return(
            <li className="tasks">
                <TaskTitle title={title}/>
                <TaskDescription description={description}/>
            </li>
        )
    }
}

export default createFragmentContainer{
    TaskList,
    graphql`
        fragment Tasklist_task on TaskList{
            title 
            description
        }
    `
}
