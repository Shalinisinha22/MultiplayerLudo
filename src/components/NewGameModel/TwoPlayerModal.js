import React, {Component} from 'react'
import {View,ScrollView,Modal, StyleSheet, Text, TextInput, TouchableOpacity,Alert, Dimensions} from 'react-native'


export default class TwoPlayerModal extends Component{
    constructor(props){
        super(props)
     console.log(props)

    }

    render(){
        return(<Modal
            
            transparent={true}
            onRequestClose={()=>{}}
            visible={this.props.isStartGameModalVisible}
       
              
        >
           
            <ScrollView>
                {/* {
                    this.props.playerCount
                } */}
                <View style={styles.modalStyle}>
                    <View style={styles.modalContainer}>
                    <Text style={{color:'#ec1d27',marginBottom:10}}>Red Player Name</Text>
                    <TextInput placeholder='Player1' style={[styles.nameInputStyle,styles.redInputStyle]}
                        onChangeText={this.props.onRedInput}
                    />
                  
                    <Text style={{color:'#0F0',marginBottom:10}}>Green Player Name</Text>
                    <TextInput placeholder='Player2' style={[styles.nameInputStyle,styles.greenInputStyle]}
                        onChangeText={this.props.onGreenInput}
                    />
                 
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.props.onCancel}>
                    <Text>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
                        let minPlayersCount =0;
                        this.props.red.name!=""?minPlayersCount++:undefined;
                        this.props.green.name!=""?minPlayersCount++:undefined;
                        if(minPlayersCount>=2){
                            this.props.onStart();
                        }else{
                            Alert.alert("Minimum 2 Players", "At least 2 players are required to start the game.",
                            [
                                {text:"Ok"}
                            ]
                            );
                        }
                    }}>
                    <Text>New Game</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modalStyle:{
        width:"100%",
        height:"100%",
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    },
    modalContainer:{
        marginTop:190,
        backgroundColor:'#fff',
        width:'90%',
        height:"auto",
        padding:30,
        elevation:5,
        zIndex:5,
        borderRadius:10
    },
    nameInputStyle:{
        marginBottom:20,
        borderWidth:1,
        padding:10
    },
    redInputStyle:{
       
        borderColor:'#ffcccc'
    },
    yellowInputStyle:{
        
        borderColor:'#ffe01b'
    },
    blueInputStyle:{
       
        borderColor:'#00f'
    },
    greenInputStyle:{
       
        borderColor:'#0f0'
    },
    buttonStyle:{
        backgroundColor:'#fff',
        width:200,
        padding:10,
        borderColor:'#ddd',
        borderWidth:2,
        borderRadius:10,
        alignSelf:'center',
        marginTop:20,
        alignItems:'center',
        elevation:4,
    },
  
})























//<Text style={{color:"#f00",marginBottom:10}}>{"Red Player Name"}</Text>
//<TextInput style={[styles.nameInputStyle,styles.redInputStyle]} 
    // onChangeText={onInput}
///>
// nameInputStyle:{
//     marginBottom:20,
//     borderWidth:1
// },
// redInputStyle:{
//     backgroundColor:'#ffefef',
//     borderColor:'#ffcccc',
//   },
//   yellowInputStyle:{
//     backgroundColor:'#ffffef',
//     borderColor:"#ff0",
//   },
//   greenInputStyle:{
//     backgroundColor:'#efffef',
//     borderColor:'#ccffcc',
//   },
//   blueInputStyle:{
//     backgroundColor:'#efefff',
//     borderColor:'#ccccff',
//   },