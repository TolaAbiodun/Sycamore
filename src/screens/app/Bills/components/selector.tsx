import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { scale } from 'react-native-size-matters';
import {
  FONT_FAMILY_DMSANS_MEDIUM,
  FONT_FAMILY_DMSANS_REGULAR,
  FONT_SIZE_14,
} from '@/styles/fonts';
import { GRAY_MEDIUM, SYC_BLACK, SYC_PRIMARY } from '@/styles/colors';

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
            backgroundColor: '#f5f5f5',
          },
        ]}
      >
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.7}
          hitSlop={20}
          style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}
        >
          <Text>{value}</Text>
          <View>{icon && icon}</View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomInputSelector;

const styles = StyleSheet.create({
  wrapper: {
    height: scale(50),
    borderRadius: scale(7),
    paddingHorizontal: scale(5),
    backgroundColor: '#f5f5f5',
  },

  wrapperLarge: {
    height: scale(100),
    borderRadius: scale(7),
    paddingHorizontal: scale(5),
    textAlignVertical: 'center',
    backgroundColor: '#f5f5f5',
  },

  inputContainer: {
    paddingVertical: scale(5),
    width: '100%',
  },

  inputLabel: {
    fontSize: FONT_SIZE_14,
    fontFamily: FONT_FAMILY_DMSANS_MEDIUM,
    color: SYC_BLACK,
    paddingBottom: 10,
  },

  textInput: {
    flex: 1,
    fontSize: FONT_SIZE_14,
    fontFamily: FONT_FAMILY_DMSANS_REGULAR,
    width: '100%',
    padding: scale(5),
  },

  labelCt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
