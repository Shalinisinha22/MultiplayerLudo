import { View, Text, BackHandler, Button, Dimensions, StyleSheet, ImageBackground,Image, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const Winner = (props) => {
   
const [playerArr, setPlayerArr] = useState(null)
const [tableHead,setHead] =useState(['Status','PlayerName','Total Score'])
const [bluePlayer,setBlue]= useState(props.blue.name)
const [yellowPlayer,setYellow]= useState(props.yellow.name)
const [redPlayer,setRed]= useState(props.red.name)
const [greenPlayer,setGreen]= useState(props.green.name)
console.log(props)

const getPlayerDetails = async()=>{
    try{
        const res = await AsyncStorage.getItem('playerArray' || '0')
        console.log(res)
        setPlayerArr(JSON.parse(res))
    }
    catch(err){
        console.log(err)
    }
     
}

   useEffect(()=>{
    getPlayerDetails()
   },[])

    // useEffect(() => {
    //     const backAction = () => {
    //       Alert.alert('Hold on!', 'Are you sure you want to go back?', [
    //         {
    //           text: 'Cancel',
    //           onPress: () => null,
    //           style: 'cancel',
    //         },
    //         {text: 'YES', onPress: () => BackHandler.exitApp()},
    //       ]);
    //       return true;

    //     };
    
    //     const backHandler = BackHandler.addEventListener(
    //       'hardwareBackPress',
    //       backAction,
    //     );
    
    //     return () => backHandler.remove();
    //   }, []);


  return (
    <View style={{flex:1, alignItems:"center",height:Dimensions.get('screen').height, width:Dimensions.get('screen').width, backgroundColor:"#03045e",color:"white" }}>
        <ImageBackground source={require("../../../assets/winner.png")} style={{height:200,width:Dimensions.get('screen').width}}>

        </ImageBackground>
      <Text style={{fontSize:25,margin:20,color:"white"}}>RESULTS</Text>

        <View style={{height:250,width:350, borderWidth:2, borderColor:"black",marginBottom:20}}>
          <View style={{flex:1, borderColor:"gray",borderWidth:1,flexDirection:"row"}}>
          <View style={styles.box}>
            <Text style={styles.head}>Status</Text>
          </View>
          <View style={styles.box}>
          <Text style={styles.head}>Player</Text>
          </View>
          <View style={styles.box}>
          <Text style={styles.head}>Score</Text>
          </View>
          </View>

          {
        playerArr!= null  && 

          playerArr.map((player,id)=>(
            <View key={id} style={{flex:1, borderColor:"gray",borderWidth:1,flexDirection:"row"}}>
            <View style={[styles.box, {flexDirection:"row", alignItems:"center"}]}>
           { id == 0 ?
            <> 
            <Image source={require("../../../assets/trophy.png")} style={{height:50,width:50}}></Image>
              <Text style={{color:"white"}}>Winner</Text>
               </>   : 
               <Text style={{color:"white"}}>{id==1 ? "Second": id == 2? "Third" : "Fourth"}</Text> 


           }   
           
            </View>
            <View style={styles.box}>
            <Text style={{color:"white"}}>  {player.key == "blue" ? bluePlayer : player.key== "red" ? redPlayer : player.key== "yellow" ? yellowPlayer : player.key== "green" ? greenPlayer :null }</Text>
            </View>
            <View style={styles.box}>
            <Text style={{color:"white"}}>{player.value}</Text> 
            </View>
            </View>
          ))
      
     }

          {/* <View style={{flex:1, borderColor:"gray",borderWidth:1,flexDirection:"row"}}>
          <View style={[styles.box, {flexDirection:"row", alignItems:"center"}]}>
            <Image source={require("../../../assets/trophy.png")} style={{height:50,width:50}}></Image>
            <Text style={{color:"white"}}>Winner</Text> 
          </View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          </View>
          <View style={{flex:1, borderColor:"gray",borderWidth:1,flexDirection:"row"}}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          </View>
          <View style={{flex:1, borderColor:"gray",borderWidth:1,flexDirection:"row"}}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          </View> */}
        </View>
  
    
      <TouchableOpacity style={{backgroundColor:"#fdca40",width:"auto", padding:20}} onPress={()=>props.backToHome()} title='Play Again'>
        <Text style={{color:"white",fontSize:18}}>Back To Home</Text>
      </TouchableOpacity>

      <ImageBackground source={require("../../../assets/winner.png")} style={{height:200,width:Dimensions.get('screen').width,  transform: [{ rotate: "-180deg" }]}}>

</ImageBackground>
    </View>

  )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: {textAlign:"center",fontSize:18,fontWeight:"bold",color:"white" },
    text: { margin: 6 },
    box:{
        flex:1, borderColor:"gray",borderWidth:1,justifyContent:"center" ,alignItems:"center"
    },
    rowBox:{
        flex:1, borderColor:"gray",borderWidth:1,flexDirection:"row" 
    }
  });

export default Winner
