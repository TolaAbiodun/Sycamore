/* eslint-disable react-native/no-inline-styles */
import SvgBackButton from '../Icons/app/goback';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import {
  FONT_FAMILY_DMSANS_MEDIUM,
  FONT_FAMILY_TOMATO_MEDIUM,
  FONT_SIZE_16,
  FONT_SIZE_18,
  FONT_SIZE_20,
} from '@/styles/fonts';
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
        hitSlop={10}
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
      <View style={{ flex: 0.8 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // width: '60%',
    paddingTop: Platform.OS === 'android' ? 15 : 5,
    paddingBottom: 5,
  },
  headertext: {
    fontFamily: FONT_FAMILY_DMSANS_MEDIUM,
    fontSize: FONT_SIZE_18,
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
