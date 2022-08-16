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
});
