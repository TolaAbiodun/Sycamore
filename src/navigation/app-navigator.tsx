import { WHITE } from '@/styles/colors';
import { BottomNavigator } from './navigators/bottom-navigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type AppStackList = {
  TabNav: { screen: string };
};

const Stack = createNativeStackNavigator<AppStackList>();

const AppNavigator = () => {
  const screenOptions = {
    headerShown: false,
    contentStyle: {
      backgroundColor: WHITE,
    },
  };

  return (
    <Stack.Navigator initialRouteName="TabNav" screenOptions={screenOptions}>
      <Stack.Screen name="TabNav" component={BottomNavigator} />
    </Stack.Navigator>
  );
};

const AppNavigatorStack = () => {
  return <AppNavigator />;
};

export default AppNavigatorStack;
