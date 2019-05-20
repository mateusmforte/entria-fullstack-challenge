import React,{ Component } from 'react';
import {
    Text, View, FlatList
} from 'react-native';


class TaskTitle extends Component{
    render(){
        return(
            <Text>{this.props.title}</Text>
        )
       
    }
}
class TaskDescription extends Component{
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