import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Platform,
  SafeAreaView,
  Button,
  TextInput,
  Keyboard,
} from 'react-native';

export default class Home extends Component {
  handleBtnPress() {
    // todo 3.直接关闭键盘
    Keyboard.dismiss();
  }

  // todo 1.监听键盘展示事件
  componentDidMount() {
    this.showSubscribe = Keyboard.addListener(
      'keyboardDidShow',
      this.handleKeyBoardShow,
    );

    // todo 2.监听键盘隐藏事件
    this.hideSubscribe = Keyboard.addListener(
      'keyboardDidHide',
      this.handleKeyBoardHide,
    );
  }

  componentWillUnmount() {
    // !有监听就有取消
    this.showSubscribe.remove();
    this.hideSubscribe.remove();
  }

  handleKeyBoardShow() {
    console.log('键盘出现');
  }

  handleKeyBoardHide() {
    console.log('键盘隐藏');
  }

  render() {
    // ?下面介绍有关移动端键盘事件监听API KeyBoard
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.btnView}>
          <Button title="按钮" onPress={() => this.handleBtnPress()} />
        </View>

        <TextInput
          placeholder="请输入内容"
          style={{backgroundColor: 'pink', width: '60%', height: 50}}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnView: {
    width: 200,
    padding: Platform.select({ios: 10, android: 20, default: 0}),
  },
});
