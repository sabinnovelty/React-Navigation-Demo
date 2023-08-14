import 'react-native-gesture-handler';

import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from './src/Screens/Login';
import Register from './src/Screens/Register';

// Stack Navigation
// Bottom tab /Navigation
// Drawer navigation

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import {createDrawerNavigator} from '@react-navigation/drawer';
import MainNavigator from './src/navigation/StackNavigator';

const Drawer = createDrawerNavigator();







{
  /* <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="Register" component={Register} />
  <Stack.Screen
    name="Main"
    component={MyDrawer}
    options={{headerShown: false}}
  />
</Stack.Navigator>
</NavigationContainer> */
}

function App(): JSX.Element {
  return <MainNavigator />

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
