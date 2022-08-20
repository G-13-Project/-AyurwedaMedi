import React from 'react';
import {View, Text, ImageBackground, SafeAreaView, Image} from 'react-native';
import {global} from '../../styles/global';

const SearchDoc = () => {
  return (
    <SafeAreaView style={global.bgImage}>
      <ImageBackground
        source={require('../../assets/background.png')}
        resizeMode="cover"
        style={global.bgImage}>
        <View style={global.header}>
          <Image
            source={require('../../assets/menu.png')}
            resizeMode="stretch"
            style={global.menuIcon}
          />
          <Image
            source={require('../../assets/logoMini.png')}
            resizeMode="stretch"
            style={global.logoMini}
          />
          <Text style={global.headText}>Ayurveda Medi APP</Text>
          <Text style={global.titleText}>Doctors</Text>
          <Image
            source={require('../../assets/DocInfo.png')}
            resizeMode="stretch"
            style={global.docPageImg}
          />

          {/*dumy data for disply*/}
          <Image
            source={require('../../assets/DocInfo.png')}
            resizeMode="stretch"
            style={global.preMedi}
          />
          <Image
            source={require('../../assets/DocInfo.png')}
            resizeMode="stretch"
            style={global.preMedi}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SearchDoc;
