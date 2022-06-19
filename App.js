/**
 * @format
 */

 import { AppRegistry } from 'react-native';
 import {name as appName} from './app.json';
 import React, { useState, Component } from 'react';
 import Home from './screens/Home'
 import Add from './screens/Add'
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 
AppRegistry.registerComponent(appName, () => App);
const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Add" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}