import React,{Components} from 'react';
import {
    Text
} from 'react-native';

class TaskTitle extends Components{
    constructor(){
		this.state = {
			taskText: "Clean up my room"
		}
	}

    render(){
        return(
            <Text>
                {this.state.taskText}
            </Text>
        )
       
    }
}


export default class TaskList extends Components{
    render(){
        return(
            <TaskTitle/>
		)  
	}
}