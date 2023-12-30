
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text
} from 'react-native';
import Home from './screens/Home/Home';
import Game from './screens/game/Game';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Winner from './screens/Winner/Winner';
import AsyncStorage from '@react-native-async-storage/async-storage';


class App extends Component{
 
  constructor(props){
    super(props)
    this.state=this.initState();
  }

  initState(){
    return {
      isGameInProgress:false,
      isStartGameModalVisible:false,
      isGameEnd:false,
      red:{
        name:''
      },
      yellow:{
        name:''
      },
      green:{
        name:''
      },
      blue:{
        name:''
      },
      twoPlayer:false,
      threePlayer:false,
      fourPlayer:false
    
   }
  }

  
 
  render(){

  
    if(this.state.isGameInProgress && !this.state.isGameEnd){
      return <Game
        redName = {this.state.red.name}
        yellowName = {this.state.yellow.name}
        blueName = {this.state.blue.name}
        greenName = {this.state.green.name}
        isGameEnd={this.state.isGameEnd}
        onEnd={()=>{this.setState({isGameInProgress:false,isGameEnd:true})}}
        />
    }
     else if (this.state.isGameEnd && !this.state.isGameInProgress){
      return <Winner backToHome={()=>{this.setState({isStartGameModalVisible:false,isGameEnd:false})}}
      red={this.state.red}
      blue={this.state.blue}
      yellow={this.state.yellow}
      green={this.state.green} 
      onRedInput={(name)=>{
        this.state.red.name=name;
        this.setState({})
      }}
      onYellowInput={(name)=>{
        this.state.yellow.name=name;
        this.setState({})
      }}
      onGreenInput={(name)=>{
        this.state.green.name=name;
        this.setState({})
      }}
      onBlueInput={(name)=>{
        this.state.blue.name=name;
        this.setState({})
      }} 
      ></Winner>
     }
    else{
      return <Home
          isStartGameModalVisible={this.state.isStartGameModalVisible}
          onNewGameButtonPress ={()=>{this.setState({isStartGameModalVisible:true})}}
          onCancel={()=>{this.setState({isStartGameModalVisible:false})}}
          onStart={()=>{this.setState({isGameInProgress:true,isStartGameModalVisible:false,isGameEnd:false})}}
          red={this.state.red}
          blue={this.state.blue}
          yellow={this.state.yellow}
          green={this.state.green}
          onRedInput={(name)=>{
            this.state.red.name=name;
            this.setState({})
          }}
          onYellowInput={(name)=>{
            this.state.yellow.name=name;
            this.setState({})
          }}
          onGreenInput={(name)=>{
            this.state.green.name=name;
            this.setState({})
          }}
          onBlueInput={(name)=>{
            this.state.blue.name=name;
            this.setState({})
          }}
          twoPlayer = {this.state.twoPlayer}
          threePlayer = {this.state.threePlayer}
          fourPlayer = {this.state.fourPlayer}
      />
    }

 
  }
};

const styles = StyleSheet.create({
 
});

export default App;


// 4339d28e-b11b-4b78-a075-04fe06e723af