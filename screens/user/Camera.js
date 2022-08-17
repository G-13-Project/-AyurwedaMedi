import React from 'react';
import {View, Text, SafeAreaView, ImageBackground, Image} from 'react-native';
import {global} from '../../styles/global';

const Camera = () => {
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
          <Text style={global.headText}>Camera</Text>

          {/*dumy data*/}
          <Image
            source={require('../assets/CamWindow.png')}
            resizeMode="stretch"
            style={global.camPageWindow}
          />
          <Image
            source={require('../assets/camera.png')}
            resizeMode="stretch"
            style={global.camPageBtn}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Camera;
