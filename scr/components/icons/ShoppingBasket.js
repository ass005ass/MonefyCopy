import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import {h} from '../DimensionWindow';

const ShoppingBasket = () => {
  return (
    <Icon.Button
      name="shopping-basket"
      size={h * 0.06}
      color="#da70d6"
      backgroundColor="#f0ffff"
    />
  );
};

export default ShoppingBasket;
