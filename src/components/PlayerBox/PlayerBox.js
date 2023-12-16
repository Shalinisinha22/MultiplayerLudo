import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { colors } from '../../util/Colors';
import { HOME } from '../../util/Constants';
import RedGoti from '../Goti/RedGoti';
import BlueGoti from '../Goti/BlueGoti';
import YellowGoti from '../Goti/YellowGoti';
import GreenGoti from '../Goti/GreenGoti';
import ReadyRed from '../../../components/Svg/ReadyRed';
import ReadyGreen from '../../../components/Svg/ReadyGreen';
import ReadyYellow from '../../../components/Svg/ReadyYellow';
import ReadyBlue from '../../../components/Svg/ReadyBlue';


export default PlayerBox = ({ color, customStyle, one, two, three, four, onPieceSelection, animateForSelection, playerName, playerScore }) => {


    { 
        console.log("playerScore", playerScore)
     }
    const [isAnimating, setIsAnimating] = React.useState(false);
    const [backgroundColor, setBackgroundColor] = React.useState(color);
    const [intervalId, setIntervalId] = React.useState(undefined);
    const [totalScore, setScore] = useState(0)

    useEffect(() => {
        let sum = 0
        for (let i = 0; i < playerScore.length; i++) {

            sum = playerScore[i] + sum

        }
        setScore(sum)

    })
    let shouldRenderBackgroundColor = 1;
    const applyAnimationIfNeeded = () => {
        if (animateForSelection) {
            if (!isAnimating) {
                setIsAnimating(true);
                setIntervalId(setInterval(() => {
                    shouldRenderBackgroundColor++;
                    shouldRenderBackgroundColor % 2 == 0 ? setBackgroundColor(color) : setBackgroundColor(color);
                }, 400));
            }
        } else {
            clearInterval(intervalId);
            if (isAnimating) {
                setIsAnimating(false);
                setBackgroundColor(color);
            }
        }

    }
    const renderPiece = (piece) => {
        if (piece.position == HOME) {

            return (
                <TouchableOpacity style={{ flex: 1 }} onPress={() => { onPieceSelection(piece) }}>
                    {/* <View style={[styles.circle, { backgroundColor: color, borderRadius: 20 }]}>

                     


                        {console.log(isAnimating)}


                        { playerName !== "" ? backgroundColor == "#ec1d27"  ? isAnimating ? <ReadyRed></ReadyRed> : <RedGoti></RedGoti> : null:null}

                       
                        {playerName !== "" ?backgroundColor == "#01A147"  ? isAnimating ? <ReadyGreen></ReadyGreen> : <GreenGoti></GreenGoti> : null : null}
                        {playerName !== "" ? backgroundColor == "#ffe01b" ? isAnimating ? <ReadyYellow></ReadyYellow> : <YellowGoti></YellowGoti> : null:null}
                        {playerName !== "" ?backgroundColor == "#29b6f6" ? isAnimating ? <ReadyBlue></ReadyBlue> : <BlueGoti></BlueGoti> : null:null}
                    </View> */}
                </TouchableOpacity>



            );
        }
        return (
            <TouchableOpacity style={{ flex: 1 }}>
                {/* <View style={[styles.circle, { backgroundColor: backgroundColor, borderRadius: 20 }]}>

                </View> */}
            </TouchableOpacity>
        );
    }
    applyAnimationIfNeeded();
    return (
        <View style={[{ backgroundColor: color, flex: 4, borderRadius: 20 }]}>
            {/* customStyle */}
            <View style={[styles.innerContainer, { backgroundColor: color }]}>

                <View style={{ flex: 1, alignItems: "flex-end", padding: 20 }}>
                    <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>Score</Text>
                    <Text style={{ fontSize: 20, color: "white" }}>{totalScore}</Text>
                </View>


                <View style={{ flex: 3, alignItems: "flex-start" }}>
                    <Image source={require("../../../assets/user2.png")} style={{ height: 68, width: 80, resizeMode: "contain", elevation: 5 }}></Image>
                </View>

                <View style={{ flex: 1, height: 5, borderColor: "white", borderWidth: 1, borderRadius: 7, opacity: 0.4 }}>

                </View>


                {/* <View style={[styles.piecesContainer]}>




                    {renderPiece(one)}
                    {renderPiece(two)}

                </View>
                <View style={styles.piecesContainer}>
                    {renderPiece(three)}
                    {renderPiece(four)}
                </View> */}

                {/* {
                color == "#ec1d27"  &&
                 <> 

                  <View style={{flex:3, alignItems:"flex-start"}}>
                <Image source={require("../../../assets/user2.png")} style={{height:68, width:70, resizeMode:"contain", elevation:5}}></Image>
                </View>
                <View style={{flex:1, height:5, borderColor:"white", borderWidth:1,borderRadius:8, backgroundColor:"#780000"}}>

                </View></>
              
             } */}



            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        backgroundColor: "#fff",
        margin: 0
        // margin: 30,
        // borderRadius:20
    },
    piecesContainer: {
        flexDirection: 'row',
        flex: 1
    },
    pieceStyle: {
        flex: 1,
        margin: 10,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: "#000"
    },
    circle: {
        width: 25,
        height: 25,
        borderRadius: 14,
        backgroundColor: '#ec1d27', // Change the color as needed
        position: 'absolute',
        top: 15,
        left: 10,
        // marginTop: 1,
    },
})