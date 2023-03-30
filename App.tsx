/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import HomeScreen from './src/components/Test/HomeScreen';
import DiceElement from './src/components/DiceElements/DiceElement';
import {StyleSheet, Text, View, FlatList} from 'react-native';

function App(): JSX.Element {
  const [items, setItems] = useState([
    {firstName: 'Mike', id: 0},
    {firstName: 'Stephen', id: 1},
    {firstName: 'Galle', id: 2},
    {firstName: 'Judge', id: 3},
    {firstName: 'Clarence', id: 4},
  ]);
  return (
    <View>
      <Text>Hey there, attempt 11</Text>
      <HomeScreen children="This is home screen element which accepts string as children" />
      <View>
        <FlatList
          keyExtractor={item => item.firstName}
          data={items}
          renderItem={({item}) => <DiceElement numberOnDiceSide={item.id} />}
        />
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
  mainSection: {
    backgroundColor: 'black',
    //flex: 1,
    //flex of 1 will handle full screen
  },
});

export default App;
