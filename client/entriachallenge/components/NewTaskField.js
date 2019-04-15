import React,{Component} from 'react';
import {
    View,
    TextInput,
    TouchableHighlight,
    Text,
    Dimensions,
    Button
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    button : {
        backgroundColor: '#f4d142',
        verticalPadding: 20,
        paddingHorizontal: 35
    }
});
class TaskText extends Component{
    constructor(){
        super();
        this.state = {
            text:''
        };
    }

    render(){
        return(
            <TextInput
                onChangeText={(text) => this.setState({text})}
                value = {this.state.text}
            />
        )
    }
}

class TaskAddButton extends Component{
    render(){
        return(
           <Button title="Adicionar Tarefa"/>
        );
    }
  
}
export default class NewTaskField extends Component{
    render(){
        return(
            <View>
                <TaskText/>
                <TaskAddButton/>
            </View>
        ) 
    }
}

