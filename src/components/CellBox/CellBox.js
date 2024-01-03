import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ToastAndroid, LogBox } from 'react-native';
import { colors } from '../../util/Colors';
import { B1, B9, BLUE, G1, G8, G9, GREEN, R1, R9, RED, Y1, Y9, YELLOW } from '../../util/Constants';
import RedGoti from '../Goti/RedGoti';
import YellowGoti from '../Goti/YellowGoti';
import BlueGoti from '../Goti/BlueGoti';
import GreenGoti from '../Goti/GreenGoti';
import ReadyRed from '../../../components/Svg/ReadyRed';
import ReadyGreen from '../../../components/Svg/ReadyGreen';
import ReadyYellow from '../../../components/Svg/ReadyYellow';
import ReadyBlue from '../../../components/Svg/ReadyBlue';
import GotiCount from '../../util/GotiCount';
import DefaultCell from '../../util/DefaultCell';



export default CellBox = ({ backgroundColor, position, onPieceSelection, state, arrow, safe, gotiCounter }) => {



    const [highlighColor, setHighlightColor] = React.useState(backgroundColor);
    const [isAnimating, setIsAnimating] = React.useState(false);
    const [intervalId, setIntervalId] = React.useState(undefined);
    const [piece, setPiece] = useState(null)

    const [gotiDetails, setGotiDetails] = useState([])

    const array = [R1, B1, Y1, G1, R9, B9, G9, Y9]

    let shouldRenderBackgroundColor = 1;


   


    const applyAnimationIfNeeded = () => {

        if (shouldAnimateForSelection()) {
            if (!isAnimating) {
                setIsAnimating(true);
                setIntervalId(setInterval(() => {
                    let color = backgroundColor == colors.white ? colors.white : colors.white;
                    shouldRenderBackgroundColor++;
                    shouldRenderBackgroundColor % 2 == 0 ? setHighlightColor(backgroundColor) : setHighlightColor(backgroundColor);
                }, 400));
            }
        }


        else {

            clearInterval(intervalId);
            if (isAnimating) {
                setIsAnimating(false);
                setHighlightColor(backgroundColor);
            }
        }
    }


    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }, [])

    const shouldAnimateForSelection = () => {
        const { red, blue, yellow, green, turn } = state;
        const playerToCheckFor = turn == RED ? red : turn == YELLOW ? yellow : turn == GREEN ? green : turn == BLUE ? blue : undefined;
        return positionMatchesPlayerPosition(playerToCheckFor) && isMovePossibleFromCurrentPosition();
    }

    const positionMatchesPlayerPosition = (playerToCheckFor) => {
        const { one, two, three, four } = playerToCheckFor.pieces;
        return one.position == position ||
            two.position == position ||
            three.position == position ||
            four.position == position;
    }

    const shouldRenderPiece = () => {
        const { red, yellow, blue, green } = state;
        return red.pieces.one.position == position ||
            red.pieces.two.position == position ||
            red.pieces.three.position == position ||
            red.pieces.four.position == position ||

            yellow.pieces.one.position == position ||
            yellow.pieces.two.position == position ||
            yellow.pieces.three.position == position ||
            yellow.pieces.four.position == position ||


            green.pieces.one.position == position ||
            green.pieces.two.position == position ||
            green.pieces.three.position == position ||
            green.pieces.four.position == position ||

            blue.pieces.one.position == position ||
            blue.pieces.two.position == position ||
            blue.pieces.three.position == position ||
            blue.pieces.four.position == position


    }


    const getPiecesOnCell = () => {
        const { red, yellow, blue, green } = state;
        const pieces = [];

        const players = [red, yellow, blue, green];

        players.forEach((player) => {
            const playerPieces = Object.values(player.pieces);
            playerPieces.forEach((piece) => {
                if (piece.position === position) {
                    pieces.push(piece);
                }
            });
        });

        return pieces;
    };


    const getPieceColor = () => {
        const { red, yellow, blue, green } = state;
        let matched = [];
        red.pieces.one.position == position ? matched.push(red.pieces.one) : undefined;
        red.pieces.two.position == position ? matched.push(red.pieces.two) : undefined;
        red.pieces.three.position == position ? matched.push(red.pieces.three) : undefined;
        red.pieces.four.position == position ? matched.push(red.pieces.four) : undefined;

        yellow.pieces.one.position == position ? matched.push(yellow.pieces.one) : undefined;
        yellow.pieces.two.position == position ? matched.push(yellow.pieces.two) : undefined;
        yellow.pieces.three.position == position ? matched.push(yellow.pieces.three) : undefined;
        yellow.pieces.four.position == position ? matched.push(yellow.pieces.four) : undefined;

        blue.pieces.one.position == position ? matched.push(blue.pieces.one) : undefined;
        blue.pieces.two.position == position ? matched.push(blue.pieces.two) : undefined;
        blue.pieces.three.position == position ? matched.push(blue.pieces.three) : undefined;
        blue.pieces.four.position == position ? matched.push(blue.pieces.four) : undefined;

        green.pieces.one.position == position ? matched.push(green.pieces.one) : undefined;
        green.pieces.two.position == position ? matched.push(green.pieces.two) : undefined;
        green.pieces.three.position == position ? matched.push(green.pieces.three) : undefined;
        green.pieces.four.position == position ? matched.push(green.pieces.four) : undefined;

        let colorToReturn = colors.white;
        let id = null
        let updateTime = 0;

        matched.filter((matchedPiece, id) => {
            if (matchedPiece.updateTime > updateTime) {
                updateTime = matchedPiece.updateTime;
                colorToReturn = matchedPiece.color == RED ? red.color : matchedPiece.color == YELLOW ? yellow.color : matchedPiece.color == GREEN ? green.color : matchedPiece.color == BLUE ? blue.color : undefined;
                id = id
            }
        })

        return { colorToReturn, id };

    }

    const getPiece = () => {
        const { red, yellow, green, blue, turn } = state;
        let playerToCheckFor = turn == RED ? red : turn == YELLOW ? yellow : turn == GREEN ? green : turn == BLUE ? blue : undefined;
        const { one, two, three, four } = playerToCheckFor.pieces;
        switch (position) {
            case one.position:
                return one;
            case two.position:
                return two;
            case three.position:
                return three;
            case four.position:
                return four;
            default:
                return undefined;
        }
    }

    const isMovePossibleFromCurrentPosition = () => {
        let isMovePossible = false;
        let positionTocheckFor = parseInt(position.substring(1, position.length))
        const { moves } = state;
        moves.forEach((move) => {
            if (!isMovePossible) {
                let possiblePossition = move == 1 ? 18 : move == 2 ? 17 : move == 3 ? 16 : move == 4 ? 15 : move == 5 ? 14 : undefined;
                if (possiblePossition) {
                    isMovePossible = positionTocheckFor <= possiblePossition;
                } else if (move == 6 && positionTocheckFor < 14) {
                    isMovePossible = true;
                }
            }
        })

        return isMovePossible;
    }


    applyAnimationIfNeeded();
    let color = state.isWaitingForDiceRoll ? backgroundColor : highlighColor;


    // const getNumberOfPiecesAtPosition = (props, position) => {
    //     console.log(props)
    //     let count = 0;
    //     // if (props.pieces.one.position == position) count++;
    //     // if (props.pieces.two.position == position) count++;
    //     // if (props.pieces.three.position == position) count++;
    //     // if (props.pieces.four.position == position) count++;
    //     return count;
    // }


    // {

    //     array.map((position)=>(
    //       gotiDetails.push(GotiCount(position, state.red, state.blue, state.green, state.yellow))
    //     ))


    //  }


    // const count = DefaultCell(position, state.red, state.blue, state.green, state.yellow)


 



    return (

   
     
     


        <TouchableOpacity style={[styles.container, {
            backgroundColor: color, flexWrap: "wrap", justifyContent: "center", alignItems: "center", flexDirection: "row", flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            position: 'relative',
        }]}


            onPress={() => {


                if (isMovePossibleFromCurrentPosition()) {
                    let piece = getPiece();
                    // console.log("194", piece)
                    if (piece) {
                        setPiece(piece)
                        onPieceSelection(piece)
                    }
                }
            }}
        >

           {/* {
            position == R1 ?
            console.log(GotiCount(R1, state.red, state.blue, state.green, state.yellow)):null
            // console.log(`Total players at position ${position}: ${count}`);
            // console.log(`Colors of pieces at position ${position}: ${colors.join(', ')}`);
            
           } */}






            {arrow}
            {safe}












            {/* {getPieceColor().colorToReturn == "#ec1d27" && state.red.playerName ?


                getPiecesOnCell().map((piece, index) => (


                    // console.log(piece)


                    isAnimating ?

                        <ReadyRed id={index} positions={piece.position}></ReadyRed> :
                        <RedGoti id={index} positions={piece.position} ></RedGoti>

                ))

                : null

            } */}




     






            {/* { getPieceColor().colorToReturn == "#ec1d27" &&  state.red.playerName ? 
 
     
     getPiecesOnCell().map((piece, index) => (
      
            piece.color == "#ec1d27" && 
           isAnimating ?
  

        <ReadyRed id={`r${index}`}  positions={piece.position} count = {count}></ReadyRed> :
        <RedGoti 
            id={`r${index}`} 
            positions={piece.position} 
            count = {count}
            
        />
      
                 
 ))  : null   

}





            {getPieceColor().colorToReturn == "#01A147" && state.green.playerName ?


                getPiecesOnCell().map((piece, index) => (


                    // console.log(piece)


                    isAnimating ?

                        <ReadyGreen id={`g${index}`} positions={piece.position} count = {count}></ReadyGreen> :
                        <GreenGoti  id={`g${index}`} positions={piece.position} count = {count} ></GreenGoti>

                       ))    

          
                       : null
            }



        



            {getPieceColor().colorToReturn == "#29b6f6" && state.blue.playerName ?


                getPiecesOnCell().map((piece, index) => (


                    // console.log(piece)


                    isAnimating ?

                        <ReadyBlue   id={`b${index}`}count = {count}  positions={piece.position}></ReadyBlue> :
                        <BlueGoti   id={`b${index}`} count = {count}  positions={piece.position} ></BlueGoti>

                ))

                : null

            } */}





            {

shouldRenderPiece() && getPiecesOnCell().map((piece, index) => (



    

                    piece.color == "red" ?
                        getPieceColor().colorToReturn == "#ec1d27" && state.red.playerName ? isAnimating ?

                            <ReadyRed id={index} positions ={piece.position}></ReadyRed> : <RedGoti id={index} positions ={piece.position} ></RedGoti> : null
                        :

                        piece.color == "green" ?

                            getPieceColor().colorToReturn == "#01A147" && state.green.playerName ? isAnimating ? <ReadyGreen id={index} positions ={piece.position}></ReadyGreen> : <GreenGoti id={index} positions ={piece.position} ></GreenGoti> : null

                            :

                            piece.color == "yellow" ?
                                getPieceColor().colorToReturn == "#ffe01b" && state.yellow.playerName ? isAnimating ? <ReadyYellow id={index} positions ={piece.position}></ReadyYellow> : <YellowGoti id={index} positions ={piece.position}></YellowGoti> : null
                         :

                        piece.color == "blue" ?
                          getPieceColor().colorToReturn == "#29b6f6" && state.blue.playerName ? isAnimating ? <ReadyBlue id={index} positions ={piece.position}></ReadyBlue> : <BlueGoti id={index} positions ={piece.position}></BlueGoti> : null
:null
           ))

            }











        </TouchableOpacity>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',

    },
    pieceStyle: {
        width: 15,
        height: 15,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 8,
        alignSelf: 'center'
    }
})