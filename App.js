import React from 'react';
import MainScreen from './scr/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Monefy"
          component={MainScreen}
          options={{
            headerStyle: {backgroundColor: '#2e8b57'},
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'cursive',
              fontSize: 30,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
