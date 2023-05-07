import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default class BasicImage extends Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  // ?图片加载完成调用
  handleImageLoad() {
    // 拿到元素的引用
    console.log(this.imageRef.current);
  }

  render() {
    return (
      <View>
        {/* 引用本地图片 */}
        <Image
          ref={this.imageRef}
          style={[styles.imgStyle]}
          blurRadius={50} //添加模糊
          alt="spring"
          resizeMode="cover"
          // source既可以本地图片也可以远程图片
          source={require('../../assets/images/2c61b17b880611ebb6edd017c2d2eca2.jpg')}
          // ?Image中也有一个src属性，只不过只能用于加载远程图片，不能加载本地图片
          onLoad={e => this.handleImageLoad(e)}
        />
        {/* 远程地址图片 */}
        <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgStyle: {
    width: 150,
    height: 150,
    // ?图片样式，相对于css中的object-fit:'cover'
    resizeMode: 'cover',
  },
});
