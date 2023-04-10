import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {Component} from 'react';
import {
  WARNA_HITAM,
  WARNA_SEKUNDER,
  WARNA_TEXT,
  WARNA_UTAMA,
} from '../../utils/constants';
import {ImageBanner} from '../../assets';
import CountData from '../CountData';

const LayananHome = ({onPress, navigation}) => {
  const handleToGo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textJudul}>Sistem Informasi Akademik</Text>
      <Image source={ImageBanner} style={styles.banner} />
      <Text style={styles.textPerak}>Pesantren Rakyat Al-Amin</Text>
      <Text style={styles.textAlamat}>
        Jl. Kopral Suradi 98 RT. 7 RW. 1 Sumberpucung, Malang
      </Text>
      <View style={styles.countData}>
        <CountData tittle="Santri 329" />
        <CountData tittle="Guru 36" />
        <CountData tittle="Staff 10" />
        <CountData tittle="Alumni 45" />
      </View>
      <View style={styles.aktivitas}>
        <Text style={styles.textAktivitas}>Aktivitas</Text>
      </View>
    </View>
  );
};

export default LayananHome;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: WARNA_TEXT,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
  },
  textJudul: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: WARNA_UTAMA,
  },
  banner: {
    marginTop: 5,
    width: '100%',
    height: windowHeight * 0.215,
  },
  textPerak: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: WARNA_UTAMA,
  },
  textAlamat: {
    fontSize: 10,
    fontFamily: 'Poppins-Light',
    color: WARNA_HITAM,
  },
  countData: {
    marginTop: windowHeight * 0.04,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  aktivitas: {
    marginTop: 5,
  },
  textAktivitas: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: WARNA_UTAMA,
  },
});
