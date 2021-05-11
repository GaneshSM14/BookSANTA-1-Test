import * as React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import firebase from 'firebase'
export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      Email:'',
      Password:''
    }
  }
  userLogin=()=>{
    firebase.auth().signInWithEmailAndPassword(this.state.Email,this.state.Password)
    .then((response)=>{alert(" Login succesful ")})
    .catch(function(error){alert(error.message)})
  }
  userSignUp=()=>{
    firebase.auth().createUserWithEmailAndPassword(this.state.Email,this.state.Password)
    .then((response)=>{alert(" New User Added ")})
    .catch(function(error){alert(error.message)})
  }

  
  render(){
    return(
      <View>
      <TextInput onChangeText={(Text)=>{this.setState({Email:Text})}} placeholder='Email.Id'/>
      <TextInput onChageText={(Text)=>{this.setState({Password:Text})}} placeholder='Password'/>
      <TouchableOpacity  onPress={()=>{this.userLogin()}}>
        <Text>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{this.userSignUp()}}>
        <Text>
          SignUp
        </Text>
      </TouchableOpacity>
      </View>
    )
  }
}