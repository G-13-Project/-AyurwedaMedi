import React from 'react';
import {View, Text, Button, SafeAreaView, ImageBackground} from 'react-native';

const Camera = ({navigation}) => {
  const goToHome = () => {
    navigation.push('Pre Medication');
  };

  const goToSearchDoc = () => {
    navigation.push('SearchDoc');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/background.png')}
        resizeMode="stretch"
        style={{flex: 1}}>
        <View>
          <Text>Camera</Text>
          <Button title="go to home" onPress={goToHome} />
          <Button title="go to searchDoc" onPress={goToSearchDoc} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Camera;
