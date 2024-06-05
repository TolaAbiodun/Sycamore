import { GRAY_LIGHT, GRAY_MEDIUM, SYC_GREEN, SYC_PRIMARY, SYC_RED, WHITE } from '@/styles/colors';
import { Platform, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  FONT_FAMILY_DMSANS_MEDIUM,
  FONT_FAMILY_DMSANS_REGULAR,
  FONT_SIZE_10,
  FONT_SIZE_12,
  FONT_SIZE_14,
  FONT_SIZE_16,
} from '@/styles/fonts';
import HomeScreen from '@/screens/app/Home';
import Home from '@/components/Icons/navigation/home';
import Portfolio from '@/components/Icons/navigation/portfolio';
import LoanFriends from '@/components/Icons/navigation/loan-friends';
import Contribution from '@/components/Icons/navigation/contribution';
import More from '@/components/Icons/navigation/more';

export type TabStackList = {
  Home: undefined;
  Portfolio: undefined;
  'Loan Friends': undefined;
  Contribution: undefined;
  More: undefined;
};

const Tab = createBottomTabNavigator<TabStackList>();

export const BottomNavigator = () => {
  const screenOptions = {
    headerShown: false,
    tabBarHideOnKeyboard: true, // Fix for android bug
    tabBarLabelStyle: styles.tabTitle,
    tabBarActiveTintColor: SYC_GREEN,
    tabBarInactiveTintColor: GRAY_MEDIUM,
    tabBarIconStyle: {
      color: SYC_GREEN,
    },
    tabBarStyle: styles.tabBar,
    presentation: 'modal',
    safeAreaInsets: {
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
    },
  };

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => <Home active={focused} />,
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => <Portfolio active={focused} />,
        }}
      />
      <Tab.Screen
        name="Loan Friends"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => <LoanFriends active={focused} />,
        }}
      />
      <Tab.Screen
        name="Contribution"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => <Contribution active={focused} />,
        }}
      />
      <Tab.Screen
        name="More"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => <More active={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabTitle: {
    fontFamily: FONT_FAMILY_DMSANS_MEDIUM,
    fontSize: 11,
    paddingBottom: Platform.OS === 'android' ? 10 : 0,
  },

  tabBar: {
    borderTopWidth: 1.8,
    borderTopColor: '#f5f5f5',
    backgroundColor: WHITE,
    paddingTop: 7,
    height: Platform.OS === 'android' ? 65 : 90, //handle tab bar style on both ios and android
  },
});
