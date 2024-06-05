import React, {ReactNode} from 'react';
import {View, SafeAreaView, StyleProp, ViewStyle} from 'react-native';
import styles from './style';

interface ContainerProps {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const Container = ({style, children}: ContainerProps): JSX.Element => {
  return (
    <SafeAreaView>
      <View style={[styles.wrapper, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default Container;
