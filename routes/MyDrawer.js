// drawer navigation handle page
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {UserStack, LoginStack, RegStack, SettingStack} from './UserStack';

const MyDrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="User" component={UserStack} />
      <Drawer.Screen name="Login" component={LoginStack} />
      <Drawer.Screen name="Register" component={RegStack} />
      <Drawer.Screen name="Settings" component={SettingStack} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
