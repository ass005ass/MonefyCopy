import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {h} from '../DimensionWindow';

const Home = () => {
  return (
    <Icon.Button
      name="home-outline"
      size={h * 0.07}
      color="#87cefa"
      backgroundColor="#f0ffff"
    />
  );
};

export default Home;
