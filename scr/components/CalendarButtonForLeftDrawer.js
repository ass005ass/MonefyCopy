import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {h, w} from './DimensionWindow';
import Calendar from './icons/Calendar';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const CalendarButtonForLeftDrawer = () => {
  const [toggle, setToggle] = useState(false);
  const {container, textContainer} = styles;

  const DatePicker = () => {
    if (toggle) {
      return (
        <RNDateTimePicker
          mode="date"
          value={new Date()}
          onChange={() => setToggle(false)}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <TouchableOpacity style={container} onPress={() => setToggle(true)}>
      <DatePicker />
      <Calendar />
      <Text style={textContainer}>Выбор даты</Text>
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
    flexDirection: 'row',
  },
  textContainer: {
    fontSize: h * 0.025,
    paddingRight: w * 0.07,
  },
});

export default CalendarButtonForLeftDrawer;
