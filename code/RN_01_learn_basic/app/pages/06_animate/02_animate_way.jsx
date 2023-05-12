import React, {Component} from 'react';
import {StyleSheet, View, Animated, Button} from 'react-native';

// ?Animated平移动画的几种形式
const rotate = new Animated.Value(0);
// console.log(
//   rotate.interpolate({
//     inputRange: [0, 45],
//     outputRange: ['0deg', '45deg'],
//   }),
// );

export default class SimpleAnimate extends Component {
  state = {
    // translateValue: new Animated.Value(0),
    // marginLeftValue: new Animated.Value(0),
    // opacityValue: new Animated.Value(1),
    // !不能直接写rotate,必须是一个字符串
    // rotateValue: new Animated.Value(0),
    rotateValue: rotate.interpolate({
      inputRange: [0, 45],
      outputRange: ['0deg', '45deg'],
    }),
  };

  handleBtnPress() {
    // todo 1.translateX
    // Animated.timing(this.state.translateValue, {
    //   toValue: 100,
    //   duration: 1500,
    //   useNativeDriver: true,
    // }).start();

    // todo 2.marginLeft
    // Animated.timing(this.state.marginLeftValue, {
    //   toValue: -100,
    //   duration: 1500,
    // !需要注意：marginLeft不支持原生动画
    //   useNativeDriver: false,
    // }).start();

    // todo 3.透明度
    // Animated.timing(this.state.opacityValue, {
    //   toValue: 0,
    //   duration: 1000,
    //   useNativeDriver: true,
    // }).start();

    // todo 4.旋转
    // !暂时有bug
    Animated.timing(this.state.rotateValue, {
      toValue: 45,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="按钮" onPress={() => this.handleBtnPress()}></Button>
        <Animated.View
          style={[
            styles.view,
            {
              // transform: [
              // {
              // todo 1.通过translateX实现
              // translateX: this.state.translateValue,
              // },
              // ],
              // todo 2.通过marginLeft来实现
              // marginLeft: this.state.marginLeftValue,

              // todo 3.透明度实现
              // opacity: this.state.opacityValue,

              // todo 4.旋转
              transform: [
                {
                  // !注意,rotate必须是一个旋转度数，不能用字符串拼接
                  // rotate: this.state.rotateValue + 'deg',

                  // !正确的使用方法是使用rotate.interpolate()
                  rotate: this.state.rotateValue,
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
    flex: 1,
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
