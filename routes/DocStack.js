// Handle non-register user pages
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DocHome from '../screens/doctor/DocHome';
import Home from '../screens/user/Home';
import {Image} from 'react-native';
import Camera from '../screens/user/Camera';
import SearchDoc from '../screens/user/SearchDoc';
import {NavigationContainer} from '@react-navigation/native';

// for stack navigation
const Stack = createNativeStackNavigator();

// for bottom tab navigation
const Tab = createBottomTabNavigator();

//stack for DocHome.js
const DocHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DocHome" component={DocHome} />
    </Stack.Navigator>
  );
};

return (
  // bottom navigations
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: 'transparent',
        elevation: 0,
        position: 'absolute',
      },
    }}>
    {/*tab navigation for Pre-medication page*/}
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: () => (
          <Image
            source={require('../assets/home.png')}
            style={global.tabIcons}
          />
        ),
      }}
    />

    {/*tab navigation for camera page*/}
    <Tab.Screen
      name="Camera"
      component={Camera}
      options={{
        tabBarIcon: () => (
          <Image
            source={require('../assets/camera.png')}
            style={global.tabIcons}
          />
        ),
      }}
    />

    {/*tab navigation for searchDoc page*/}
    <Tab.Screen
      name="SearchDoc"
      component={SearchDoc}
      options={{
        tabBarIcon: () => (
          <Image
            source={require('../assets/search.png')}
            style={global.tabIcons}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

// eslint-disable-next-line no-unreachable
export {DocHomeStack};
