import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const Bottom = () => {
  return (
    <BottomTab.Navigator
      tabBar={props => {
        return (
          <View style={{paddingBottom: 100, alignItems: 'center'}}>
            <Text>Privet</Text>
          </View>
        );
      }}>
      <BottomTab.Screen name="One" component={One} />
      <BottomTab.Screen name="Two" component={StackComponents} />
      <BottomTab.Screen name="Three" component={Three} />
    </BottomTab.Navigator>
  );
};

const One = () => {
  const navigation = useNavigation();
  return (
    <Text
      style={{textAlign: 'center', fontSize: 48, color: 'orange'}}
      onPress={() => navigation.navigate('Two2')}>
      One
    </Text>
  );
};
const Two = () => {
  const navigation = useNavigation();
  return (
    <Text
      style={{textAlign: 'center', fontSize: 48, color: 'orange'}}
      onPress={() => navigation.navigate('Three3')}>
      Two
    </Text>
  );
};
const Three = () => {
  const navigation = useNavigation();
  return (
    <Text
      style={{textAlign: 'center', fontSize: 48, color: 'orange'}}
      onPress={() => navigation.navigate('One1')}>
      Three
    </Text>
  );
};

const StackComponents = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={One} name="One1" />
      <Stack.Screen component={Two} name="Two2" />
      <Stack.Screen component={Three} name="Three3" />
    </Stack.Navigator>
  );
};
