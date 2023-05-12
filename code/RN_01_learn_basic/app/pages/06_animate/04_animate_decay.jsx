import React, {Component} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';

// ?简单使用一下decay()来完成

export default class Home extends Component {
  state = {
    translateValue: new Animated.Value(0),
  };

  handleBtnPress() {
    // *这是使用Animated.timing()来完成的动画 默认情况下官网也说明了95%以上的动画都可以使用timing()完成
    // Animated.timing(this.state.translateValue, {
    //   toValue: 300,
    //   duration: 1500,
    //   useNativeDriver: true,
    // }).start();

    // todo decay()表示衰减函数
    Animated.decay(this.state.translateValue, {
      // 衰减函数的参数
      // !没有toValue这个参数，表示以一个初始速度开始动画，什么时候速度为0了会停止动画
      velocity: 1, //初始速度 required
      deceleration: 0.997, //衰减系数 默认是0.997
      // *衰减系数越小，表示的是速度停下来越快，反之越高于0.997表示停下来越慢
      // deceleration: 0.1,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <View>
        <Button title="按钮" onPress={() => this.handleBtnPress()}></Button>
        <Animated.View
          style={[
            styles.view,
            {
              transform: [
                {
                  translateX: this.state.translateValue,
                },
              ],
            },
          ]}></Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    width: 100,
    height: 100,
    marginTop: 20,
    backgroundColor: 'blue',
  },
});
