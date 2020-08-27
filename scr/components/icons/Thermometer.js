import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import {h} from '../DimensionWindow';

const Thermometer = () => {
  return (
    <Icon.Button
      name="thermometer-alt"
      size={h * 0.065}
      color="#b22222"
      backgroundColor="#f0ffff"
    />
  );
};

export default Thermometer;
