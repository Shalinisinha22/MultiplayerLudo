import { View, Text, SafeAreaView, StatusBar, Platform } from 'react-native'
import React from 'react'
import My from './components/LudoBoard';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TimerScreen from './Screens/TimerScreen';
import LudoBoard from './components/LudoBoard';
import APP from "./src/App"
import HomeScreen from './src/screens/Home/HomeScreen';
import Game from './src/screens/game/Game';
import { NativeBaseProvider } from 'native-base';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
<NativeBaseProvider>
<NavigationContainer>
      <SafeAreaView

        style={{
          paddinTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          flex: 1,
          backgroundColor: "white",

        }}
      >
        <StatusBar
          backgroundColor={"white"}
          barStyle={"dark-content"}
          translucent={false}
         />
         <APP></APP>
         {/* <HomeScreen></HomeScreen> */}
        
        {/* <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Game" component={Game} options={{ headerShown: false }} />
        </Stack.Navigator> */}

      </SafeAreaView>  
    </NavigationContainer>
</NativeBaseProvider>




  )
}

export default App







