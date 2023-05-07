import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// ?使用AppRegistry注册一个全局组件
AppRegistry.registerComponent(appName, () => App);
