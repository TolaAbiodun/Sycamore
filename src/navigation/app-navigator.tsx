import { WHITE } from '@/styles/colors';
import { BottomNavigator } from './navigators/bottom-navigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PortfolioScreen from '@/screens/app/Portfolio';
import LoanFriendsScreen from '@/screens/app/Loans';
import MoreScreen from '@/screens/app/More';
import ContributionScreen from '@/screens/app/Contribution';

export type AppStackList = {
  TabNav: { screen: string };
  Portfolio: undefined;
  LoanFriends: undefined;
  Contribution: undefined;
  More: undefined;
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
