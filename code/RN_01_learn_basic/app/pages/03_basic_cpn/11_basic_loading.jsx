import React, {Component} from 'react';
import {Text, StyleSheet, View, ActivityIndicator} from 'react-native';

// ?ActivityIndicator看起来是一个loading效果

export default class BasicLoading extends Component {
  render() {
    return (
      <View>
        {/* 1.默认效果 */}
        <ActivityIndicator />
        {/* 2.设置颜色 */}
        <ActivityIndicator color="#bfa" />
        {/* 3.设置大小 */}
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
