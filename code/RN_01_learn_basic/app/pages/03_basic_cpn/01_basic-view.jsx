import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class BasicView extends Component {
  // ?首先react native中组件分为三种：核心组件、第三方组件、自定义组件
  // *核心组件运行到安卓或者ios会转化为android/ios自己的原生组件
  // todo 1.react native中的核心组件包括：基础组件、交互组件、列表组件、安卓组件、ios组件、其他组件等
  // todo 2.第三方组件可以通过yarn来安装组件库来使用
  // todo 3.自定义组件就是我们开发者可以利用核心组件或者第三方组件来封装属于我们自己的组件

  // ?press触摸事件,相当于click事件
  handlePress(e) {
    console.log(e);
  }

  // ?在触摸之前触发
  handlePressIn(e) {
    console.log(e);
  }

  // ?View Text基础组件是构建ui最基础的组件(相对于H5的div和p)
  render() {
    return (
      <View style={{color: 'red'}}>
        {/* 不会继承父元素样式 */}
        {/* Text上面有很多属性和事件 */}
        <Text
          style={{fontSize: 40}}
          onPress={e => this.handlePress(e)}
          onPressIn={e => this.handlePressIn(e)}>
          你好啊，李银河！
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
