import React, {Component} from 'react';
import {Animated, Button, StyleSheet, View, Easing} from 'react-native';

// ?使用Animated提供给我们的四种组合动画函数来完成动画组合

export default class Home extends Component {
  state = {
    translateValue: new Animated.ValueXY({
      // *这时候我们传递参数，就要传递对象了，一个x 一个y
      x: 0,
      y: 0,
    }),
    scaleValue: new Animated.Value(1),
  };

  handleBtnPress() {
    // !Animated.timing()等执行动画函数返回给我们的是一个对象 对象中有start stop 等控制动画执行的方法
    const translateAnim = Animated.timing(this.state.translateValue, {
      // *toValue也要是一个对象了
      toValue: {x: 200, y: 300},
      duration: 1500,
      useNativeDriver: true,
      easing: Easing.elastic(2),
    });

    const scaleAnim = Animated.timing(this.state.scaleValue, {
      toValue: 2,
      duration: 1500,
      useNativeDriver: true,
    });

    // ?Animated提供给我们四种方方来组合动画 用组合动画函数来执行动画
    // todo 1.并发执行 parallel()传递一个动画数组
    // Animated.parallel([translateAnim, scaleAnim]).start();

    // todo 2.顺序执行 sequence()顺序执行
    // Animated.sequence([translateAnim, scaleAnim]).start();

    // todo 3.延迟指定delay(ms)
    // Animated.sequence([
    //   scaleAnim,
    // !先延迟2000ms在执行下一个动画
    //   Animated.delay(2000),
    //   translateAnim,
    // ]).start();

    // todo 4.执行一个动画延迟2000ms 在执行下一个动画延迟2000ms stagger(ms,[动画数组])
    // Animated.stagger(2000, [scaleAnim, translateAnim]).start();
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
                // *同理，我们绑定动画样式，就要分离x,y参数绑定了
                {
                  translateX: this.state.translateValue.x,
                },
                {
                  translateY: this.state.translateValue.y,
                },
                {
                  scale: this.state.scaleValue,
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
