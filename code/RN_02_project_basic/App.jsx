import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
  UIManager,
} from 'react-native';

import Home from './src/screens/home/index';

const App = () => {
  // ?声明LayoutAnimation的全局使用
  useEffect(() => {
    if (
      Platform.OS === 'android' &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <Home></Home>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
