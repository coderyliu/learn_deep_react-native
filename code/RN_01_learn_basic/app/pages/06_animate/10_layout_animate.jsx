import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  LayoutAnimation,
  Button,
  Image,
} from 'react-native';

// ?下面演示一个很重要的API LayoutAnimation
// *我们使用Animated要很复杂，要new Animated.Value() 还要绑定样式 调用timing()
// *但是使用LayoutAnimation可以不用上面的步骤，简单方便，并且渲染的性能是比Animated要高的

// todo 下面通过一个案例简单感受一下LayoutAnimation的效果
// todo LayoutAnimation一切改变布局的时候，都可以使用LayoutAnimation动画

export default class Home extends Component {
  state = {
    showRight: false,
  };

  render() {
    const {showRight} = this.state;

    return (
      <View style={styles.root}>
        <Button
          title="按钮"
          onPress={() => {
            // todo 使用方法
            LayoutAnimation.configureNext(
              // LayoutAnimation.Presets.linear
              // LayoutAnimation.Presets.spring
              LayoutAnimation.Presets.easeInEaseOut,
              () => {
                console.log('动画结束');
              },
              () => {
                console.log('动画异常');
              },
            );

            // LayoutAnimation.configureNext(
            //     LayoutAnimation.Presets.spring
            // );

            // todo 使用属性
            //*平缓效果
            // LayoutAnimation.linear();
            //*弹跳效果
            // LayoutAnimation.spring();
            //*先加速后减速
            // LayoutAnimation.easeInEaseOut();

            this.setState({showRight: true});
          }}
        />

        {/* {showView && <View style={styles.view} />} */}

        <View
          style={[
            styles.view,
            {flexDirection: showRight ? 'row-reverse' : 'row'},
          ]}>
          <Image
            style={styles.img}
            source={require('../../assets/images/default_avatar.png')}
          />
          <Text style={styles.txt}>这是一行自我介绍的文本</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    width: '100%',
    height: 100,
    backgroundColor: '#F0F0F0',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  img: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  txt: {
    fontSize: 20,
    color: '#303030',
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});
