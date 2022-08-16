import React from 'react';
import {View, Text, SafeAreaView, ImageBackground} from 'react-native';

const Camera = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/background.png')}
        resizeMode="stretch"
        style={{flex: 1}}>
        <View>
          <Text>Camera</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Camera;
