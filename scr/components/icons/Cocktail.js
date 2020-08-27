import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import {h} from '../DimensionWindow';

const Cocktail = () => {
  return (
    <Icon.Button
      name="cocktail"
      size={h * 0.06}
      color="#e9967a"
      backgroundColor="#f0ffff"
    />
  );
};

export default Cocktail;
