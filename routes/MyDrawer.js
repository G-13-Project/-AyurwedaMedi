// drawer navigation handle page
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {UserStack, LoginStack} from './UserStack';

const MyDrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Pre Medication" component={UserStack} />
      <Drawer.Screen name="Login" component={LoginStack} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
