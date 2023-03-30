/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomeScreen from './src/components/Test/HomeScreen';
import DiceElement from './src/components/DiceElements/DiceElement';
import {StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View>
      <Text>Hey there, attempt 11</Text>
      <HomeScreen children="This is home screen element which accepts string as children" />
      <View>
        <DiceElement numberOnDiceSide={2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: 'bold',
  },
});

export default App;
