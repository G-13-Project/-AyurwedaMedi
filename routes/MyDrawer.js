// drawer navigation handle page
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {UserStack, LoginStack, RegStack, SettingStack} from './UserStack';
// import {Image, TouchableOpacity} from 'react-native';
// import {DrawerActions} from '@react-navigation/native';

const MyDrawer = ({navigation}) => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="User"
        component={UserStack}
        options={{
          headerShown: false,
          drawerActiveBackgroundColor: 'lightgreen',
          // headerLeft: (
          //   <TouchableOpacity
          //     onPress={() => {
          //       navigation.openDrawer();
          //     }}>
          //     <Image source={require('../screens/assets/menu.png')}></Image>
          //   </TouchableOpacity>
          // ),
        }}></Drawer.Screen>
      <Drawer.Screen
        name="Login"
        component={LoginStack}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Register"
        component={RegStack}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingStack}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
