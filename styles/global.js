import {StyleSheet, StatusBar, Platform} from 'react-native';

export const global = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
  header: {
    paddingTop: Platform.OS === 'android' ? StatusBar.height : 0,
    marginTop: 30,
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
  },
  headText: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 5,
    color: '#47D50D',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 10,
    color: '#47D50D',
  },
  logoMini: {
    alignSelf: 'flex-end',
    height: 50,
    width: 50,
    resizeMode: 'contain',
    marginTop: 5,
    position: 'absolute',
    marginRight: '5%',
  },
  tabIcons: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    backgroundColor: 'transparent',
    elevation: 0,
  },
  preMedi: {
    alignSelf: 'center',
    marginTop: 30,
  },
  camPageWindow: {
    marginTop: 30,
    alignSelf: 'center',
    width: 320,
    height: 400,
  },
  camPageBtn: {
    marginTop: 20,
    alignSelf: 'center',
  },
  docPageImg: {
    marginTop: 50,
    alignSelf: 'center',
  },
});
