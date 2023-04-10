import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SplashBackground, Logo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground source={SplashBackground} style={styles.background}>
        <View style={styles.containerText}>
          <Text style={styles.text1}>SISTEM INFORMASI AKADEMIK</Text>
          <Text style={styles.text2}>Pesantren Rakyat Al-Amin</Text>
          <Image source={Logo} style={styles.logo} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11442f',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 206,
    height: 196,
  },
  text1: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    justifyContent: 'center',
    color: '#feffff',
  },
  text2: {
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
    justifyContent: 'center',
    color: '#feffff',
    marginBottom: 20,
  },
  containerText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
