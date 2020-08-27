import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {h} from '../DimensionWindow';

const ToothbrushPaste = () => {
  return (
    <Icon.Button
      name="toothbrush-paste"
      size={h * 0.07}
      color="#6495ed"
      backgroundColor="#f0ffff"
    />
  );
};

export default ToothbrushPaste;
