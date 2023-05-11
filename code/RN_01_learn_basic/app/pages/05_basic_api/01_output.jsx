import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native';

export default class Home extends Component {
  handleBtnPress() {
    // todo 1.通过js方法alert弹窗
    // alert('这是一条信息');

    // todo 2.通过RN的API Alert.alert()来弹出我们想要的内容
    // Alert.alert('Alert', '这是一条信息', [
    //   {
    //     text: '取消',
    //     onPress: () => alert('取消成功'),
    //   },
    //   {
    //     text: '确认',
    //     onPress: () => alert('确认'),
    //   },
    // ]);

    // todo 3.Alert.prompt()尽在ios上生效

    // todo 4.通过console对象来打印调试
    // *4.1普通打印
    console.log('这是普通的日志输出');
    console.info('这是信息输出');
    // *模拟器下方也会有对应的输出
    console.warn('这是一条警告'); //黄色提示
    console.error('这是一个错误'); //红色提示
    console.debug('调试信息输出');

    // *4.2 %s %d %o占位符号
    // %s相当于是一个字符串占位符，后边的第一个字符串会被添加进来
    console.log('你好啊%s', '李银河');
    // %d相当于是一个数字Number类型的占位符 后边的第一个数字会添加进来
    console.log('我是%s,年龄%d', 'coder', 21);
    // %o相当于是一个对象Object类型的占位符 后边的第一个对象会被添加进来
    const obj = {name: 'coder', age: 21};
    console.log('这是一个对象%o', obj);

    // *4.3%c颜色字体大小占位符
    // !%c添加在哪里，后边的字符会添加样式 color font-size:x-large x-small x-medium
    console.log('%chello coder', 'color:blue;font-size:x-large');
    console.log('%chello coder', 'color:pink;font-size:x-small');

    // todo 5利用console.table打印表格
    const movie = [
      {name: '绿皮书', star: '9.9'},
      {name: '星际穿越', star: '9.5'},
      {name: '肖申克的救赎', star: '9.9'},
      {name: '泰坦尼克号', star: '9.9'},
      {name: '当幸福来敲门', star: '9.3'},
    ];
    console.table(movie);

    // todo 6.利用console.group打印分组
    console.group();
    console.log('第一行日志');
    console.log('第二行日志');
    console.log('第三行日志');
    console.group();
    console.log('第二组第一行');
    console.log('第二组第二行');
    console.log('第二组第三行');
    console.groupEnd();
  }

  render() {
    // ?下面演示调试过程中常用的输出方法
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
  },
});
