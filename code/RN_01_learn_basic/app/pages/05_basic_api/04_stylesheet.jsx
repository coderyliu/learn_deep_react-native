import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Platform,
  SafeAreaView,
  Button,
  Dimensions,
} from 'react-native';

export default class Home extends Component {
  handleBtnPress() {
    // todo 2.StyleSheet.compose()合并样式对象为一个数组
    // !这样做极其具有提升性能的好处：如果我们直接在jsx语法上这样写style={[{},{}]}
    // !这样写每次render函数渲染的时候，都会得到一个新的数组对象，那么整个组件都会重新渲染
    // !但是通过compose合并多个对象为一个数组的时候，这个数组对象的内存引用地址是不会变化的
    const s1 = {
      fontSize: 18,
    };

    const s2 = {
      color: 'red',
      fontSize: 20,
    };
    const composeStyle = StyleSheet.compose(s1, s2);
    console.log(composeStyle); //[s1,s2]

    // todo 3.StyleSheet.flatten([s1,s2])将一组样式对象展平为一个聚合样式对象
    // *相当于Array.prototype.flat()+Object.assign()的作用
    const flattenStyle = StyleSheet.flatten([s1, s2]); //{fontSize:20,color:'red'}
    console.log(flattenStyle);

    // todo 4.StyleSheet.absoluteFill属性相当于写好的绝对定位样式
    console.log(StyleSheet.absoluteFill); //{position:'absolute',top:0,right:0,bottom:0,left:0}

    // todo 5.StyleSheet.hairlineWidth 头发丝宽度相当于是1个像素
    // *下面二者等价
    console.log(StyleSheet.hairlineWidth);
    console.log(1 / Dimensions.get('screen').scale);
  }

  componentDidMount() {
    this.absoluteStyle = StyleSheet.absoluteFill;
  }

  render() {
    // ?下面介绍有关StyleSheet，RN中写样式的方法技巧
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.btnView}>
          <Button title="按钮" onPress={() => this.handleBtnPress()} />
        </View>
        <View
          style={[
            {backgroundColor: 'pink', zIndex: -1},
            StyleSheet.absoluteFill,
          ]}></View>
      </SafeAreaView>
    );
  }
}

// todo 1.可以通过StyleSheet.create()构建一个样式对象
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnView: {
    width: 200,
    padding: Platform.select({ios: 10, android: 20, default: 0}),
  },
});
