import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Home extends Component {
  // ?用vscode快捷键:rncs快速创建styleSheet模板
  constructor(props) {
    super(props);

    this.state = {
      movie: ['绿皮书', '肖申克的救赎', '泰坦尼克号', '血战钢锯岭', '猩球崛起'],
      primaryColor: '#0975ab',
    };
  }

  render() {
    const {movie} = this.state;

    return (
      <View style={{padding: 10}}>
        {/* 1.react native中样式编写的第一种，对象语法 */}
        <View>
          {/* 依然使用react语法来做循环渲染 */}
          {movie.map((item, index) => {
            return (
              // Text组件是block块级元素
              <Text
                key={index}
                style={{
                  height: 40,
                  lineHeight: 40,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#edecec',
                  // 不能这样写边框
                  // border: '1px solid #eee',
                  color: '#333',
                  textAlign: 'center',
                }}>
                {item}
              </Text>
            );
          })}
        </View>
        {/* 2.react native中编写样式第二种：数组语法 */}
        {/* 数组中可以写多个对象，每个对象编写很多属性，后面的相同属性会覆盖前面的相同样式 */}
        <Text style={[{color: 'red', textAlign: 'center'}, {color: 'blue'}]}>
          hello coderyliu
        </Text>
        {/* 3.还可以使用state中的变量 */}
        <Text style={[{color: this.state.primaryColor, textAlign: 'center'}]}>
          你好啊，李银河
        </Text>
        {/* 4.通过StyleSheet来使用 */}
        <Text style={[{color: styles.textColor, textAlign: 'center'}]}>
          hello coderyliu
        </Text>
      </View>
    );
  }
}

// ?react native中样式添加的方法是通过StyleSheet来实现的
// ?RN和CSS中样式的区别？
// todo 1.RN中不存在样式继承，即像font-size,color子元素不能继承父元素的样式
// todo 2.RN中样式属性的写法必须遵循小驼峰：css中font-size:18px; RN中fontSize:18;
// todo 3.RN中没有尺寸单位px,em,rem,vw/vh这种长度单位，直接写number就好
// todo 4.RN中存在一些特殊的样式属性：marginVertical等

const styles = StyleSheet.create({
  // 属性值可以是单一的，也可以是对象，数组等
  textColor: '#bfa',
});
