import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconLogo, IconUserDefault, Logo} from '../../assets';
import {WARNA_SEKUNDER, WARNA_TEXT} from '../../utils/constants';

const HeaderInformation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <IconUserDefault />
        <View style={styles.textWrapper}>
          <Text style={styles.hello}>Selamat Datang</Text>
          <Text style={styles.username}>Iqbal Farhan Nuruddin</Text>
        </View>
      </View>
      <View style={styles.logo}>
        <IconLogo />
      </View>
    </View>
  );
};

export default HeaderInformation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
  },
  textWrapper: {
    marginLeft: 10,
  },
  hello: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    color: WARNA_TEXT,
  },
  username: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: WARNA_SEKUNDER,
  },
});
