import { View, Text } from 'react-native'
import React from 'react'
import { B12, R12, Y12, G12 } from './Constants'
import { Entypo } from '@expo/vector-icons';
export const getCellArrow = (position) => {


        switch(position){
        case B12 :
             return  <Entypo name="arrow-long-right" size={20} color="red" style={{ marginTop: -1  }} />
        case R12 :
            return <Entypo name="arrow-long-down" size={20} color="#ffe01b" style={{ marginTop: -1 }} />  
            
        case Y12 :
           return <Entypo name="arrow-long-left" size={20} color="green" style={{ marginTop: -1 }} />  
            
        case G12 :
             return  <Entypo name="arrow-long-up" size={20} color="#29b6f6" style={{ marginTop: -1 }} />
         default:
            return null;    
    }
  
}

