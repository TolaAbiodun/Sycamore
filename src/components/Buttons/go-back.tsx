/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import SvgBackButton from '../Icons/app/goback';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { FONT_FAMILY_TOMATO_MEDIUM, FONT_SIZE_20 } from '@/styles/fonts';
import { BLACK } from '@/styles/colors';

const GoBack = ({
  onPress,
  goBack,
  title,
}: {
  onPress?: () => void;
  goBack?: any;
  title?: string;
}) => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.arrowWrapper}
        onPress={() => {
          if (onPress) {
            onPress();
          } else if (goBack) {
            navigation.goBack();
          }
        }}
      >
        <SvgBackButton />
      </TouchableOpacity>
      <Text style={[styles.headertext, { color: colors.text }]}>{title}</Text>
      <View style={{ flex: 0.1 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // width: '60%',
    // paddingTop: 15,
    paddingBottom: 5,
  },
  headertext: {
    fontFamily: FONT_FAMILY_TOMATO_MEDIUM,
    fontSize: FONT_SIZE_20,
    color: BLACK,
  },
  arrow: {
    width: 16,
    height: 13,
  },
  arrowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default GoBack;