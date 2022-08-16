import React from 'react';
import {View, Text, ImageBackground, SafeAreaView} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/background.png')}
        resizeMode="stretch"
        style={{flex: 1}}>
        <View>
          <Text>Home</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
