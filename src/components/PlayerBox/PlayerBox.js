import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
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


export default PlayerBox = ({ color, customStyle, one, two, three, four, onPieceSelection, animateForSelection,playerName }) => {

    const [isAnimating, setIsAnimating] = React.useState(false);
    const [backgroundColor, setBackgroundColor] = React.useState(color);
    const [intervalId, setIntervalId] = React.useState(undefined);
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
                    <View style={[styles.circle, { backgroundColor: color, borderRadius: 20 }]}>

                        {/* color */}


                        {console.log(isAnimating)}

                        {/* <ReadyRed></ReadyRed> */}

                        { playerName !== "" ? backgroundColor == "#ec1d27"  ? isAnimating ? <ReadyRed></ReadyRed> : <RedGoti></RedGoti> : null:null}

                        {/* {backgroundColor == "#ec1d27" && <ReadyRed></ReadyRed>} */}
                        {playerName !== "" ?backgroundColor == "#01A147"  ? isAnimating ? <ReadyGreen></ReadyGreen> : <GreenGoti></GreenGoti> : null : null}
                        {playerName !== "" ? backgroundColor == "#ffe01b" ? isAnimating ? <ReadyYellow></ReadyYellow> : <YellowGoti></YellowGoti> : null:null}
                        {playerName !== "" ?backgroundColor == "#29b6f6" ? isAnimating ? <ReadyBlue></ReadyBlue> : <BlueGoti></BlueGoti> : null:null}
                    </View>





                </TouchableOpacity>



            );
        }
        return (
            <TouchableOpacity style={{ flex: 1 }}>
                <View style={[styles.circle, { backgroundColor: backgroundColor, borderRadius: 20 }]}>

                </View>
            </TouchableOpacity>
        );
    }
    applyAnimationIfNeeded();
    return (


        <View style={[{ backgroundColor: color, flex: 4 }]}>
            {/* customStyle */}
            <View style={[styles.innerContainer, {}]}>
                <View style={[styles.piecesContainer]}>


                    {renderPiece(one)}
                    {renderPiece(two)}

                </View>
                <View style={styles.piecesContainer}>
                    {renderPiece(three)}
                    {renderPiece(four)}
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 30,
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