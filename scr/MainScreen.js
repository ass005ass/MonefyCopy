import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import PlusMinus from './components/icons/PlusMinus';
import Picker from './components/Picker';
import DonutChart from './components/DonutСhart';

const MainScreen = () => {
  const {container, donutСhart, picker, twoButton} = styles;
  return (
    <View style={container}>
      <View style={donutСhart}>
        <DonutChart />
      </View>
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
  donutСhart: {
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
