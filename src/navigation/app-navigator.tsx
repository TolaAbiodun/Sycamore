import { WHITE } from '@/styles/colors';
import { BottomNavigator } from './navigators/bottom-navigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BillPaymentScreen from '@/screens/app/Bills';
import MoneyTransferScreen from '@/screens/app/Transfers';
import AccountUpgradeScreen from '@/screens/app/Account/upgrade';
import LocalTransferScreen from '@/screens/app/Transfers/localTransfer';
import BanksScreen from '@/screens/app/Transfers/banks';

export type AppStackList = {
  TabNav: { screen: string };
  BillPayment: undefined;
  Transfers: undefined;
  UpgradeAcct: undefined;
  LocalTransfers: undefined;
  Banks: undefined;
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
      <Stack.Screen name="LocalTransfers" component={LocalTransferScreen} />
      <Stack.Screen name="Banks" component={BanksScreen} />
    </Stack.Navigator>
  );
};

const AppNavigatorStack = () => {
  return <AppNavigator />;
};

export default AppNavigatorStack;
