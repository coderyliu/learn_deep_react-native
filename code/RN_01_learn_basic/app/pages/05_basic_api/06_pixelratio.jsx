import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Platform,
  SafeAreaView,
  Button,
  PixelRatio,
  Dimensions,
} from 'react-native';

export default class Home extends Component {
  handleBtnPress() {
    // todo 1.PixelRatio.get()相当于Dimensions.get('screen').scale
    const scale = PixelRatio.get();
    console.log(scale);
    console.log(Dimensions.get('screen').scale);

    // todo 2.PixelRatio.getFontScale()安卓可以使用，ios无效
    const fontScale = PixelRatio.getFontScale();
    console.log(fontScale);
    console.log(Dimensions.get('screen').fontScale);

    // todo 3.PixelRatio.getPixelSizeForLayoutSize(number)相当于计算number*PixelRatio.get()
    console.log(PixelRatio.getPixelSizeForLayoutSize(20)); //20 * 2.75;

    // todo 4.PixelRatio.roundToNearestPixel(number)
    // !有时候我们写样式的时候height:26.1有个小数，那么android上可能会出现样式不准确,height有小数点，渲染可能就会出现错误
    // !加上roundToNearestPixel()可以帮助我们有效解决问题
    PixelRatio.roundToNearestPixel(26.1);
  }

  render() {
    // ?下面介绍有关PixelRatio，RN中可以获取设备像素比的API
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.btnView}>
          <Button title="按钮" onPress={() => this.handleBtnPress()} />
        </View>
        <View style={styles.view}>
          <View style={styles.subView}></View>
          <View style={styles.subView}></View>
          <View style={styles.subView}></View>
          <View style={styles.subView}></View>
          <View style={styles.subView}></View>
          <View style={styles.subView}></View>
          <View style={styles.subView}></View>
          <View style={styles.subView}></View>
          <View style={styles.subView}></View>
          <View style={styles.subView}></View>
          <View style={styles.subView}></View>
          <View style={styles.subView}></View>
        </View>
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
  view: {
    width: '100%',
    backgroundColor: 'red',
  },
  subView: {
    width: '100%',
    height: 32.1,
    backgroundColor: '#bfa',
  },
});
