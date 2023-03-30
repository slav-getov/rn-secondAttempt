import React from 'react';
import {View, Text} from 'react-native';

type DiceElementProps = {
  numberOnDiceSide: number;
  numberOfSides?: number;
};
const DiceElement = ({numberOnDiceSide}: DiceElementProps): JSX.Element => {
  return (
    <View>
      <Text>{numberOnDiceSide}</Text>
    </View>
  );
};

export default DiceElement;
