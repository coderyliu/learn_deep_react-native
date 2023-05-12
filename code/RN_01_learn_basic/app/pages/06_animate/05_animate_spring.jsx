import React, {Component} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';

// ?简单使用一下spring()来完成

export default class Home extends Component {
  state = {
    translateValue: new Animated.Value(0),
  };

  handleBtnPress() {
    // *spring()是弹跳函数 像弹簧一样弹跳
    Animated.spring(this.state.translateValue, {
      // toValue和useNativeDriver是必须的
      toValue: 300,
      useNativeDriver: true,

      // *需要注意的是，在spring()中有三组弹跳组合，代表三种物理弹跳的方式
      // !我们只能选择其中一种弹跳方式,即一种组合
      // todo 1.第一种弹性物理组合：bounciness 弹性(默认为8，越大弹性越高) speed 速度(默认值12)
      // bounciness: 20,
      // speed: 12,

      // todo 2.第二种物理组合：tensions 张力(默认为40，也可以理解为速度)  friction 摩擦(默认为7)
      // tension: 40,
      // friction: 7,

      // todo 3.第三种物理组合：stiffness 刚度(默认为100 越大越弹，也可以理解为速度) damping 阻尼(默认为10,可以理解为摩擦力) mass 末端物体质量(物理中：质量越大惯性越大 默认为1)
      stiffness: 100,
      damping: 10,
      mass: 1,

      // *除此之外还有一些额外的参数:
      velocity: 0, //附着在弹簧上的物体的初始速度。默认 0
      delay: 0, //开启动画后的延迟
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
