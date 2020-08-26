import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {h} from '../DimensionWindow';

const PlusMinus = () => {
  return (
    <View style={styles.plusMinus}>
      <Icon.Button
        name="minus"
        size={h * 0.18}
        color="#db7093"
        backgroundColor="#f0ffff"
      />
      <Icon.Button
        name="plus"
        size={h * 0.18}
        color="#2e8b57"
        backgroundColor="#f0ffff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  plusMinus: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#f0ffff',
  },
});

export default PlusMinus;
