import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {h} from '../DimensionWindow';

const Car = () => {
  return (
    <Icon.Button
      name="car-hatchback"
      size={h * 0.075}
      color="#6a5acd"
      backgroundColor="#f0ffff"
    />
  );
};

export default Car;
