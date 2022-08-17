import React from 'react';
import {View, Text, ImageBackground, SafeAreaView, Image} from 'react-native';
import {global} from '../../styles/global';

const Home = () => {
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
          <Text style={global.headText}>Pre-Medication</Text>

          {/*dumy data*/}
          <Image
            source={require('../assets/preMedi.png')}
            resizeMode="stretch"
            style={global.preMedi}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
