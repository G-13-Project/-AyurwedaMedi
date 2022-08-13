import React from 'react';
import {View, Text, Button} from 'react-native';

const SearchDoc = ({navigation}) => {
  const goToHome = () => {
    navigation.push('Home');
  };

  const goToCamera = () => {
    navigation.push('Camera');
  };

  return (
    <View>
      <Text>Search Doctor</Text>
      <Button title={'go to home'} onPress={goToHome} />
      <Button title={'go to camera'} onPress={goToCamera} />
    </View>
  );
};

export default SearchDoc;
