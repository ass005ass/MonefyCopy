import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import MainScreen from '../MainScreen';
import FilterButtonForLeftDrawer from '../components/FilterButtonForLeftDrawer';
import CalendarButtonForLeftDrawer from '../components/CalendarButtonForLeftDrawer';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = () => {
  return (
    <DrawerContentScrollView>
      <FilterButtonForLeftDrawer name="Все счета" />
      <FilterButtonForLeftDrawer name="День" />
      <FilterButtonForLeftDrawer name="Неделя" />
      <FilterButtonForLeftDrawer name="Месяц" />
      <FilterButtonForLeftDrawer name="Год" />
      <FilterButtonForLeftDrawer name="Все" />
      <FilterButtonForLeftDrawer name="Интервал" />
      <CalendarButtonForLeftDrawer />
    </DrawerContentScrollView>
  );
};

const LeftDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <CustomDrawerContent />}
      drawerStyle={{width: '60%', backgroundColor: '#f0ffff'}}>
      <Drawer.Screen name="Home" component={MainScreen} />
    </Drawer.Navigator>
  );
};

export default LeftDrawerNavigator;
