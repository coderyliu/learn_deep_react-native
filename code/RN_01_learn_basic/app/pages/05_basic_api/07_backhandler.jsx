import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Platform,
  SafeAreaView,
  Button,
  BackHandler,
} from 'react-native';

export default class Home extends Component {
  handleBtnPress() {
    //todo 2.BackHandler.exitApp()可以直接退出App
    BackHandler.exitApp();
  }

  handleBackAndroid = () => {
    // !主要是这个函数的返回值，返回false不拦截 返回true拦截，就不会返回上一级了
    // return true;
    return false;
  };

  componentDidMount() {
    // todo 1.BackHandler可以监听navigation上的back按钮点击返回事件
    BackHandler.addEventListener('hardwareBackPress', this.handleBackAndroid);
  }

  componentWillUnmount() {
    // !在RN中有监听必须有取消监听，防止内存泄漏带来的bug
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackAndroid,
    );
  }

  render() {
    // ?下面介绍有关Android专属API BackHandler，RN中可以对安卓下面的navigation栏操作拦截的API
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.btnView}>
          <Button title="按钮" onPress={() => this.handleBtnPress()} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnView: {
    width: 200,
    padding: Platform.select({ios: 10, android: 20, default: 0}),
  },
});
