import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {h, w} from './DimensionWindow';

const FilterButtonForLeftDrawer = (props) => {
  const {container, textContainer} = styles;
  return (
    <TouchableOpacity style={container}>
      <Text style={textContainer}>{props.name}</Text>
    </TouchableOpacity>
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
    marginLeft: w * 0.03,
    marginTop: h * 0.015,
  },
  textContainer: {
    fontSize: h * 0.025,
  },
});

export default FilterButtonForLeftDrawer;
