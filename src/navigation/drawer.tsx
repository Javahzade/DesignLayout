import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Meals} from '../views/Meals';
import {Favorites} from '../views/Favorites';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Meals" component={Meals} />
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  );
};
