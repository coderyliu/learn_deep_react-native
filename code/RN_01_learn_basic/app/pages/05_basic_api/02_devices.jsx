import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  Button,
} from 'react-native';

export default class Home extends Component {
  handleBtnPress() {
    // todo 1.Dimensions.get() 获取设备信息{width,height,scale,fontScale}
    // *1.1传入参数window 获取的设备信息不包括statusbar
    const windowInfo = Dimensions.get('window');
    console.log(windowInfo);

    // *1.2传入参数screen 获取的设备信息包括statusbar
    const screenInfo = Dimensions.get('screen');
    console.log(screenInfo);

    // ?参数scale,fontScale说明:
    // *RN上的尺寸是没有单位的，是通过设备dp来尽可能的实现响应式布局
    // *那么我们写的数字1映射到真实的设备中的时候是通过像素比例来实现的:这个比例就是scale 字体比例是fontScale
    // *也就是说数字1 映射到真是设备上的的比例为：1:scale (逻辑像素:物理像素)
    // !需要注意的是ios上的fontScale不生效
    console.log(screenInfo.scale);
    console.log(screenInfo.fontScale);
  }

  componentDidMount() {
    // todo 2.监听窗口change事件
    // !这里的change事件主要发生在android环境下的navigation栏隐藏的时候
    this.subscribe = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        console.log(window, screen);
      },
    );
  }

  componentWillUnmount() {
    // !移除事件监听
    this.subscribe.remove();
  }

  render() {
    // ?下面介绍有关Dimensions，获取设备信息的API
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
