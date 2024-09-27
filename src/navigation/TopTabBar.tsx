import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Text} from 'react-native';

const TopTab = createMaterialTopTabNavigator();

export const TopTabBar = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
      }}>
      <TopTab.Screen name="Apple" component={Apple} />
      <TopTab.Screen name="Samsung" component={Samsung} />
      <TopTab.Screen name="Xiaomi" component={Xiaomi} />
      <TopTab.Screen name="Xiaomi1" component={Xiaomi} />
      <TopTab.Screen name="Xiaomi2" component={Xiaomi} />
      <TopTab.Screen name="Xiaomi3" component={Xiaomi} />
      <TopTab.Screen name="Xiaomi4" component={Xiaomi} />
      <TopTab.Screen name="Xiaomi5" component={Xiaomi} />
    </TopTab.Navigator>
  );
};

const Apple = () => {
  return <Text>Apple</Text>;
};
const Samsung = () => {
  return <Text>Samsung</Text>;
};
const Xiaomi = () => {
  return <Text>Xiaomi</Text>;
};
