import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { B1, B9, G1, G9, R1, R9, Y1, Y9 } from './Constants'
import { Ionicons } from '@expo/vector-icons';

const GotiCount = (position,red,blue,green,yellow) => {

const [rOneCount, setROneCount]  = useState(0)
const [bOneCount, setBOneCount]  = useState(0)
const [yOneCount, setYOneCount]  = useState(0)
const [gOneCount, setGOneCount]  = useState(0)
const [rNineCount, setRNineCount]  = useState(0)
const [bNineCount, setBNineCount]  = useState(0)
const [gNineCount, setGNineCount]  = useState(0)
const [yNineCount, setYNineCount]  = useState(0)


const getNumberOfPiecesAtPosition = (props, position) => {
    console.log(props)
         let count = 0;
         if (props.pieces.one.position == position) count++;
         if (props.pieces.two.position == position) count++;
         if (props.pieces.three.position == position) count++;
         if (props.pieces.four.position == position) count++;
         return count;
     }


 switch(position) {
    case R1:
       
        
 }

const getCount =()=>{
    if(position == R1){
        setROneCount(rOneCount + 1)
    }
    else if (position == R9){
        setRNineCount(rNineCount + 1)
    }

    else if (position == B1){
        setBOneCount(bOneCount + 1)
    }
    else if (position == B9){
        setBNineCount(bNineCount + 1)
    }
    else if (position == G1){
        setGOneCount(gOneCount + 1)
    }
    else if (position == G9){
        setGNineCount(gNineCount + 1)
    }
    else if (position == Y1){
        setYOneCount(yOneCount + 1)
    }
    else if (position == Y9){
        setYNineCount(yNineCount + 1)
    }

}
 
}

export default GotiCount