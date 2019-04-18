import React,{ Component } from 'react';
import {
    Text, View, FlatList
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


const tasks = [
    {id:1,title:'clean up my room', description:'Clean at 9am'},
    {id:2,title:'study react', description:'study leasson 9'},
    {id:3,title:'go to the market', description:'Buy some apples'}

];

class TaskTitle extends Component{
    constructor(){
        super();
		this.state = {
			taskTitleText: {}
		}
	}

    render(){
        return(
            <Text>{this.props.title}</Text>
        )
       
    }
}
class TaskDescription extends Component{
    constructor(){
        super();
        this.state={
            taskDescriptionText: {}
        }
    }

    render(){
        return(
            
            <Text>{this.props.description}</Text>
        )
    }

}

export default class TaskList extends Component{
    
    render(){
        return(
              <FlatList 
                data={tasks}
                keyExtractor={ (tasks) => String(tasks.id)}
                renderItem={({item}) =>{
                    <View>
                        <TaskTitle title={item.title}/>
                        <TaskDescription description={item.description}/>
                    </View>
                 }
                }
            />
		)  
	}
}