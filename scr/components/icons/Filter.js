import React from 'react';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Filter = () => {
  const navigation = useNavigation();
  return (
    <Icon.Button
      name="md-filter"
      size={25}
      color="#fff"
      backgroundColor="#2e8b57"
      paddingLeft={15}
      onPress={() => {
        navigation.dispatch(DrawerActions.toggleDrawer());
      }}
    />
  );
};

export default Filter;
