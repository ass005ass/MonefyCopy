import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {h} from '../DimensionWindow';

const Tag = () => {
  return (
    <Icon.Button
      name="tag"
      size={h * 0.1}
      color="#daa520"
      backgroundColor="#f0ffff"
    />
  );
};

export default Tag;
