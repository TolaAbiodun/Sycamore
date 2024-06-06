/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import RootNavigator from './navigation';
import SplashScreen from './screens/loaders/splash';

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
  return !isLoaded ? <SplashScreen /> : <RootNavigator />;
};

export default App;
