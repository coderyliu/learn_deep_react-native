import React, {Component} from 'react';
import {Text, TextInput, StyleSheet, SafeAreaView} from 'react-native';

export default class BasicInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      number: '',
      password: '',
      introduce: '',
    };
  }

  // ?表单内容改变 受控组件
  onChangeText(e, type) {
    if (type === 'text') {
      this.setState({
        text: e,
      });
    } else if (type === 'number') {
      this.setState({
        number: e,
      });
    } else if (type === 'password') {
      this.setState({
        password: e,
      });
    } else {
      this.setState({
        introduce: e,
      });
    }
  }

  render() {
    const {text, number, password, introduce} = this.state;

    return (
      <SafeAreaView>
        {/* react native中的表单组件 */}
        {/* 文字框 */}
        <TextInput
          style={styles.input}
          onChangeText={e => this.onChangeText(e, 'text')}
          value={text}
          placeholder="请输入文字"
        />
        {/* 数字框 */}
        <TextInput
          style={styles.input}
          onChangeText={e => this.onChangeText(e, 'number')}
          value={number}
          placeholder="请输入数字"
          keyboardType="numeric"
        />
        {/* 密码框 */}
        <TextInput
          style={styles.input}
          onChangeText={e => this.onChangeText(e, 'password')}
          value={password}
          placeholder="请输入密码"
          secureTextEntry={true}
        />
        {/* textarea效果 */}
        <TextInput
          style={[styles.input, {height: 120}]}
          onChangeText={e => this.onChangeText(e, 'intro')}
          value={introduce}
          placeholder="请输入自我介绍"
          multiline={true}
          maxLength={40}
          numberOfLines={4}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    margin: 10,
  },
});
