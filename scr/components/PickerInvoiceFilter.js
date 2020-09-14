import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {h, w} from './DimensionWindow';

const PickerInvoiceFilter = (props) => {
  const {container, containerPicker} = styles;
  const [selectedValue, setSelectedValue] = useState('Все счета');

  return (
    <View style={container}>
      <Picker
        style={containerPicker}
        mode="dropdown"
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Все счета" value="key0" />
        <Picker.Item label="Зарплатная карта" value="key1" />
        <Picker.Item label="Наличные" value="key2" />
        <Picker.Item label="Платежная карта" value="key3" />
      </Picker>
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
    marginLeft: w * 0.03,
    marginTop: h * 0.015,
    marginBottom: h * 0.025,
  },
  containerPicker: {
    width: '100%',
    height: h * 0.085,
  },
});

export default PickerInvoiceFilter;
