import React from 'react';
import { View, Text, Button, ImageBackground, SafeAreaView } from "react-native";

const SearchDoc = ({navigation}) => {
  const goToHome = () => {
    navigation.push('Pre Medication');
  };

  const goToCamera = () => {
    navigation.push('Camera');
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
          <Button title="go to searchDoc" onPress={goToCamera} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SearchDoc;
