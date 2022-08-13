// Handle non-register user pages
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/user/Home';
import Camera from '../screens/user/Camera';
import SearchDoc from '../screens/user/SearchDoc';

const Stack = createNativeStackNavigator();
// auto hide splash screen
const UserStack = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // navigations
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen name="SearchDoc" component={SearchDoc} />
    </Stack.Navigator>
  );
};

export default UserStack;
