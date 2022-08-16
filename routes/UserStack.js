// Handle non-register user pages
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/user/Home';
import Camera from '../screens/user/Camera';
import SearchDoc from '../screens/user/SearchDoc';
import Login from '../screens/user/Login';

const Stack = createNativeStackNavigator();

// stack for login direct with Login.js
const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

// stack for main screen connect with other function screens
const UserStack = () => {
  // auto hide splash screen
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // navigations
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'lightgreen',
      }}>
      <Stack.Screen name="Pre Medication" component={Home} />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen name="SearchDoc" component={SearchDoc} />
    </Stack.Navigator>
  );
};

export {UserStack, LoginStack};
