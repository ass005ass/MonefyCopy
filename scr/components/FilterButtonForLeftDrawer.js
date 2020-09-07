import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {h} from './DimensionWindow';

const FilterButtonForLeftDrawer = (props) => {
  const {container, textContainer} = styles;
  return (
    <View style={container}>
      <Text style={textContainer}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: h * 0.085,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#2e8b57',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    fontSize: h * 0.025,
  },
});

export default FilterButtonForLeftDrawer;
