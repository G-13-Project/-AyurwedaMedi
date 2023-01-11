import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {global} from '../../styles/global';
import {Camera} from 'expo-camera';

const CameraScreen = ({navigation}) => {
  const [startCamera, setStartCamera] = React.useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState();

  const __startCamera = async () => {
    const {status} = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') {
      setStartCamera(true);
    } else {
      Alert.alert('Access denied');
    }
  };

  const __takePicture = async () => {
    let camera: Camera;
    if (!camera) {
      return;
    }
    const photo = await camera.takePictureAsync();
    console.log(photo);
    setPreviewVisible(true);
    setCapturedImage(photo);
  };

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
          <Text style={global.titleText}>Camera</Text>

          {/*Camera component */}
          {startCamera ? (
            <Camera
              style={{
                flex: 1,
                width: '90%',
                height: '50%',
                alignSelf: 'center',
                marginBottom: '2%',
              }}
              ref={r => {
                let camera;
                camera = r;
              }}
            />
          ) : (
            <View
              style={{
                flex: 1,
                width: '90%',
                height: '50%',
                backgroundColor: '#fff',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '2%',
              }}>
              <TouchableOpacity
                onPress={__startCamera}
                style={{
                  width: 130,
                  borderRadius: 4,
                  backgroundColor: '#14274e',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Take picture
                </Text>
              </TouchableOpacity>
            </View>
          )}

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={__takePicture}>
              <Image
                source={require('../../assets/camera.png')}
                style={global.camPageBtn}
              />
            </TouchableOpacity>
          </View>
          {/*camera component end*/}
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require('../../assets/menu.png')}
              style={global.menuIcon}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CameraScreen;
