import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {h} from '../DimensionWindow';

const Train = () => {
  return (
    <Icon.Button
      name="train"
      size={h * 0.08}
      color="#dc143c"
      backgroundColor="#f0ffff"
    />
  );
};

export default Train;
