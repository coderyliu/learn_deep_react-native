import React, {Component} from 'react';
import {Button, StyleSheet, SafeAreaView, Alert} from 'react-native';

export default class BasicButton extends Component {
  handleBtnPress(type) {
    if (type === 'one') {
      // 基础用法
      Alert.alert('Hahha ');
    } else if (type === 'two') {
      // alter两个按钮
      Alert.alert('Alter Title', 'My Message', [
        {
          text: '取消',
          style: 'cancel',
          onPress: () => console.log('cancel'),
        },
        {
          text: '确认',
          style: 'default',
          onPress: () => console.log('confirm'),
        },
      ]);
    } else {
      // alter 三个按钮
      Alert.alert('Alter Title', 'My Message', [
        {
          text: '返回',
          style: 'cancel',
        },
        {
          text: '取消',
          style: 'cancel',
          onPress: () => console.log('cancel'),
        },
        {
          text: '确认',
          style: 'default',
          onPress: () => console.log('confirm'),
        },
      ]);
    }
  }

  render() {
    return (
      <SafeAreaView>
        {/* 块级组件 */}
        {/* button组件不能使用style属性 */}
        <Button
          title="递交1"
          height={50}
          color="pink" //背景颜色
          onPress={() => this.handleBtnPress('one')}
        />
        <Button
          title="递交2"
          height={50}
          color="tomato" //背景颜色
          onPress={() => this.handleBtnPress('two')}
        />
        <Button
          title="递交3"
          height={50}
          color="blue" //背景颜色
          onPress={() => this.handleBtnPress('three')}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    lineHeight: 50,
    marginTop: 30,
    color: '#fff',
    fontSize: 28,
    backgroundColor: '#11a3c0',
  },
});
