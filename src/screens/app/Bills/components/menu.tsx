import { ColorValue, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { ReactNode } from 'react';
import { FONT_FAMILY_TOMATO_MEDIUM, FONT_SIZE_12, FONT_SIZE_14 } from '@/styles/fonts';
import { WHITE } from '@/styles/colors';

interface BillProps {
  icon: ReactNode;
  title: string;
  bgColor: ColorValue;
  bdColor: ColorValue;
  isActive: boolean;
  onPress?: () => void;
}

const BillType = ({ icon, title, bgColor, bdColor, isActive, onPress }: BillProps) => {
  // increase border width if selected
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.ct,
        {
          backgroundColor: isActive ? bgColor : WHITE,
          borderColor: bdColor,
          opacity: isActive ? 1 : 0.6,
        },
      ]}
    >
      {icon}
      <Text style={[styles.txt, { color: bdColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BillType;

const styles = StyleSheet.create({
  ct: {
    width: Platform.OS === 'ios' ? 80 : 70,
    height: Platform.OS === 'ios' ? 80 : 70,
    gap: 10,
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontFamily: FONT_FAMILY_TOMATO_MEDIUM,
    fontSize: FONT_SIZE_12,
  },
});
