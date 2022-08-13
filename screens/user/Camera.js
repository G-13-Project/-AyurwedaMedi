import React from 'react';
import {View, Text, Button} from 'react-native';

const Camera = ({navigation}) => {
  const goToHome = () => {
    navigation.push('Home');
  };

  const goToSearchDoc = () => {
    navigation.push('SearchDoc');
  };

  return (
    <View>
      <Text>Camera</Text>
      <Button title={'go to home'} onPress={goToHome} />
      <Button title={'go to SearchDOc'} onPress={goToSearchDoc} />
    </View>
  );
};

export default Camera;
