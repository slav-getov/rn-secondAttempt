import React from 'react';
import {Button, View} from 'react-native';
type ActionableButtonProps = {
  title: string;
  onPress: Function;
};
const ActionableButton = ({title}: ActionableButtonProps) => {
  return <Button title={title} />;
};

export default ActionableButton;
