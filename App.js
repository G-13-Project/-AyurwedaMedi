import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from './routes/MyDrawer';

export default function App() {
  // navigate MyDrawer
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
