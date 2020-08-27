import React from 'react';
import {View, StyleSheet} from 'react-native';
import {h} from './DimensionWindow';

const Diagram = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    borderRadius: h * 0.3,
    width: '90%',
    height: '100%',
  },
});

export default Diagram;
