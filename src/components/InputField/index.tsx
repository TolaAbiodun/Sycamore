import { ALERT, BLACK, GRAY_MEDIUM, SYC_BLACK, SYC_PRIMARY, WHITE } from '@/styles/colors';
import {
  FONT_FAMILY_DMSANS_MEDIUM,
  FONT_FAMILY_DMSANS_REGULAR,
  FONT_SIZE_12,
  FONT_SIZE_14,
} from '@/styles/fonts';
import React, { ReactNode } from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { scale } from 'react-native-size-matters';

interface Props extends TextInputProps {
  iconPosition?: string;
  icon?: any;
  iconSecondary?: React.ReactNode;
  inputContainerStyle?: any;
  style?: TextInputProps;
  value: string;
  label?: string;
  error?: string;
  hasLargeText?: boolean;
  labelSecondary?: ReactNode;
}

const InputField = ({
  onChangeText,
  iconPosition,
  icon,
  iconSecondary,
  inputContainerStyle,
  style,
  value,
  label,
  labelSecondary,
  error,
  hasLargeText,
  ...props
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

  const getBorderWidth = () => {
    if (focused) {
      return scale(1);
    } else {
      return scale(1);
    }
  };

  const getBorderColor = () => {
    if (error) {
      return ALERT;
    }

    if (focused) {
      return SYC_PRIMARY;
    } else {
      return '#d6d6d6';
    }
  };
  return (
    <View style={[styles.inputContainer, inputContainerStyle]}>
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
            borderColor: getBorderColor(),
            flexDirection: getFlexDirection(),
            borderWidth: getBorderWidth(),
            backgroundColor: WHITE,
          },
        ]}
      >
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          placeholderTextColor={GRAY_MEDIUM}
          {...props}
        />
        <View>{iconSecondary && iconSecondary}</View>
      </View>

      {error !== '' && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  wrapper: {
    height: scale(50),
    borderRadius: 12,
    paddingHorizontal: 5,
    backgroundColor: WHITE,
  },

  wrapperLarge: {
    height: scale(100),
    borderRadius: 12,
    paddingHorizontal: 5,
    textAlignVertical: 'center',
    backgroundColor: WHITE,
  },

  inputContainer: {
    width: '100%',
    backgroundColor: WHITE,
    borderRadius: 12,

    // marginBottom: 8,
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
    color: BLACK,
    backgroundColor: WHITE,
    borderRadius: 12,
  },

  error: {
    color: ALERT,
    paddingTop: scale(4),
    fontSize: FONT_SIZE_12,
  },
  labelCt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: WHITE,
  },
});
