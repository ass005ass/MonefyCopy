import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {h} from '../DimensionWindow';

const Phone = () => {
  return (
    <Icon.Button
      name="phone"
      size={h * 0.065}
      color="#d8bfd8"
      backgroundColor="#f0ffff"
    />
  );
};

export default Phone;
