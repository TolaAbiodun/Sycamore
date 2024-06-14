import {
  GRAY_DARK,
  GRAY_MEDIUM,
  SYC_BLACK,
  SYC_GREEN,
  SYC_PRIMARY,
  SYC_RED,
  WHITE,
} from '@/styles/colors';
import {
  LayoutChangeEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React, { ReactNode } from 'react';
import { scale } from 'react-native-size-matters';
import { FONT_FAMILY_DMSANS_MEDIUM, FONT_SIZE_12, FONT_SIZE_14 } from '@/styles/fonts';

type ButtonVariants = 'OUTLINED' | 'FILLED' | 'SUCCESS' | 'ERROR';

interface ButtonProps {
  children?: ReactNode;
  variant?: ButtonVariants;
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
  icon?: any;
  iconColor?: any;
  iconPosition?: String;
  onPress: () => void;
  unclickable?: boolean;
  onLayout?: (e: LayoutChangeEvent) => void;
  childContainerStyles?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  buttonStyle,
  variant = '',
  icon: Icon,
  disabled,
  onPress,
  unclickable,
  onLayout,
  childContainerStyles,
  iconColor,
  iconPosition,
  style,
}) => {
  const isError = variant === 'ERROR';
  const isFilled = variant === 'FILLED';
  const isSuccess = variant === 'SUCCESS';
  const isOutlined = variant === 'OUTLINED';

  const fontSize = FONT_SIZE_12;
  //   const borderWidth = isOutlined ? 2 : Icon ? 0.4 : 0;
  const borderWidth = isOutlined ? 0 : 0;
  const borderColor = isOutlined ? GRAY_MEDIUM : SYC_PRIMARY;
  // const borderWidth = 2
  const childColor = isFilled
    ? WHITE
    : isError || isSuccess
    ? WHITE
    : Icon
    ? GRAY_DARK
    : SYC_PRIMARY;
  const disabledChildColor = isFilled ? SYC_BLACK : childColor;
  const backgroundColor = isFilled
    ? SYC_PRIMARY
    : isError
    ? SYC_RED
    : isSuccess
    ? SYC_GREEN
    : isOutlined
    ? '#F5F5F5'
    : '';
  const disabledBackgroundColor = isFilled ? '#D6D6D6' : backgroundColor;
  const fontFamily = FONT_FAMILY_DMSANS_MEDIUM;

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: disabled ? disabledBackgroundColor : backgroundColor,
      borderWidth: scale(borderWidth),
      borderColor,
      height: 50,
    },
    childContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: scale(Icon ? 10 : 0),
    },
    pressed: {
      // borderBottomWidth: isOutlined ? 2 : 0,
      transform: [{ translateY: scale(3) }],
    },
    child: {
      fontFamily,
      color: disabled ? disabledChildColor : childColor,
      fontSize: scale(fontSize),
    },
    icon: {
      width: scale(16),
      height: scale(16),
    },
  });

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && !unclickable ? styles.pressed : null,
        buttonStyle,
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <View onLayout={onLayout} style={[styles.childContainer, childContainerStyles]}>
        {iconPosition === 'right' ? (
          <>
            <Text style={[styles.child, style]}>{children}</Text>
            <View>{Icon ? <Icon name color={iconColor} /> : null}</View>
          </>
        ) : (
          <>
            <View>{Icon ? <Icon color={iconColor} /> : null}</View>
            <Text style={[styles.child, style]}>{children}</Text>
          </>
        )}
      </View>
    </Pressable>
  );
};

export default Button;
