import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {h} from '../DimensionWindow';

const Gift = () => {
  return (
    <Icon.Button
      name="gift"
      size={h * 0.07}
      color="#b0c4de"
      backgroundColor="#f0ffff"
    />
  );
};

export default Gift;
