import React from 'react';
import {View, Text, ImageBackground, Image, SafeAreaView} from 'react-native';
import {global} from '../../styles/global';

const Register = () => {
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
          <Text style={global.titleText}>Ayurveda Medi APP</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Register;
