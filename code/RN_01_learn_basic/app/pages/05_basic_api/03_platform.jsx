import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Platform,
  SafeAreaView,
  Button,
} from 'react-native';

export default class Home extends Component {
  handleBtnPress() {
    // todo 1.获取设备的操作系统
    console.log(Platform.OS); //android ios

    // todo 2.获取设备的版本
    console.log(Platform.Version); //android 33

    // todo 3.判断当前设备是否为ipad(ios环境下生效)或者TV
    console.log(Platform.isPad); //undefined android下不生效
    console.log(Platform.isTV); //false

    // todo 4.获取一些常量
    console.log(Platform.constants);

    // todo 5.select方法 接受一个对象作为参数,相当于switch case做一个条件判断
    const style = Platform.select({
      android: {
        marginTop: 20,
      },
      ios: {
        marginTop: 0,
      },
      default: {
        //兜底处理
        marginTop: 20,
      },
    });
    console.log(style); //{marginTop:20}
  }

  render() {
    // ?下面介绍有关Platform，获取设备信息的API
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
    // todo Platform.select()应用
    padding: Platform.select({ios: 10, android: 20, default: 0}),
  },
});
