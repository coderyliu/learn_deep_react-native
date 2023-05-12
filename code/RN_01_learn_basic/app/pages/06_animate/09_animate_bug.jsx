import React, {Component} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

// ?使用Animated提供给我们的四种组合动画函数来完成动画组合
const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

const viewList = () => {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  // !下边这个打印是用来做测试，当函数式组件更新的时候，整个函数是组件会重新渲染，整个函数会重新执行
  console.log(1);

  return (
    <>
      {array.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              width: 60,
              height: 60,
              backgroundColor: colors[index % 5],
            }}></View>
        );
      })}
    </>
  );
};

export default class Home extends Component {
  state = {
    scrollY: new Animated.Value(0),
  };
  // todo 下面这个案例右边简单的使用了scrollView做一个滑动列表 左边也是一个一样的列表，不过没有使用ScrollView
  // todo 要达到的效果就是右边滑动左边跟着一起滑动
  // !但是会发现两边滑动的效果不同步，左边有延迟，这是因为setState()是异步的，有批处理的操作，所以会有延迟

  // !解决办法，通过Animated.event()来解决

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftLayout}>
          <Animated.View
            style={[
              {
                transform: [
                  {
                    // *改了之后要换一种写法
                    // translateY: -this.state.scrollY,
                    translateY: Animated.multiply(-1, this.state.scrollY),
                  },
                ],
              },
            ]}>
            {viewList()}
          </Animated.View>
        </View>
        <View style={styles.rightLayout}>
          <Animated.ScrollView
            // 是否展示scrollbar
            showsVerticalScrollIndicator={false}
            // 监听滚动事件
            // onScroll={event => {
            //   this.setState({scrollY: event.nativeEvent.contentOffset.y});
            // }}
            // todo 使用Animated.event()解决
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {y: this.state.scrollY},
                  },
                },
              ],
              {
                useNativeDriver: true,
              },
            )}>
            {viewList()}
          </Animated.ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // !如果有ScrollView必须指定父元素的height
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 20,
  },
  leftLayout: {
    width: 60,
    backgroundColor: '#00FF0030',
    flexDirection: 'column',
  },
  rightLayout: {
    width: 60,
    // !如果有ScrollView必须指定父元素的height
    height: '100%',
    backgroundColor: '#0000FF30',
    marginLeft: 100,
  },
});
