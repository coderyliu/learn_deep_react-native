import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';

// ?react-native-picker提供给我们一个表单选择器
import {Picker} from '@react-native-picker/picker';

export default class FormSelect extends Component {
  constructor() {
    super();

    this.state = {
      language: 'js',
    };
  }

  render() {
    return (
      <SafeAreaView>
        <Picker
          // 表单的值value
          selectedValue={this.state.language}
          // 监听选择事件
          onValueChange={itemValue => this.setState({language: itemValue})}
          // 模式 尽在安卓环境下生效 默认是弹框 dropdown是下拉
          mode="dropdown">
          <Picker.Item label="js" value="js" />
          <Picker.Item label="java" value="java" />
        </Picker>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
