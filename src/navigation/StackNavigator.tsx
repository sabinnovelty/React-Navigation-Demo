import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeScreen = (props: any) => {
  const navigation: any = useNavigation();
  return (
    <View>
      <Text>Home Screen</Text>

      <Button
        title="Click me"
        onPress={() => {
          navigation.openDrawer();
          // navigation.navigate('Setting');
        }}
      />
    </View>
  );
};

const Login = (props: any) => {
  const navigation: any = useNavigation();
  return (
    <View>
      <Text>Login Screen</Text>

      <Button
        title="Click me"
        onPress={() => {
          navigation.openDrawer();
          // navigation.navigate('Setting');
        }}
      />
    </View>
  );
};

const SettingsScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>SettingsScreen Screen</Text>
      <Button
        title="GO Back"
        onPress={() => {
          // navigation.navigate('Home');
          // navigation.goBack();
        }}
      />
    </View>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Setting" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen name="HomeScreen" component={MyTabs} />
    </Drawer.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: true}}
        /> */}
        {/* <Stack.Screen name="Dashboard" component={MyTabs} /> */}
        <Stack.Screen name="Dashboard" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
