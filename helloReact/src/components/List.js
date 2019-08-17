import React, {Component} from 'react';
import {View , Text} from 'react-native';
import axios from 'axios';

class List extends Component{
    state = {veriler : []}
    
    componentWillMount(){
        console.log('componentWillMount')
        axios.get('http://reduxblog.herokuapp.com/api/posts')
        .then(response =>{
            console.log(response)
            this.setState = ({veriler : response.data})
        })       
    }

    componentDidMount(){
        console.log('componentDidMount')
    }
    
    renderData(){
        return this.state.veriler.map(responseData =>
            <Text>
                {responseData.title}
            </Text>
        )
    }

    render(){
        console.log('gelen data '  + this.state)
        return(
            <View style={{marginTop:5}}>
                {this.renderData()}
            </View>
        )
    }
}


export default List;