import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconHome,
  IconHomeAktif,
  IconUser,
  IconUserAktif,
} from '../../assets/icons';
import {WARNA_SEKUNDER} from '../../utils/constants';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') return isFocused ? <IconHomeAktif /> : <IconHome />;
    if (label === 'Akun') return isFocused ? <IconUserAktif /> : <IconUser />;

    return <IconHome />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      {isFocused && <Text style={styles.text}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  text: {
    fontSize: 18,
    marginLeft: 8,
    fontFamily: 'Poppins-Bold',
    color: WARNA_SEKUNDER,
  },
});
