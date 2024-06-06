import { Spacer } from '@/components';
import { GRAY_DARK, SYC_GREEN, SYC_RED, WHITE } from '@/styles/colors';
import {
  FONT_FAMILY_DMSANS_REGULAR,
  FONT_FAMILY_TOMATO_MEDIUM,
  FONT_SIZE_14,
} from '@/styles/fonts';
import { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Animated, StatusBar } from 'react-native';
import LoadingDots from 'react-native-loading-dots';

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: WHITE,
      }}
    >
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView>
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={{ width: 100, height: 100 }}
            />
            <Spacer height={80} />
            <View style={styles.dotsWrapper}>
              <LoadingDots
                size={12}
                colors={[SYC_GREEN, SYC_RED, SYC_GREEN, SYC_RED]}
                bounceHeight={10}
              />
            </View>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.footer}>
              © {new Date().getFullYear()} Sycamore NG. All Rights Reserved.
            </Text>
          </View>
        </Animated.View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 200,
  },
  welcome: {
    fontSize: FONT_SIZE_14,
    fontFamily: FONT_FAMILY_TOMATO_MEDIUM,
    color: SYC_GREEN,
    textAlign: 'center',
    paddingTop: 20,
    width: 300,
  },
  footer: {
    fontSize: FONT_SIZE_14,
    fontFamily: FONT_FAMILY_DMSANS_REGULAR,
    color: GRAY_DARK,
    textAlign: 'center',
  },
  footerContainer: {
    marginBottom: 10,
  },
  dotsWrapper: {
    alignSelf: 'center',
    width: 100,
  },
});
export default SplashScreen;
