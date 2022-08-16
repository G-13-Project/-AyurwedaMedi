import React from 'react';
import { View, Text, ImageBackground, SafeAreaView, Image } from "react-native";
import {global} from '../../styles/global';

const SearchDoc = () => {
  return (
    <SafeAreaView style={global.bgImage}>
      <ImageBackground
        source={require('../assets/background.png')}
        resizeMode="cover"
        style={global.bgImage}>
        <View style={global.header}>
          <Image
            source={require('../assets/logoMini.png')}
            resizeMode="stretch"
            style={global.logoMini}
          />
          <Text style={global.headText}>Doctors</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SearchDoc;
