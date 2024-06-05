/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry, Text} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

// We disable Font Scaling - Known Text issues on android
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const RootApp = () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <App />;
};

AppRegistry.registerComponent(appName, () => RootApp);
