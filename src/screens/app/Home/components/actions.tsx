import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { ReactNode } from 'react';
import { BLACK, WHITE } from '@/styles/colors';
import {
  FONT_FAMILY_TOMATO_MEDIUM,
  FONT_SIZE_11,
  FONT_SIZE_12,
  FONT_SIZE_14,
} from '@/styles/fonts';
import { scale } from 'react-native-size-matters';

interface MenuProps {
  title: string;
  icon: ReactNode;
  onPress: () => void;
}

const MenuAction = ({ title, onPress, icon }: MenuProps) => {
  return (
    <TouchableOpacity style={styles.ct} onPress={onPress} activeOpacity={0.7}>
      {icon}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuAction;

const styles = StyleSheet.create({
  ct: {
    padding: 15,
    backgroundColor: BLACK,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1F2C46',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: scale(100),
  },
  title: { color: WHITE, fontFamily: FONT_FAMILY_TOMATO_MEDIUM, fontSize: FONT_SIZE_11 },
});
