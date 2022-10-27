import React, {useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {global} from '../../styles/global';
import {SliderBox} from 'react-native-image-slider-box';

const Home = ({navigation}) => {
  const [image, setImage] = React.useState([
    require('../../assets/slider/1.png'),
    require('../../assets/slider/2.png'),
    require('../../assets/slider/3.png'),
    require('../../assets/slider/4.png'),
    require('../../assets/slider/5.png'),
    require('../../assets/slider/6.png'),
  ]);

  return (
    <SafeAreaView style={global.bgImage}>
      <ImageBackground
        source={require('../../assets/background.png')}
        resizeMode="cover"
        style={global.bgImage}>
        <View style={global.header}>
          <Image
            source={require('../../assets/logoMini.png')}
            resizeMode="stretch"
            style={global.logoMini}
          />
          <Text style={global.headText}>Ayurveda Medi APP</Text>
          <Text style={global.titleText}>Pre-Medication</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require('../../assets/menu.png')}
              style={global.menuIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.slider}>
          <SliderBox
            images={image}
            sliderBoxHeight={540}
            parentWidth={290}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
            autoplay
            circleLoop
            dotColor="#47D50D"
            inactiveDotColor="#90A4AE"
            resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={{
              position: 'absolute',
              bottom: 0,
              padding: 0,
              paddingLeft: -30,
              paddingVertical: 5,
            }}
            ImageComponentStyle={{
              borderRadius: 15,
              width: '100%',
              marginTop: 5,
            }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  slider: {
    paddingTop: 60,
    paddingLeft: 55,
  },
});

export default Home;
