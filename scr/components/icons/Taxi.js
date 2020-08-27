import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import {h} from '../DimensionWindow';

const Taxi = () => {
  return (
    <Icon.Button
      name="taxi"
      size={h * 0.05}
      color="#b8860b"
      backgroundColor="#f0ffff"
    />
  );
};

export default Taxi;
