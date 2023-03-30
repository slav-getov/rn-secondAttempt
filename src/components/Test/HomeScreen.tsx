import React from 'react';
import {StyleSheet, Text} from 'react-native';

type HomeScreenProps = {
  children: string;
};
const HomeScreen = ({children}: HomeScreenProps): JSX.Element => {
  return <Text style={styles.background}>{children}</Text>;
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'red',
    color: 'white',
  },
});
export default HomeScreen;
