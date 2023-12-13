import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GLView } from 'react-native-3d-model-view';

const App = () => {
  const [diceValue, setDiceValue] = useState(1);
  const modelRef = useRef();

  const rollDice = () => {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomValue);
    modelRef.current.rotateTo({ x: 0, y: 0, z: 0 });
  };

  const render3DModel = () => {
    const diceModels = {
      1: require('./models/dice-1.obj'),
      2: require('./models/dice-2.obj'),
      3: require('./models/dice-3.obj'),
      4: require('./models/dice-4.obj'),
      5: require('./models/dice-5.obj'),
      6: require('./models/dice-6.obj'),
    };

    return (
      <GLView
        style={{ flex: 1 }}
        onContextCreate={() => {}}
        ref={modelRef}
        model={{
          uri: diceModels[diceValue],
        }}
        texture={{
          uri: '',
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>3D Dice Roll App</Text>
      <View style={styles.diceContainer}>{render3DModel()}</View>
      <TouchableOpacity style={styles.rollButton} onPress={rollDice}>
        <Text style={styles.rollButtonText}>Roll Dice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  diceContainer: {
    flex: 1,
    aspectRatio: 1,
    marginBottom: 20,
  },
  rollButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  rollButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
