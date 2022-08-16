import React from 'react';
import {View, Text, Button, ImageBackground, SafeAreaView} from "react-native";

const SearchDoc = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/background.png')}
        resizeMode="stretch"
        style={{flex: 1}}>
        <View>
          <Text>Search Doctor</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SearchDoc;
