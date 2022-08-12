import React from 'react';
import UserStack from './routes/UserStack';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  // navigate UserStack page
  return (
    <NavigationContainer>
      <UserStack />
    </NavigationContainer>
  );
}
