import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Platform,
  SafeAreaView,
  Button,
  Linking,
} from 'react-native';

export default class Home extends Component {
  handleBtnPress() {
    // todo 1.利用Linking.openURL打开网址
    // *1.1会跳转到默认浏览器打开百度
    // Linking.openURL('https://www.baidu.com');
    // *1.2打开地图 传入的参数是一个字符串以geo开头格式geo:精度,纬度
    // *安卓上会打开高德、腾讯地图
    // Linking.openURL('geo:37.2122,12.222');
    // *1.3发送短信 格式'smsto:电话号' 跳转到手机上的短信应用，不会主动搭送
    // Linking.openURL('smsto:10086');
    // *1.4打电话 格式'tel:电话号' 跳转到电话应用，不会主动拨打
    // Linking.openURL('tel:10086');
    // *4.5发送邮件 格式:'mailto:邮箱号'
    // Linking.openURL('mailto:10086@qq.com');
    // todo 2.Linking.canOpenURL()可以帮助我们在跳转之前判断网址是否可以跳转
    // if (Linking.canOpenURL('http://www.baidu.com')) {
    //   Linking.openURL('http://music.163.com');
    // }
    // todo 3.Linking.openSettings()打开应用的配置，比如权限存储等
    // Linking.openSettings();
    
    // todo 4.Linking.openURL()还可以跳转到另一个应用，不过要做很多原生的配置，暂不接触
  }

  render() {
    // ?下面介绍有关Linking，RN中可以跳转到其他应用的API
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
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnView: {
    width: 200,
    padding: Platform.select({ios: 10, android: 20, default: 0}),
  },
});
