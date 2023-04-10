import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IconAlumni, IconGuru, IconSantri, IconStaff} from '../../assets';
import {WARNA_SEKUNDER, WARNA_TEXT, WARNA_UTAMA} from '../../utils/constants';

const CountData = ({tittle, onPress, navigation}) => {
  const Icon = () => {
    if (tittle === 'Santri 329') return <IconSantri />;
    if (tittle === 'Guru 36') return <IconGuru />;
    if (tittle === 'Staff 10') return <IconStaff />;
    if (tittle === 'Alumni 45') return <IconAlumni />;
    return <IconSantri />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.icon}>
        <Icon />
        <Text style={styles.text}>{tittle.replace(' ', '\n')}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CountData;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: WARNA_UTAMA,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: WARNA_SEKUNDER,
    padding: 5,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: WARNA_TEXT,
    textAlign: 'center',
  },
  icon: {
    marginTop: -30,
  },
});
