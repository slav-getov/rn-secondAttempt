import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type DiceElementProps = {
  numberOnDiceSide: number;
  numberOfSides?: number;
};
const DiceElement = ({numberOnDiceSide}: DiceElementProps): JSX.Element => {
  return (
    <View>
      <Text style={styles.dice}>{numberOnDiceSide}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  dice: {
    padding: 10,
    fontSize: 20,
    backgroundColor: 'blue',
    color: 'white',
    width: '50%',
  },
});

export default DiceElement;
