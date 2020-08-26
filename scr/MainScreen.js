import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import PlusMinus from './components/icons/PlusMinus';
import Picker from './components/Picker';

const MainScreen = () => {
  const {container, tape, picker, twoButton} = styles;
  return (
    <View style={container}>
      <View style={tape} />
      <TouchableOpacity style={picker}>
        <Picker />
      </TouchableOpacity>
      <View style={twoButton}>
        <PlusMinus />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tape: {
    flex: 5,
  },
  picker: {
    flex: 1,
  },
  twoButton: {
    flex: 2,
  },
});

export default MainScreen;
