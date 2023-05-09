import React, {Component} from 'react';
import {Text, StyleSheet, View, Platform, Dimensions} from 'react-native';

// ?Platform是react native提供给我们的内置API，帮助我们做一些关于设备上的信息获取
// ?Dimensions是react native提供给我们获取设备、屏幕信息的API

export default class BasicPlatform extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        {/* 1.Platform.OS 设备的名称：android ios */}
        <Text>{Platform.OS}</Text>
        {/* 2.Platform.Version 设备的版本号 */}
        <Text>{Platform.Version}</Text>
        {/* 3.PLatform.isTV 判断设备是否为TV */}
        <Text>{Platform.isTV ? '是' : '否'}</Text>
        {/* 4.Platform.isPad 判断设备是否为平板---iosAPI */}
        <Text>{Platform.isPad ? '是' : '否'}</Text>
        {/* 5.Platform.constants */}
        <Text>{Platform.constants.Brand}</Text>
        {/* Android 设备的最终用户可见名称 */}
        <Text>{Platform.constants.Model}</Text>
        {/* 唯一标识构建的字符串 */}
        <Text>{Platform.constants.Fingerprint}</Text>

        {/* 使用Dimensions获取窗口width height scale */}
        <Text>{JSON.stringify(Dimensions.get('window'))}</Text>
        <Text>{JSON.stringify(Dimensions.get('screen'))}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
