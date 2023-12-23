import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ToastAndroid, Alert, ImageBackground, TouchableOpacity, Animated, ActivityIndicator, Image } from 'react-native';
import { colors } from '../../util/Colors';
import PlayerBox from '../../components/PlayerBox/PlayerBox'
import VerticalCellsContainer from '../../components/VerticalCellsContainer/VerticalCellsContainer';
import HorizontalCellsContainer from '../../components/HorizontalCellsContainer/HorizontalCellsContainer';
import { FINISHED, BLUE, BOTTOM_VERTICAL, FOUR, GREEN, HOME, ONE, RED, THREE, TOP_VERTICAL, TWO, YELLOW, R1, Y1, Y9, G1, G9, B1, B9, R9, R2, R3, R4, R5, Y2, Y3, Y5, G2, G3, G4, G5, B2, B3, B4, B15 } from '../../util/Constants';
import RedGoti from '../../components/Goti/RedGoti';
import YellowGoti from '../../components/Goti/YellowGoti';
import BlueGoti from '../../components/Goti/BlueGoti';
import GreenGoti from '../../components/Goti/GreenGoti';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { FontAwesome5 } from '@expo/vector-icons';
import Arrow1 from '../../../components/Svg/Arrow1';
import Arrow2 from '../../../components/Svg/Arrow2';
import Arrow3 from '../../../components/Svg/Arrow3';
import Arrow4 from '../../../components/Svg/Arrow4';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'



export default class Game extends Component {


