import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IconAkun, IconAkunActive, IconHome, IconHomeActive, IconPesanan, IconPesananActive } from '../../assets'
import { WARNA_UTAMA, WARNA_DISABLE } from '../../utils/constant'

const TabItem = ({isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
      if(label === "Home") return isFocused ? <IconHomeActive/> : <IconHome />

      if(label === "Pesanan") return isFocused ? <IconPesananActive/> : <IconPesanan />

      if(label === "Akun") return isFocused ? <IconAkunActive/> : <IconAkun />

      return <IconHome />
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (isFocused) => ({
        fontSize: 13,
        color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
        marginTop: 8
    })
});
