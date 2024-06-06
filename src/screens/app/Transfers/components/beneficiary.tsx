import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  FONT_FAMILY_DMSANS_BOLD,
  FONT_FAMILY_DMSANS_REGULAR,
  FONT_SIZE_10,
  FONT_SIZE_11,
  FONT_SIZE_12,
  FONT_SIZE_16,
} from '@/styles/fonts';
import { BLACK, GRAY_DARK, SYC_PRIMARY_FAINT } from '@/styles/colors';
import { Spacer } from '@/components';
import { getRandomColor } from '@/utils/helpers';

const Beneficiary = ({ initials, name }: { initials: string; name: string }) => {
  const bgColors = [SYC_PRIMARY_FAINT, '#E4F0FC', '#FFF6DE', '#FFE6E7'];
  return (
    <TouchableOpacity
      style={{ justifyContent: 'center', alignItems: 'center' }}
      activeOpacity={0.7}
    >
      <View style={[styles.ct, { backgroundColor: getRandomColor(bgColors) }]}>
        <Text style={styles.init}>{initials}</Text>
      </View>
      <Spacer height={5} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Beneficiary;

const styles = StyleSheet.create({
  ct: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  init: { fontFamily: FONT_FAMILY_DMSANS_BOLD, fontSize: FONT_SIZE_16, color: BLACK },
  name: {
    fontFamily: FONT_FAMILY_DMSANS_REGULAR,
    color: GRAY_DARK,
    fontSize: FONT_SIZE_10,
    width: 55,
    textAlign: 'center',
  },
});
