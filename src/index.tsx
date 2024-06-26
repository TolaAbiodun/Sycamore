/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import RootNavigator from './navigation';
import SplashScreen from './screens/loaders/splash';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const loadAppConfig = () => {
    // Put a time out to delay for splash screen
    // This can be extended to fetch tokens, do validations and other checks on app start.
    setTimeout(async () => {
      setIsLoaded(true);
    }, 3000);
  };

  useEffect(() => {
    loadAppConfig();
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar animated={true} barStyle="light-content" backgroundColor="#000" />
      {!isLoaded ? <SplashScreen /> : <RootNavigator />}
    </GestureHandlerRootView>
  );
};

export default App;
