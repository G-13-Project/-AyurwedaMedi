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
  TouchableOpacity,
} from 'react-native';
import {global} from '../../styles/global';

const Login = ({navigation}) => {
  // // for email text input
  // const [email, onChangeText] = React.useState('  johndoe@mail.com');
  // // for password input
  // const [password, onChangePass] = React.useState('  ********');

  return (
    <SafeAreaView style={global.bgImage}>
      <ImageBackground
        source={require('../../assets/background.png')}
        resizeMode="cover"
        style={global.bgImage}>
        <View style={global.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require('../../assets/menu.png')}
              resizeMode="stretch"
              style={global.menuIcon}
            />
          </TouchableOpacity>
          <Image
            source={require('../../assets/logoMini.png')}
            resizeMode="stretch"
            style={global.logoMini}
          />

          <Text style={global.headText}>Ayurveda Medi APP</Text>
          <Text style={global.subHeadText}>Log In</Text>
          <TextInput
            style={styles.inputMail}
            placeholder="  Email"
            placeholderTextColor="#47D50D"
          />
          <TextInput
            style={styles.inputPass}
            placeholder="  Password"
            placeholderTextColor="#47D50D"
          />

          <View style={styles.loginBtn}>
            <Button title="LOGIN" color="#47D50D" />
          </View>

          <Text style={styles.textReg}>
            {' '}
            ──────── Don't have an Account? ────────
          </Text>

          <Text
            style={styles.regBtn}
            onPress={() => navigation.navigate('Register')}>
            Register
          </Text>
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
    marginTop: 40,
  },
  regBtn: {
    marginTop: 10,
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Login;
