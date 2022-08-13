import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = ({navigation}) => {
  const goToCamera = () => {
    navigation.push('Camera');
  };
  const goToSearchDoc = () => {
    navigation.push('SearchDoc');
  };
  return (
    <View>
      <Text>Home</Text>
      <Button title={'go to camera'} onPress={goToCamera} />
      <Button title={'go to searchDoc'} onPress={goToSearchDoc} />
    </View>
  );
};

export default Home;
