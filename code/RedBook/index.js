import {AppRegistry, Platform, UIManager} from 'react-native';
import Root from './Root';
import {name as appName} from './app.json';

// 开启LayoutAnimation
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

AppRegistry.registerComponent(appName, () => Root);
