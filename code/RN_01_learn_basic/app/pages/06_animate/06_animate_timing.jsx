import React, {Component} from 'react';
import {Animated, Button, StyleSheet, View, Easing} from 'react-native';

// ?简单使用一下timing()来完成

export default class Home extends Component {
  state = {
    translateValue: new Animated.Value(0),
  };

  handleBtnPress() {
    // *timing()是平缓函数 可以有很多去曲线速率(线性、二次、三次、指数等)
    Animated.timing(this.state.translateValue, {
      // toValue和useNativeDriver是必须的
      toValue: 300,
      duration: 1500,
      useNativeDriver: true,

      // !timing()里面有四种内置动画 三种标准函数 四种补充函数 都是通过easing:Easing.xxx来实现的
      // todo 1.四种内置动画
      // *1.Easing.back(number)回拉动画（动画之前，先向反方向回拉）
      // easing: Easing.back(3),//越大回拉距离越大
      // *2.Easing.ease 平缓
      // easing: Easing.ease,
      // *3.Easing.bounce 弹跳
      // easing: Easing.bounce,
      // *4.Easing.elastic() 弹性 即取决于number大小表示弹跳次数
      // easing: Easing.elastic(3),

      // todo 2.三种标准函数(想象一下，函数在坐标轴上的图形，就是动画速率)
      // *1.Easing.linear 一次函数 平缓
      // easing: Easing.linear,
      // *2.Easing.quad 二次函数 加速
      // easing: Easing.quad,
      // *3.Easing.cubic 三次函数
      // easing: Easing.cubic,

      // todo 3.四中补充函数
      // *1.贝塞尔曲线 Easing.bezier() https://cubic-bezier.com/#.17,.67,.83,.67查看官网生成我们想要的效果
      // easing: Easing.bezier(0.17, 0.67, 0.83, 0.67),
      // *2.环形
      // easing: Easing.circle,
      //*3.正弦
      // easing: Easing.sin,
      // *4.指数
      // easing: Easing.exp,

      // todo 4.我们也可以通过组合函数来组合动画
      // *https://easings.net/可以通过查看网址有很多组合动画效果
      // *1.加速组合动画函数 加速弹跳
      // easing: Easing.in(Easing.bounce),
      // *2.减速组合动画函数
      // easing: Easing.out(Easing.exp),
      // *3.先加速在减速
      easing: Easing.inOut(Easing.elastic(5)),
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
