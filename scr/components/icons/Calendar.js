import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {h} from '../DimensionWindow';

const Calendar = () => {
  return (
    <Icon.Button
      name="calendar-today"
      size={h * 0.03}
      color="#2e8b57"
      backgroundColor="#f0ffff"
    />
  );
};

export default Calendar;
