import {StyleSheet, StatusBar, Platform} from 'react-native';

export const global = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'stretch',
    marginBottom: -30,
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
    fontSize: 25,
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  subHeadText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  menuIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    marginLeft: 15,
    marginTop: -45,
    position: 'absolute',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 30,
    color: '#47D50D',
    fontWeight: 'bold',
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
    width: 60,
    height: 60,
    resizeMode: 'contain',
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