    constructor(props) {
        super(props);
        const { red, blue, yellow, green } = colors;
        const { redName, blueName, yellowName, greenName } = props;

        this.rollingSound = new Audio.Sound();
        this.rollingValue = new Animated.Value(0);
        this.onDiceRoll = this.onDiceRoll.bind(this);
        this.state = {
            red: this.initPlayer(RED, red, redName),
            yellow: this.initPlayer(YELLOW, yellow, yellowName),
            green: this.initPlayer(GREEN, green, greenName),
            blue: this.initPlayer(BLUE, blue, blueName),
            isRolling: false,
            diceNumber: 1,
            moves: [],
            bonusCount: 0,
            animateForSelection: false,
            isWaitingForDiceRoll: true,
            turn: blueName !== "" ? BLUE : redName !== "" ? RED : yellowName !== "" ? YELLOW : greenName !== "" ? GREEN : undefined,
            diceRollTestData: [1, 2, 3, 4, 5, 6],
            diceRollTestDataIndex: 0,
            diceValue: 1,
            extraChance: 0,
            redScore: [],
            blueScore: [],
            greenScore: [],
            yellowScore: [],
            rollingRotation: this.rollingValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],


            }),
            currentTurn: null,
            timers: {
                RED: null,
                YELLOW: null,
                GREEN: null,
                BLUE: null,
            },
            redHeart: 3,
            blueHeart: 3,
            greenHeart: 3,
            yellowHeart: 3,
            counter: 0,
            timerScreen: false

        }


    }

    componentDidMount() {

        this.loadSound();
        this.displayTimer()

    }


    displayTimer() {
        const { turn } = this.state;
        const timerId = setTimeout(() => {
            this.moveToNextPlayer();
        }, 15000);  // 15 seconds

        // Store the timerId in the state
        this.setState(prevState => ({
            timers: {
                ...prevState.timers,
                [turn]: timerId
            }
        }));
    }



    moveToNextPlayer() {
        const { turn, timers } = this.state;

        // Clear the current player's timer
        if (timers[turn]) {
            clearTimeout(timers[turn]);
            this.setState(prevState => ({
                timers: {
                    ...prevState.timers,
                    [this.state.turn]: null
                }
            }));

            if (turn == BLUE) {

                if (this.state.blueHeart > 1) {
                    this.setState({
                        blueHeart: this.state.blueHeart - 1
                    })
                }
                else if (this.state.blueHeart <= 1) {
                    this.props.onEnd()
                }

            }
            if (turn == YELLOW) {

                if (this.state.yellowHeart > 1) {
                    this.setState({
                        yellowHeart: this.state.yellowHeart - 1
                    })
                }
                else if (this.state.yellowHeart <= 1) {
                    this.props.onEnd()
                }

            }
            if (turn == RED) {

                if (this.state.redHeart > 1) {
                    this.setState({
                        redHeart: this.state.redHeart - 1
                    })

                }
                else if (this.state.redHeart <= 1) {
                    this.props.onEnd()
                }

            }


            if (turn == GREEN) {
                if (this.state.greenHeart > 1) {
                    this.setState({
                        greenHeart: this.state.greenHeart - 1
                    })
                }
                else if (this.state.greenHeart <= 1) {
                    this.props.onEnd()
                }


            }
        }

        // Get the next player
        const nextPlayer = this.getNextTurn();

        // Update the current turn in the state
        if (nextPlayer) {


            this.setState({
                turn: nextPlayer,

            });



            this.displayTimer()


        } else {
            // Handle the game end or next round logic here
        }
    }





    // setTimer() {

    //     const { turn, moves } = this.state;

    //     const timerId = setTimeout(() => {

    //         this.moveToNextPlayer();
    //     }, 15000);  // 15 seconds

    //     // Store the timerId in the state
    //     this.setState(prevState => ({
    //         timers: {
    //             ...prevState.timers,
    //             [turn]: timerId
    //         }
    //     }));


    // }


    componentWillUnmount() {
        this.unloadSound();

    }


    async loadSound() {
        try {
            await this.rollingSound.loadAsync(require('../../../assets/diceSound.mp3'));

        } catch (error) {
            console.error('Error loading sound:', error);
        }
    }

    async unloadSound() {
        try {
            await this.rollingSound.unloadAsync();
        } catch (error) {
            console.error('Error unloading sound:', error);
        }
    }




    renderDiceIcons() {
        const { diceNumber, isRolling } = this.state;

        if (isRolling) {
            return <Image rollTime={1000} source={require("../../../assets/DICE2.png")}></Image>

            //    <FontAwesome5 name="dice-d6" size={54} color="#fdfffc" 
            //   numDice={1}  // Set the number of dice as needed
            //   rollTime={1000}
            //   faceColor="#ff5733"
            //   dotColor="#ffffff"
            // />;
        }
        if (diceNumber === 1) {
            return <FontAwesome5 name="dice-one" size={58} color="#fdfffc" />;
        } else if (diceNumber === 2) {
            return <FontAwesome5 name="dice-two" size={58} color="#fdfffc" />;
        } else if (diceNumber === 3) {
            return <FontAwesome5 name="dice-three" size={58} color="#fdfffc" />;
        } else if (diceNumber === 4) {
            return <FontAwesome5 name="dice-four" size={58} color="#fdfffc" />;
        } else if (diceNumber === 5) {
            return <FontAwesome5 name="dice-five" size={58} color="#fdfffc" />;
        } else if (diceNumber === 6) {
            return <FontAwesome5 name="dice-six" size={58} color="#fdfffc" />;
        }


        return null; // Return null if the diceValue is not 1-6
    }



    initPlayer(playerType, color, playerName) {

        return {
            // pieces:playerType == RED ? this.initRedPieces(playerType):null || playerType == YELLOW ? this.initYellowPieces(playerType):null || playerType == GREEN ? this.initGreenPieces(playerType):null || playerType == BLUE ? this.initBluePieces(playerType):null  ,
            pieces: this.initPieces(playerType),
            color: color,
            player: playerType,
            playerName: playerName,
            totalScore: null

        }
    }


    initPieces(playerColor) {
        let time = new Date().getTime();
        return {
            one: { position: playerColor == RED ? R1 : playerColor == YELLOW ? Y1 : playerColor == GREEN ? G1 : playerColor == BLUE ? B1 : null, name: ONE, color: playerColor, updateTime: time, oneCount: [] },
            two: { position: playerColor == RED ? R1 : playerColor == YELLOW ? Y1 : playerColor == GREEN ? G1 : playerColor == BLUE ? B1 : null, name: TWO, color: playerColor, updateTime: time, twoCount: [] },
            three: { position: playerColor == RED ? R1 : playerColor == YELLOW ? Y1 : playerColor == GREEN ? G1 : playerColor == BLUE ? B1 : null, name: THREE, color: playerColor, updateTime: time, threeCount: [] },
            four: { position: playerColor == RED ? R1 : playerColor == YELLOW ? Y1 : playerColor == GREEN ? G1 : playerColor == BLUE ? B1 : null, name: FOUR, color: playerColor, updateTime: time, fourCount: [] }
        }
    }

    // initPieces(playerColor) {
    //     let time = new Date().getTime();
    //     return {
    //         one: { position: playerColor == RED ? R1 : playerColor == YELLOW ? Y1 : playerColor == GREEN ? G1 : playerColor == BLUE ? B1 : null , name: ONE, color: playerColor, updateTime: time, oneCount: [] },
    //         two: { position:FINISHED, name: TWO, color: playerColor, updateTime: time, twoCount: [] },
    //         three: {  position:FINISHED, name: THREE, color: playerColor, updateTime: time, threeCount: [] },
    //         four: {  position:playerColor == RED? R1 :playerColor == YELLOW? Y1 : playerColor == GREEN ? G1 : playerColor == BLUE ? B1 : null, name: FOUR, color: playerColor, updateTime: time, fourCount: [] }
    //     }
    // }


    render() {



        return (
            <ImageBackground source={require("../../../assets/bj.png")} style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
                {/* {this.state.turn === RED && <Arrow1></Arrow1>}
                {this.state.turn === YELLOW && <Arrow2></Arrow2>}
                {this.state.turn === GREEN && <Arrow3></Arrow3>}
                {this.state.turn === BLUE && <Arrow4></Arrow4>} */}
                {/* 
                <View style={styles.redGotiBox}>
                    <View style={{ height: "50%", width: "50%" }}>
                        <RedGoti></RedGoti>
                    </View>

                </View>
                <View style={styles.yellowGotiBox}>

                    <View style={{ height: "50%", width: "50%" }}>
                        <YellowGoti></YellowGoti>
                    </View>

                </View>
                <View style={styles.blueGotiBox}>
                    <View style={{ height: "50%", width: "50%" }}>
                        <BlueGoti></BlueGoti></View>
                </View>
                <View style={styles.greenGotiBox}>
                    <View style={{ height: "50%", width: "50%" }}>
                        <GreenGoti></GreenGoti>
                    </View>
                </View> */}
                {/* <View style={styles.redDice}>

                    <View style={styles.diceBtn1}>

                        {this.state.turn == RED &&
                            <Animated.View
                                style={[

                                    {
                                        transform: [{ rotate: this.state.rollingRotation }],
                                    },
                                ]}
                            >
                                <TouchableOpacity onPress={this.onDiceRoll}>{this.renderDiceIcons()}</TouchableOpacity>
                            </Animated.View>
                        }
                    </View>

                </View>
                <View style={styles.yellowDice}>

                    <View style={styles.diceBtn2}>

                        {this.state.turn == YELLOW &&
                            <Animated.View
                                style={[

                                    {
                                        transform: [{ rotate: this.state.rollingRotation }],
                                    },
                                ]}
                            >
                                <TouchableOpacity onPress={this.onDiceRoll}>{this.renderDiceIcons()}</TouchableOpacity>
                            </Animated.View>
                        }
                    </View>

                </View> */}
                {/* <View style={styles.blueDice}> */}
                <View style={[styles.diceBtn3, {
                    backgroundColor: this.state.turn == BLUE ? "#0582ca" : this.state.turn == RED ? "#780000" : this.state.turn == YELLOW ? "#fdc500" : this.state.turn == GREEN ? "#004b23" : "red", borderWidth: 8,
                    borderColor: 'rgba(0,0,0,0.2)',
                }]}>
                    {/* {this.state.turn == BLUE && */}
                    <Animated.View
                        style={[

                            {
                                transform: [{ rotate: this.state.rollingRotation }],
                                backgroundColor: this.state.turn == BLUE ? "#0582ca" : this.state.turn == RED ? "#780000" : this.state.turn == YELLOW ? "#fdc500" : this.state.turn == GREEN ? "#004b23" : null
                            },
                        ]}
                    >
                        <TouchableOpacity onPress={this.onDiceRoll}>{this.renderDiceIcons()}</TouchableOpacity>
                    </Animated.View>
                    {/* } */}

                </View>
                {/* </View> */}
                {/* <View style={styles.greenDice}>
                    <View style={styles.diceBtn1}>

                        {this.state.turn == GREEN &&
                            <Animated.View
                                style={[

                                    {
                                        transform: [{ rotate: this.state.rollingRotation }],
                                    },
                                ]}

                            >
                                <TouchableOpacity onPress={this.onDiceRoll}>{this.renderDiceIcons()}</TouchableOpacity>
                            </Animated.View>
                        }
                    </View>
                </View> */}

                {/* <View style={{position:"absolute", top: 90, left: 60,}}>

             
                </View> */}

                <View style={styles.gameContainer}>

                    <View style={styles.twoPlayersContainer}>
                        {console.log("330", this.state.timers[BLUE], this.state.timers[YELLOW])}
                        {this.renderPlayerBox(this.state.red, this.state.redScore, this.state.redHeart, this.state.timers[RED] ? true : false, { borderTopLeftRadius: 20 })}
                        <VerticalCellsContainer position={TOP_VERTICAL}
                            state={this.state}
                            onPieceSelection={(selectedPiece) => {
                                this.onPieceSelection(selectedPiece);
                            }}
                        />
                        {this.renderPlayerBox(this.state.yellow, this.state.yellowScore, this.state.yellowHeart, this.state.timers[YELLOW] != null ? true : false, { borderTopRightRadius: 20 })}
                    </View>
                    <HorizontalCellsContainer state={this.state}
                        onDiceRoll={() => { this.onDiceRoll() }}
                        onPieceSelection={(selectedPiece) => {
                            this.onPieceSelection(selectedPiece);
                        }}
                    />
                    <View style={styles.twoPlayersContainer}>
                        {this.renderPlayerBox(this.state.blue, this.state.blueScore, this.state.blueHeart, this.state.timers[BLUE] != null ? true : false, { borderBottomLeftRadius: 0 })}
                        <VerticalCellsContainer position={BOTTOM_VERTICAL}
                            state={this.state}
                            onPieceSelection={(selectedPiece) => {
                                this.onPieceSelection(selectedPiece);
                            }}
                        />
                        {this.renderPlayerBox(this.state.green, this.state.greenScore, this.state.greenHeart, this.state.timers[GREEN] ? true : false, { borderBottomRightRadius: 0 })}
                    </View>
                </View>

            </ImageBackground>
        )
    }

    async onDiceRoll() {

        const { timers, turn } = this.state
        if (timers[turn]) {
            clearTimeout(timers[turn]);
            this.setState(prevState => ({
                timers: {
                    ...prevState.timers,
                    [this.state.turn]: null
                }
            }));
        }

        const { diceRollTestDataIndex, diceRollTestData, animateForSelection } = this.state;

        if (animateForSelection) {
            return;
        }

        let updatedDiceRollTestDataIndex = diceRollTestDataIndex + 1;
        if (updatedDiceRollTestDataIndex >= diceRollTestData.length) {
            updatedDiceRollTestDataIndex = 0;
        }
        try {
            if (this.rollingSound) {
                await this.rollingSound.replayAsync();

            } else {
                console.error('Sound object is not properly initialized');
            }
        } catch (error) {
            console.error('Failed to play the sound', error);
        }



        this.setState({ isRolling: true });

        this.rollingValue.setValue(0);
        Animated.timing(this.rollingValue, {
            toValue: 1,
            duration: 400,
            useNativeDriver: false,
        }).start(async () => {
            // Animation completed, update state and perform additional logic
            this.setState({ isRolling: false, diceNumber: this.getRandomInt(), diceRollTestDataIndex: updatedDiceRollTestDataIndex });

            // Delay before additional logic (100ms in your original code)
            await new Promise(resolve => setTimeout(resolve, 100));

            const { moves, diceNumber, turn, extraChance, redScore, yellowScore, greenScore, blueScore } = this.state;
            moves.push(diceNumber);



            if (diceNumber === 6) {



                this.setState({ isRolling: false, moves: moves, extraChance: extraChance + 1, isWaitingForDiceRoll: false }, () => {

                    this.updatePlayerPieces(this.state[turn]

                    )

                });

            }
            else {
                this.setState({ isRolling: false, moves: moves, isWaitingForDiceRoll: false, extraChance: 0 }, () => {
                    this.updatePlayerPieces(this.state[turn])

                });
            }



        });


    }


    // moveToNextPlayer() {
    //     const { turn, timers } = this.state;

    //     console.log("turn", turn)

    //     // Clear the current player's timer
    //     if (timers[turn]) {

    //         if (turn == BLUE) {

    //             if (this.state.blueHeart > 1) {
    //                 this.setState({
    //                     blueHeart: this.state.blueHeart - 1
    //                 })
    //             }

    //         }
    //         if (turn == YELLOW) {

    //             if (this.state.yellowHeart > 1) {
    //                 this.setState({
    //                     yellowHeart: this.state.yellowHeart - 1
    //                 })
    //             }

    //         }
    //         if (turn == RED) {

    //             if (this.state.redHeart > 1) {
    //                 this.setState({
    //                     redHeart: this.state.redHeart - 1
    //                 })

    //             }

    //         }

    //         if (turn == GREEN) {
    //             if (this.state.greenHeart > 1) {
    //                 this.setState({
    //                     greenHeart: this.state.greenHeart - 1
    //                 })
    //             }

    //         }
    //         clearTimeout(timers[turn]);
    //     }

    //     // Get the next player
    //     const nextPlayer = this.getNextTurn();

    //     // Update the current turn in the state
    //     if (nextPlayer) {


    //         this.setState({
    //             turn: nextPlayer,
    //             moves: [],
    //             animateForSelection: false,
    //         });

    //         this.setTimer()


    //     } else {

    //         console.log("game end")
    //     }


    // }


    isPlayerFinished(player) {
        const { one, two, three, four } = player.pieces;
        return one.position === FINISHED && two.position === FINISHED && three.position === FINISHED && four.position === FINISHED;
    }


    getNextTurn() {

        const { turn, yellow, red, green, blue } = this.state;
        const { yellowName, blueName, greenName, redName } = this.props;
        this.setState({ isWaitingForDiceRoll: true })

        let isYellowNext = yellowName != "" && !this.isPlayerFinished(yellow);
        let isGreenNext = greenName != "" && !this.isPlayerFinished(green);
        let isBlueNext = blueName != "" && !this.isPlayerFinished(blue);
        let isRedNext = redName != "" && !this.isPlayerFinished(red);


        if (this.state.bonusCount > 0) {
            this.setState({ bonusCount: this.state.bonusCount - 1 });
            if (this.isPlayerFinished(this.state[turn])) {
                return turn;
            }
        }
        switch (turn) {
            case RED:
                return isYellowNext ? YELLOW : isGreenNext ? GREEN : isBlueNext ? BLUE : undefined;
            case YELLOW:
                return isGreenNext ? GREEN : isBlueNext ? BLUE : isRedNext ? RED : undefined;
            case GREEN:
                return isBlueNext ? BLUE : isRedNext ? RED : isYellowNext ? YELLOW : undefined;
            case BLUE:
                return isRedNext ? RED : isYellowNext ? YELLOW : isGreenNext ? GREEN : undefined;
            default:
                return turn;
        }
    }


    playerHasSingleUnfinishedPiece(player) {
        const { one, two, three, four } = player.pieces;
        let countOfUnfinishedPieces = 0;
        one.position != FINISHED ? countOfUnfinishedPieces++ : undefined;
        two.position != FINISHED ? countOfUnfinishedPieces++ : undefined;
        three.position != FINISHED ? countOfUnfinishedPieces++ : undefined;
        four.position != FINISHED ? countOfUnfinishedPieces++ : undefined;
        return countOfUnfinishedPieces == 1;
    }


    playerHasOptionsForMoves(player) {
        let countMoveOptions = this.getCountMoveOptions(player);
        return countMoveOptions > 1;
    }

    playerHasSinglePossibleMove(player) {
        let countMoveOptions = this.getCountMoveOptions(player);
        return countMoveOptions == 1;
    }

    getCountMoveOptions(player) {
        const { one, two, three, four } = player.pieces;
        // console.log(one, two, three, four)
        const { moves } = this.state;
        let hasSix = moves.filter(move => move == 6).length > 0


        const isMovePossibleForPosition = (position) => {
            // console.log("475", position)
            if (position === FINISHED) {
                return false;
            }
            if (position === HOME) {
                if (hasSix) {
                    return true;
                }
                return false;
            }

            let isMovePossible = false;
            let positionTocheckFor = parseInt(position.substring(1, position.length))

            moves.forEach((move) => {
                // console.log("489", move)
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


        let countOfOptions = 0;
        isMovePossibleForPosition(one.position) ? countOfOptions++ : undefined;
        isMovePossibleForPosition(two.position) ? countOfOptions++ : undefined;
        isMovePossibleForPosition(three.position) ? countOfOptions++ : undefined;
        isMovePossibleForPosition(four.position) ? countOfOptions++ : undefined;
        return countOfOptions;
    }

    getSinglePossibleMove(player) {
        const { one, two, three, four } = player.pieces;
        const { moves } = this.state;
        let hasSix = moves.filter(move => move == 6).length > 0
        let possibleMove = undefined;

        const isMovePossibleForPosition = (position) => {
            if (position === FINISHED) {
                return false;
            }
            if (position === HOME) {
                if (hasSix) {
                    return true;
                }
                return false;
            }

            let isMovePossible = false;
            let positionTocheckFor = parseInt(position.substring(1, position.length))

            moves.forEach((move) => {
                if (!isMovePossible) {
                    let possiblePossition = move == 1 ? 18 : move == 2 ? 17 : move == 3 ? 16 : move == 4 ? 15 : move == 5 ? 14 : undefined;
                    if (possiblePossition) {
                        isMovePossible = positionTocheckFor <= possiblePossition;
                        isMovePossible ? possibleMove = move : undefined;
                    } else if (move == 6 && positionTocheckFor < 14) {
                        isMovePossible = true;
                        possibleMove = move;
                    }
                }
            })

            return isMovePossible;
        }

        if (isMovePossibleForPosition(one.position)) {
            return {
                move: possibleMove,
                piece: one
            }
        }
        if (isMovePossibleForPosition(two.position)) {
            return {
                move: possibleMove,
                piece: two
            }
        }
        if (isMovePossibleForPosition(three.position)) {
            return {
                move: possibleMove,
                piece: three
            }
        }
        if (isMovePossibleForPosition(four.position)) {
            return {
                move: possibleMove,
                piece: four
            }
        }
        return undefined;
    }

    getPieceWithPossileMove(player) {
        const { one, two, three, four } = player.pieces;
        const { moves } = this.state;
        let hasSix = moves.filter(move => move == 6).length > 0

        const isMovePossibleForPosition = (position) => {
            if (position === FINISHED) {
                return false;
            }
            if (position === HOME) {
                if (hasSix) {
                    return true;
                }
                return false;
            }

            let isMovePossible = false;
            let positionTocheckFor = parseInt(position.substring(1, position.length))
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

        if (isMovePossibleForPosition(one.position)) {
            return one;
        }
        if (isMovePossibleForPosition(two.position)) {
            return two;
        }
        if (isMovePossibleForPosition(three.position)) {
            return three;
        }
        if (isMovePossibleForPosition(four.position)) {
            return four;
        }
        return undefined;
    }


    didGetBonusWithNewPosition(piece) {
        let flag = false


        if (piece.position == FINISHED) {
            return true;
        }


        if (piece.position == R1 || piece.position == R9 || piece.position == Y1 || piece.position == Y9 || piece.position == G1 || piece.position == G9 || piece.position == B1 || piece.position == B9) {
            return false;
        }



        const checkIfPositionMatchesExistingPiece = (piece, player) => {
            const { one, two, three, four } = player.pieces;
            // console.log("FINAL PLAYER", one)
            let positionMatched = false;
            if (piece.position == one.position) {
                one.position = one.color == "red" ? R1 : one.color == "yellow" ? Y1 : one.color == "green" ? G1 : one.color == "blue" ? B1 : null;
                // console.log("643", one.oneCount)
                one.oneCount.splice(0, one.oneCount.length)
                positionMatched = true;
            }
            if (piece.position == two.position) {
                two.position = two.color == "red" ? R1 : two.color == "yellow" ? Y1 : two.color == "green" ? G1 : two.color == "blue" ? B1 : null;
                two.twoCount.splice(0, two.twoCount.length)
                positionMatched = true;
            }
            if (piece.position == three.position) {
                three.position = three.color == "red" ? R1 : three.color == "yellow" ? Y1 : three.color == "green" ? G1 : three.color == "blue" ? B1 : null;
                three.threeCount.splice(0, three.threeCount.length)
                positionMatched = true;
            }
            if (piece.position == four.position) {
                four.position = four.color == "red" ? R1 : four.color == "yellow" ? Y1 : four.color == "green" ? G1 : four.color == "blue" ? B1 : null;
                four.fourCount.splice(0, four.fourCount.length)
                positionMatched = true;
            }
            return positionMatched;
        }




        const { red, blue, yellow, green } = this.state;
        if (piece.color != red.player && checkIfPositionMatchesExistingPiece(piece, red)) {
            return true;
        }

        if (piece.color != yellow.player && checkIfPositionMatchesExistingPiece(piece, yellow)) {
            return true;
        }

        if (piece.color != green.player && checkIfPositionMatchesExistingPiece(piece, green)) {
            return true;
        }

        if (piece.color != blue.player && checkIfPositionMatchesExistingPiece(piece, blue)) {
            return true;

        }

        if (this.state.extraChance >= 1) {
            return true;
        }


        return false;
    }



    updatePlayerPieces(player) {
        const { moves } = this.state;
        // console.log("685", player)
        // console.log("685", moves)
        if (moves.length >= 1) {
            if (!this.isPlayerFinished(player)) {

                if (this.playerHasOptionsForMoves(player)) {
                    this.setState({ animateForSelection: true });
                }
                else if (this.playerHasSinglePossibleMove(player)) {
                    if (this.playerHasSingleUnfinishedPiece(player)) {
                        let singlePossibleMove = this.getSinglePossibleMove(player);
                        console.log("singlepossiblemove", singlePossibleMove)

                        if (singlePossibleMove) {
                            const indexOf = moves.indexOf(singlePossibleMove.move);
                            console.log(indexOf)
                            if (indexOf > -1) {
                                moves.splice(indexOf, 1);
                            }
                            this.movePieceByPosition(singlePossibleMove.piece, singlePossibleMove.move);
                        }
                    } else {
                        if (moves.length == 1) {
                            let piece = this.getPieceWithPossileMove(player);
                            this.movePieceByPosition(piece, moves.shift());
                        } else {
                            this.setState({ animateForSelection: true })
                        }
                    }
                }

                else {
                    this.setState(
                        (prevState) => {
                            const updatedPlayer = { ...prevState[player.player] };
                            updatedPlayer.diceValues.push(...moves);
                            return { [player.player]: updatedPlayer };
                        }
                    );



                    this.setState({ turn: this.getNextTurn(), moves: [], animateForSelection: false, })
                }



            }

            else {
                this.setState({ turn: this.getNextTurn(), moves: [], animateForSelection: false })
            }
        }
        else {
            this.setState({ turn: this.getNextTurn(), animateForSelection: false })
        }
    }


    getRandomInt() {
        let randomInt = Math.floor(Math.random() * Math.floor(6));
        return randomInt + 1;
        // const {diceRollTestData,diceRollTestDataIndex} = this.state;
        // return diceRollTestData[diceRollTestDataIndex];
    }



    onPieceSelection = (selectedPiece) => {
        //   const {timers, turn} = this.state
        //     if (timers[turn]) {
        //         clearTimeout(timers[turn]);
        //         this.setState(prevState => ({
        //             timers: {
        //                 ...prevState.timers,
        //                 [this.state.turn]: null
        //             }
        //         }));
        //     }
        // console.log(selectedPiece)
        if (this.state.isWaitingForDiceRoll) {
            return;
        }

        const { moves } = this.state;
        const player = this.state[selectedPiece.color];
        const { one, two, three, four } = player.pieces;

        if (moves.length == 1) {
            if (selectedPiece.position == HOME && moves[0] != 6) {
                return;
            }
            this.movePieceByPosition(selectedPiece, moves.shift());
        }

        else if (moves.length > 1) {
            if (selectedPiece.position == HOME) {
                moves.shift();
                selectedPiece.position = selectedPiece.color == RED ? R1 : selectedPiece.color == YELLOW ? Y1 : selectedPiece.color == GREEN ? G1 : selectedPiece.color == BLUE ? B1 : undefined;
                selectedPiece.updateTime = new Date().getTime();
                this.setState(this.state, () => {
                    if (moves.length == 1) {
                        if (!this.playerHasOptionsForMoves(player)) {
                            this.movePieceByPosition(selectedPiece, moves.shift());
                        } else {
                            const isActivePiece = (piece) => piece.position != HOME && piece.position != FINISHED;
                            let activePieces = [];
                            isActivePiece(one) ? activePieces.push(one) : undefined;
                            isActivePiece(two) ? activePieces.push(two) : undefined;
                            isActivePiece(three) ? activePieces.push(three) : undefined;
                            isActivePiece(four) ? activePieces.push(four) : undefined;
                            let isSamePositionForAllActivePieces = activePieces.every((activePiece) => activePiece.position == activePieces[0].position);
                            if (isSamePositionForAllActivePieces) {
                                this.movePieceByPosition(selectedPiece, moves.shift());
                            }
                        }
                    }
                })
            }

            else {

                const onMoveSelected = (selectedMove) => {
                    if (this.isMovePossibleForPosition(selectedPiece.position, selectedMove)) {
                        // console.log("Move possible")
                        const index = moves.indexOf(parseInt(selectedMove));
                        if (index > -1) {
                            moves.splice(index, 1);
                        }
                        this.movePieceByPosition(selectedPiece, parseInt(selectedMove));
                    } else {
                        ToastAndroid.show("Move not possible", ToastAndroid.LONG);
                        // console.log("Move not possible")
                    }
                }

                let moveOptions = [];
                let optionOne = moves[0].toString();
                moveOptions.push({ text: optionOne, onPress: () => { onMoveSelected(optionOne) } });
                let optionTwo = moves.length > 1 ? moves[1].toString() : undefined;
                optionTwo ? moveOptions.push({ text: optionTwo, onPress: () => { onMoveSelected(optionTwo) } }) : undefined;
                let optionThree = moves.length > 2 ? moves[2].toString() : undefined;
                optionThree ? moveOptions.push({ text: optionThree, onPress: () => { onMoveSelected(optionThree) } }) : undefined;
                // console.log(moveOptions)
                Alert.alert("Select your move", "", moveOptions, { cancelable: true });

            }

        }


        // this.isthereAnyPiecePresent(selectedPiece)


    }



    isMovePossibleForPosition = (position, move) => {
        let isMovePossible = false;
        let positionTocheckFor = parseInt(position.substring(1, position.length))

        let possiblePossition = move == 1 ? 18 : move == 2 ? 17 : move == 3 ? 16 : move == 4 ? 15 : move == 5 ? 14 : undefined;
        if (possiblePossition) {
            isMovePossible = positionTocheckFor <= possiblePossition;
        } else if (move == 6 && positionTocheckFor < 14) {
            isMovePossible = true;
        }

        return isMovePossible;
    }


    movePieceByPosition(piece, move) {

        const { redScore, yellowScore, blueScore, greenScore } = this.state
        let newPosition = "";
        let position = parseInt(piece.position.substring(1, piece.position.length));
        // console.log("856", position)
        let cellAreaIndicator = piece.position.substring(0, 1);




        if (piece.position == HOME && move == 6) {
            newPosition = piece.color == RED ? R1 : piece.color == YELLOW ? Y1 : piece.color == GREEN ? G1 : piece.color == BLUE ? B1 : undefined;
        }
        else if (position <= 13) {

            if ((cellAreaIndicator == "B" && piece.color == RED) ||
                (cellAreaIndicator == "R" && piece.color == YELLOW) ||
                (cellAreaIndicator == "Y" && piece.color == GREEN) ||
                (cellAreaIndicator == "G" && piece.color == BLUE)
            ) {
                if (position + move <= 12) {
                    newPosition = cellAreaIndicator + (position + move);
                } else {
                    let updatedPosition = (position + move + 1);
                    if (updatedPosition == 19) {
                        newPosition = FINISHED;
                    }
                    else {
                        let updatedCellAreaIndicator = cellAreaIndicator == "R" ? "Y" : cellAreaIndicator == "Y" ? "G" : cellAreaIndicator == "G" ? "B" : cellAreaIndicator == "B" ? "R" : undefined;
                        newPosition = updatedCellAreaIndicator + updatedPosition;
                    }
                }
            } else {
                if (position + move <= 13) {
                    newPosition = cellAreaIndicator + (position + move);
                } else {
                    let nextPosition = (position + move) - 13
                    let updatedCellAreaIndicator = cellAreaIndicator == "R" ? "Y" : cellAreaIndicator == "Y" ? "G" : cellAreaIndicator == "G" ? "B" : cellAreaIndicator == "B" ? "R" : undefined;
                    newPosition = updatedCellAreaIndicator + nextPosition;
                }
            }
        }
        else {
            if (position + move <= 19) {
                if (position + move == 19) {
                    newPosition = FINISHED;
                } else {
                    newPosition = cellAreaIndicator + (position + move);
                }
            }

            else {
                newPosition = cellAreaIndicator + position
                return;
            }
        }
        if (newPosition != "") {
            piece.position = newPosition;
            piece.updateTime = new Date().getTime();







            if (piece.name == "one") {
                piece.oneCount.push(move)

            }
            if (piece.name == "two") {
                piece.twoCount.push(move)

            }
            if (piece.name == "three") {
                piece.threeCount.push(move)

            }
            if (piece.name == "four") {
                piece.fourCount.push(move)
            }


            {
                // console.log(piece)
            }

            if (piece.color == "red") {
                redScore.push(move)
                this.setState({ redScore: redScore })
            }
            if (piece.color == "yellow") {
                yellowScore.push(move)
                this.setState({ yellowScore: yellowScore })
            }
            if (piece.color == "blue") {
                blueScore.push(move)
                this.setState({ blueScore: blueScore })
            }
            if (piece.color == "green") {
                greenScore.push(move)
                this.setState({ greenScore: greenScore })
            }



        }

        if (this.didGetBonusWithNewPosition(piece) && !this.isPlayerFinished(this.state[piece.color])) {
            let count = this.state.bonusCount + 1;
            this.setState({ bonusCount: count }, () => {
                // console.log("count", count)
                let player = this.state[piece.color]
                // console.log("moves", this.state.moves)
                if (this.state.moves.length == 1) {
                    // this.setState({animateForSelection:false,moves:this.state.moves})
                    this.updatePlayerPieces(player)
                }
                else if (this.state.moves.length == 0 || this.isPlayerFinished(player)) {
                    this.setState({ animateForSelection: false, moves: [] })
                }

            })
        }
        else {
            this.setState(this.state, () => {
                let player = this.state[piece.color]
                if (this.state.moves.length == 1) {
                    this.updatePlayerPieces(player)

                } else if (this.state.moves.length == 0 || this.isPlayerFinished(player)) {
                    this.setState({ animateForSelection: false, moves: [], turn: this.getNextTurn() }, () => {
                        this.displayTimer()
                    })

                }
            })

        }


    }



    renderPlayerBox(player, playerScore, lifeline, timer, customStyle) {
        const { one, two, three, four } = player.pieces;
        customStyle.opacity = this.state.turn == player.player ? 1 : 0.6;
        let hasSix = this.state.moves.filter((move) => move == 6).length > 0;
        return (
            <PlayerBox color={player.color}
                playerName={player.playerName}
                animateForSelection={this.state.animateForSelection && this.state.turn == player.player && hasSix}
                one={one}
                two={two}
                three={three}
                four={four}
                customStyle={customStyle}
                playerScore={playerScore}
                getNextTurn={this.getNextTurn}
                // movesHistory={player.diceValue} 
                onPieceSelection={(selectedPiece) => {
                    if (this.state.turn == player.player) {
                        this.onPieceSelection(selectedPiece);
                    }
                }}
                timer={timer}
                lifeline={lifeline}
            />
        )
    }

}



const styles = StyleSheet.create({
    container: {
        // width:'100%',
        // height:'100%',
        // // backgroundColor:'#ff0',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    gameContainer: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').width,
        // borderColor:'#999',
        // borderRadius:20,
        elevation: 8,
        backgroundColor: '#fff',
        alignSelf: 'center'
    },
    twoPlayersContainer: {
        flex: 4,
        flexDirection: 'row'
    },
    horizontalCellsContainer: {
        flex: 3,
        backgroundColor: '#fff'
    },
    redDice: {
        height: 75,
        width: 75,
        backgroundColor: "#6da6c0",
        position: "absolute",
        top: 100,
        left: 65,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#f9e7b0",
        borderWidth: 1,
        borderRadius: 8
    },

    diceBtn1: {
        height: 65,
        width: 65,
        backgroundColor: "#ffc3c3",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    yellowDice: {
        height: 75,
        width: 75,
        backgroundColor: "#6da6c0",
        position: "absolute",
        top: 100,
        right: 65,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#f9e7b0",
        borderWidth: 1,
        borderRadius: 8
    },

    diceBtn2: {
        height: 65,
        width: 65,
        backgroundColor: "#ffc3c3",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    blueDice: {
        height: 75,
        width: 75,
        backgroundColor: "#6da6c0",
        position: "absolute",
        bottom: "10%",
        left: "40%",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#f9e7b0",
        borderWidth: 1,
        borderRadius: 8
    },

    diceBtn3: {
        height: 95,
        width: 95,
        position: "absolute",
        bottom: "10%",
        left: "40%",
        // backgroundColor: "#ffc3c3",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },

    greenDice: {
        height: 75,
        width: 75,
        backgroundColor: "#6da6c0",
        position: "absolute",
        bottom: 100,
        right: 65,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#f9e7b0",
        borderWidth: 1,
        borderRadius: 8
    },

    diceBtn4: {
        height: 65,
        width: 65,
        backgroundColor: "#ffc3c3",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    redGotiBox: {
        height: 55,
        width: 62,
        backgroundColor: "#6da6c0",
        position: "absolute",
        top: 110,
        left: 15,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#f9e7b0",
        borderWidth: 1,
        borderRadius: 8,
        // paddingRight: 25
    },
    yellowGotiBox: {
        height: 55,
        width: 62,
        backgroundColor: "#6da6c0",
        position: "absolute",
        top: 108,
        right: 17,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#f9e7b0",
        borderWidth: 1,
        borderRadius: 8,
        // paddingRight: 20
    },


    greenGotiBox: {
        height: 55,
        width: 62,
        backgroundColor: "#6da6c0",
        position: "absolute",
        bottom: 107,
        right: 17,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#f9e7b0",
        borderWidth: 1,
        borderRadius: 8,
        // paddingRight: 20
    },

    blueGotiBox: {
        height: 55,
        width: 62,
        backgroundColor: "#6da6c0",
        position: "absolute",
        bottom: 107,
        left: 15,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#f9e7b0",
        borderWidth: 1,
        borderRadius: 8,
        // paddingRight: 20
    },
})

//  {"color": "yellow", "name": "one", "position": "G7", "updateTime": 1702364699116}
