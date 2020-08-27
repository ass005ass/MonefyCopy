import React from 'react';
import {View, StyleSheet} from 'react-native';
import Search from './icons/Search';
import Swap from './icons/Swap';
import Ellipsis from './icons/Ellipsis';

const HeaderIcons = () => {
  return (
    <View style={styles.container}>
      <Search />
      <Swap />
      <Ellipsis />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default HeaderIcons;
