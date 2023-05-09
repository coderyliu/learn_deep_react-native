import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Animated,
  SafeAreaView,
  Button,
} from 'react-native';

// ?Animated是一个API,通过这个API我们可以实现一些动画效果，具体的步骤：
// todo 1.通过new Animated.value()  或者Animated,valueXY()初始化一个样式属性的原始数据值
// todo 2.把这个值赋值给要实现动画的styled属性
// todo 3.通过Animated.timing()---渐变  Animated.decay()---加速效果 Animated.spring()--弹跳效果实现动画

// *注意，在react-native中使用动画，Animated.View Animated.Text Animated.ScrollView Animated.Image Animated.FlatList animated.SectionLIst是默认可以直接是用动画的组件

export default class BasicAnimated extends Component {
  constructor() {
    super();

    this.state = {
      fadeAnim: new Animated.Value(0),
      scanAnim: new Animated.Value(10),
    };
  }

  handleFadePress(type) {
    if (type === 'in') {
      // 从某个样式值过渡到另一个样式值 start()开始动画
      // ! 注：开启动画之后，动画完成fadeAnim会变成toValue的值
      Animated.timing(this.state.fadeAnim, {
        toValue: 1, //过渡到opacity为1
        duration: 3000, //时间ms
        useNativeDriver: true, //动画优化
      }).start();
    } else {
      Animated.timing(this.state.fadeAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {
        // 里面还可以传递一个参数，在动画执行完成之后执行
        alert('动画执行完毕');
      });
    }
  }

  componentDidMount() {
    this.scanFn();
  }

  // 扫描
  scanFn() {
    // ?新的API，实现setState
    this.state.scanAnim.setValue(10);
    Animated.timing(this.state.scanAnim, {
      toValue: 190,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      this.scanFn();
    });
  }

  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        {/* 第一个案例：渐变效果 */}
        <Animated.View
          style={[
            styles.fadingContainer,
            // 给透明度opacity绑定实现动画的初始样式值
            {opacity: this.state.fadeAnim},
          ]}>
          <Text style={styles.fadingText}>Fading View!</Text>
        </Animated.View>
        <View style={[styles.buttonRow]}>
          <Button
            title="Fade In View"
            onPress={() => this.handleFadePress('in')}
          />
          <Button
            title="Fade Out View"
            onPress={() => this.handleFadePress('out')}
          />
        </View>
        {/* 第二个案例：二维码扫描效果 */}
        <View style={styles.scanContainer}>
          <Animated.View
            style={[
              styles.scanBorder,
              {
                transform: [
                  {
                    translateY: this.state.scanAnim,
                  },
                ],
              },
            ]}></Animated.View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  fadingContainer: {
    height: 200,
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    lineHeight: 160,
    fontSize: 28,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  scanContainer: {
    alignItems: 'center',
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: 'black',
  },
  scanBorder: {
    width: 180,
    borderWidth: 1,
    borderColor: 'red',
  },
});
