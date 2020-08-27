import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Rub from './icons/Rub';
import {h} from './DimensionWindow';

const Picker = () => {
  const {container, pickerText, pickerCenterElement} = styles;
  return (
    <View style={container}>
      <Icon name="menu" size={h * 0.06} color="#2e8b57" />

      <View style={pickerCenterElement}>
        <Text style={pickerText}>
          Баланс <Rub />
        </Text>
      </View>

      <Icon name="menu" size={h * 0.06} color="#2e8b57" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0ffff',
  },
  pickerText: {
    color: '#fff',
    fontSize: 25,
  },
  pickerCenterElement: {
    width: '60%',
    height: '70%',
    backgroundColor: '#2e8b57',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderColor: 'darkgreen',
  },
});

export default Picker;
