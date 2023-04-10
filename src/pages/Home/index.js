import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import {WARNA_UTAMA} from '../../utils/constants';
import {
  BannerInformation,
  HeaderInformation,
  ImageSlider,
  LayananHome,
  SliderBox,
} from '../../components';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <HeaderInformation />
      </View>
      <LayananHome />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WARNA_UTAMA,
  },
  wrapper: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
