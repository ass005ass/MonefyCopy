import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {h} from '../DimensionWindow';

const Cat = () => {
  return (
    <Icon.Button
      name="cat"
      size={h * 0.06}
      color="#2e8b57"
      backgroundColor="#f0ffff"
    />
  );
};

export default Cat;
