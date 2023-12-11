import { View, Text } from 'react-native'
import React from 'react'
import { B1, B9, G1, G9, R1, R9, Y1, Y9 } from './Constants'
import { Ionicons } from '@expo/vector-icons';

const getSafeArea = (position) => {
   switch(position){
    case R1:
        case R9:
        case Y1:
        case Y9:
        case G1:
        case G9:
        case B1:
        case B9:
         return  <Ionicons name="star" size={14} color="white" style={{alignSelf:"center"}}/>
       


   }
}

export default getSafeArea