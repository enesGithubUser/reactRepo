import React, {Component} from 'react';
import {View , Text} from 'react-native'

class List extends Component{
componentWillMount(){
    console.log('componentWillMount');
}
componentDidMount(){
    console.log('componentDidMount');
}

    render(){
        console.log('render');
        return(
            <View style={{marginTop:5}}>
                <Text> Icerik Listesi </Text>
            </View> 
        )
    }
}


export default List;