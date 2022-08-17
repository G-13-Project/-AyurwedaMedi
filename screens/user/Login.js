import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import {global} from '../../styles/global';

const Login = ({navigation}) => {
  // for email text input
  const [email, onChangeText] = React.useState('  johndoe@mail.com');
  // for password input
  const [password, onChangePass] = React.useState('  ********');

  // for direct register page
  const goToReg = () => {
    navigation.navigate('Register');
  };

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

          <TextInput
            style={styles.inputMail}
            onChangeText={onChangeText}
            value={email}
          />
          <TextInput
            style={styles.inputPass}
            onChangeText={onChangePass}
            value={password}
          />

          <View style={styles.loginBtn}>
            <Button title="LOGIN" color="#47D50D" />
          </View>

          <Text style={styles.textReg}>
            {' '}
            ──────── Don't have Account? ────────
          </Text>

          <View style={styles.regBtn}>
            <Button title="Register" onPress={goToReg} color="#47D50D" />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputMail: {
    height: 40,
    margin: 12,
    borderWidth: 3,
    color: '#47D50D',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 50,
    borderRadius: 20,
    borderColor: '#47D50D',
    width: 300,
    alignSelf: 'center',
  },
  inputPass: {
    height: 40,
    margin: 12,
    borderWidth: 3,
    color: '#47D50D',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
    borderRadius: 20,
    borderColor: '#47D50D',
    width: 300,
    alignSelf: 'center',
  },
  loginBtn: {
    borderColor: '#47D50D',
    width: 150,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 10,
  },
  textReg: {
    color: 'black',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 40,
  },
  regBtn: {
    borderWidth: 1,
    borderColor: '#47D50D',
    overflow: 'hidden',
    width: 150,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
});

export default Login;
