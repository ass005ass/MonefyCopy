import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const mainScreen = () => {
  const {
    container,
    tape,
    picker,
    twoButton,
    pickerCenterElement,
    pickerText,
  } = styles;
  return (
    <View style={container}>
      <View style={tape} />
      <TouchableOpacity style={picker}>
        <Icon name="menu" size={50} color="green" />
        <View style={pickerCenterElement}>
          <Text style={pickerText}>Баланс</Text>
        </View>
        <Icon name="menu" size={50} color="green" />
      </TouchableOpacity>
      <View style={twoButton}>
        <Icon name="minus-circle-outline" size={100} color="#db7093" />
        <Icon name="plus-circle-outline" size={100} color="#2e8b57" />
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  twoButton: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  pickerCenterElement: {
    width: '50%',
    height: '80%',
    backgroundColor: '#2e8b57',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderColor: 'darkgreen',
  },
  pickerText: {
    color: '#fff',
    fontSize: 25,
  },
});

export default mainScreen;
