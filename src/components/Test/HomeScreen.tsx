import React from 'react';
import {StyleSheet, Text} from 'react-native';

type HomeScreenProps = {
  children: string;
};
const HomeScreen = ({children}: HomeScreenProps) => {
  return <Text style={styles.background}>{children}</Text>;
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: 'blue',
    color: 'white',
  },
});
export default HomeScreen;
