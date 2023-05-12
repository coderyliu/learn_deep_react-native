import React, {Component} from 'react';
import {Animated, Button, StyleSheet, View, Easing} from 'react-native';

// ?简单使用一下Animated.ValueXY()来完成

export default class Home extends Component {
  state = {
    translateValue: new Animated.ValueXY({
      // *这时候我们传递参数，就要传递对象了，一个x 一个y
      x: 0,
      y: 0,
    }),
  };

  handleBtnPress() {
    Animated.timing(this.state.translateValue, {
      // *toValue也要是一个对象了
      toValue: {x: 200, y: 300},
      duration: 1500,
      useNativeDriver: true,
      easing: Easing.elastic(2),
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
                // *同理，我们绑定动画样式，就要分离x,y参数绑定了
                {
                  translateX: this.state.translateValue.x,
                },
                {
                  translateY: this.state.translateValue.y,
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
