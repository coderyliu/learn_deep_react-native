import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Platform,
  SafeAreaView,
  Button,
  ToastAndroid,
} from 'react-native';

export default class Home extends Component {
  handleBtnPress() {
    // !随着安卓版本的更新，在最近几个版本的安卓中，对ToastAndroid的API已经没有了提示效果,不是RN的Bug而是安卓的更新不支持
    // todo 1.show()展示弹窗内容 参数一:内容 参数二：时长 SHORT3s LONG 5s
    // ToastAndroid.show('hello world', ToastAndroid.SHORT);
    // ToastAndroid.show('hello world', ToastAndroid.LONG);

    // todo 2.更改展示位置 showWithGravity(参数三:位置)
    ToastAndroid.showWithGravity(
      'hello world',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );

    // todo 3.更改展示位置偏移量 showWithGravityAndOffset(参数四：x轴偏移量 参数五：y轴偏移量)
    ToastAndroid.showWithGravityAndOffset(
      'hello world',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      50,
      50,
    );
  }

  render() {
    // ?下面介绍有关Android专属API，RN中可以弹窗提示的API
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
