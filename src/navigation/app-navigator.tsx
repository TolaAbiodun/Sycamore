import { WHITE } from '@/styles/colors';
import { BottomNavigator } from './navigators/bottom-navigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PortfolioScreen from '@/screens/app/Portfolio';
import LoanFriendsScreen from '@/screens/app/Loans';
import MoreScreen from '@/screens/app/More';
import ContributionScreen from '@/screens/app/Contribution';
import BillPaymentScreen from '@/screens/app/Bills';
import MoneyTransferScreen from '@/screens/app/Transfers';
import AccountUpgradeScreen from '@/screens/app/Account/upgrade';

export type AppStackList = {
  TabNav: { screen: string };
  BillPayment: undefined;
  Transfers: undefined;
  UpgradeAcct: undefined;
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
      <Stack.Screen name="BillPayment" component={BillPaymentScreen} />
      <Stack.Screen name="Transfers" component={MoneyTransferScreen} />
      <Stack.Screen name="UpgradeAcct" component={AccountUpgradeScreen} />
    </Stack.Navigator>
  );
};

const AppNavigatorStack = () => {
  return <AppNavigator />;
};

export default AppNavigatorStack;
