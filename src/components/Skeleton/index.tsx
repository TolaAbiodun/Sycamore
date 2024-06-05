import {Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';

interface SkeletonProps {
  variant?: 'circle' | 'box';
  width: string | number;
  height: number;
  styles?: any;
  children?: React.ReactNode;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  variant,
  styles,
  children,
}) => {
  const opacity = useRef(new Animated.Value(0.3));

  let borderRadius = 0;

  if (variant === 'circle') {
    borderRadius =
      typeof height === 'string' ? parseInt(height, 10) / 2 : height / 2;
  }

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 900,
        }),
      ]),
    ).start();
  }, [opacity]);

  return (
    <Animated.View
      style={[{opacity: opacity.current, height, width, borderRadius}, styles]}>
      {children}
    </Animated.View>
  );
};

export default Skeleton;
