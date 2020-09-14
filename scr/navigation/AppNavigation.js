import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LeftDrawerNavigator from './LeftDrawerNavigation';
import Filter from '../components/icons/Filter';
import HeaderIcons from '../components/HeaderIcons';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Monefy"
          component={LeftDrawerNavigator}
          options={({navigation}) => ({
            headerLeft: () => <Filter />,
            headerRight: () => <HeaderIcons />,
            headerStyle: {backgroundColor: '#2e8b57'},
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'cursive',
              fontSize: 30,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
