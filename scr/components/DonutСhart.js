import React from 'react';
import {View, StyleSheet} from 'react-native';
import Cocktail from './icons/Cocktail';
import Gift from './icons/Gift';
import ShoppingBasket from './icons/ShoppingBasket';
import Cat from './icons/Cat';
import Taxi from './icons/Taxi';
import ToothbrushPaste from './icons/ToothbrushPaste';
import Diagram from './Diagram';
import Train from './icons/Train';
import Thermometer from './icons/Thermometer';
import Phone from './icons/Phone';
import Car from './icons/Car';
import Tag from './icons/Tag';
import Home from './icons/Home';

const DonutChart = () => {
  const {
    container,
    topContainer,
    middleContainer,
    bottomContainer,
    header,
    middleContainerLeft,
    middleContainerCenter,
    middleContainerRight,
  } = styles;
  return (
    <View style={container}>
      <View style={header} />
      <View style={topContainer}>
        <Cocktail />
        <Gift />
        <ShoppingBasket />
        <Cat />
      </View>
      <View style={middleContainer}>
        <View style={middleContainerLeft}>
          <Taxi />
          <ToothbrushPaste />
        </View>
        <View style={middleContainerCenter}>
          <Diagram />
        </View>
        <View style={middleContainerRight}>
          <Train />
          <Thermometer />
        </View>
      </View>
      <View style={bottomContainer}>
        <Phone />
        <Car />
        <Tag />
        <Home />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0ffff',
  },
  header: {
    flex: 1,
  },
  topContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 9,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  middleContainerLeft: {
    width: '20%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  middleContainerCenter: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainerRight: {
    width: '20%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default DonutChart;
