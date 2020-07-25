import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IconAddSaldo, IconGetPoint} from '../../assets';
import {WARNA_SEKUNDER} from '../../utils/constant';

const ButtonIcon = ({title}) => {
  const Icon = () => {
    if (title === 'Add Saldo') return <IconAddSaldo />;

    if (title === 'Get Point') return <IconGetPoint />;

    return <IconAddSaldo />;
  };

  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Icon />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  button: {
    backgroundColor: WARNA_SEKUNDER,
    padding: 7,
    borderRadius: 10,
  },
  text: {
    fontSize: 10,
    fontFamily: 'TitilliumWeb-Regular',
    textAlign: 'center'
  },
});
