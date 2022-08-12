// Handle non-register user pages
import React, {useEffect} from 'react';
import Home from '../screens/user/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

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
    </Stack.Navigator>
  );
};

export default UserStack;
