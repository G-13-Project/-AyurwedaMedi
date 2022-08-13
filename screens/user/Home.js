import React from 'react';
import { View, Text, Button, ImageBackground, SafeAreaView } from "react-native";

const Home = ({navigation}) => {
  const goToCamera = () => {
    navigation.push('Camera');
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
          <Button title="go to home" onPress={goToCamera} />
          <Button title="go to searchDoc" onPress={goToSearchDoc} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
