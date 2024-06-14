import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { scale } from 'react-native-size-matters';
import {
  FONT_FAMILY_DMSANS_MEDIUM,
  FONT_FAMILY_DMSANS_REGULAR,
  FONT_SIZE_12,
  FONT_SIZE_14,
} from '@/styles/fonts';
import { BLACK, GRAY_DARK, GRAY_MEDIUM, SYC_BLACK, SYC_PRIMARY, WHITE } from '@/styles/colors';
import { Spacer } from '@/components';

interface Props {
  iconPosition?: string;
  icon?: any;
  iconSecondary?: React.ReactNode;
  inputContainerStyle?: any;
  style?: ViewStyle;
  value: string;
  label?: string;
  hasLargeText?: boolean;
  labelSecondary?: ReactNode;
  onPress: () => void;
  subText?: string;
}

const CustomInputSelector = ({
  iconPosition,
  icon,
  iconSecondary,
  value,
  label,
  labelSecondary,
  hasLargeText,
  onPress,
  subText,
}: Props) => {
  const [focused, setFocused] = React.useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  return (
    <View style={[styles.inputContainer]}>
      <View style={styles.labelCt}>
        {label && <Text style={[styles.inputLabel]}>{label}</Text>}
        {labelSecondary && <View>{labelSecondary}</View>}
      </View>
      <View
        style={[
          hasLargeText ? styles.wrapperLarge : styles.wrapper,
          // eslint-disable-next-line react-native/no-inline-styles
          { alignItems: icon ? 'center' : 'baseline' },
          // eslint-disable-next-line react-native/no-inline-styles
          {
            flexDirection: getFlexDirection(),
            backgroundColor: WHITE,
          },
        ]}
      >
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.7}
          hitSlop={20}
          style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}
        >
          <Text style={styles.val}>{value}</Text>
          <View style={{ marginTop: 5 }}>{icon && icon}</View>
        </TouchableOpacity>
      </View>
      <Spacer height={5} />
      <Text style={styles.sub}>{subText}</Text>
    </View>
  );
};

export default CustomInputSelector;

const styles = StyleSheet.create({
  wrapper: {
    height: scale(50),
    borderRadius: scale(7),
    paddingHorizontal: scale(5),
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: '#d6d6d6',
  },

  wrapperLarge: {
    height: scale(100),
    borderRadius: scale(7),
    paddingHorizontal: scale(5),
    textAlignVertical: 'center',
    backgroundColor: WHITE,
  },

  inputContainer: {
    width: '100%',
    backgroundColor: WHITE,
  },

  inputLabel: {
    fontSize: FONT_SIZE_14,
    fontFamily: FONT_FAMILY_DMSANS_MEDIUM,
    color: SYC_BLACK,
    paddingBottom: 3,
  },

  textInput: {
    flex: 1,
    fontSize: FONT_SIZE_14,
    fontFamily: FONT_FAMILY_DMSANS_REGULAR,
    width: '100%',
    padding: scale(5),
    backgroundColor: WHITE,
  },

  val: {
    fontSize: FONT_SIZE_14,
    fontFamily: FONT_FAMILY_DMSANS_MEDIUM,
    color: BLACK,
    marginLeft: 5,
  },

  labelCt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sub: {
    fontFamily: FONT_FAMILY_DMSANS_REGULAR,
    color: GRAY_DARK,
    fontSize: FONT_SIZE_12,
  },
});
