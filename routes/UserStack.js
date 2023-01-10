// Handle non-register user pages
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/user/Home';
import Camera from '../screens/user/Camera';
import SearchDoc from '../screens/user/SearchDoc';
import Login from '../screens/user/Login';
import Register from '../screens/user/Register';
import Settings from '../screens/user/Settings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {global} from '../styles/global';
import DocHome from '../screens/doctor/DocHome';

// for stack navigation
const Stack = createNativeStackNavigator();

// for bottom tab navigation
const Tab = createBottomTabNavigator();

// stack for login direct with Login.js
const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Log in" component={Login} />
    </Stack.Navigator>
  );
};

// stack for Register direct with Register.js
const RegStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Registration" component={Register} />
    </Stack.Navigator>
  );
};

// stack for Setting direct with Settings.js
const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Setting" component={Settings} />
    </Stack.Navigator>
  );
};

// stack for DocHome.js
const DochomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dochome" component={DocHome} />
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
};

export {UserStack, LoginStack, RegStack, SettingStack, DochomeStack};
