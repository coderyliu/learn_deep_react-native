import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

// 通常使用react-native-swiper来做轮播图
import Swiper from 'react-native-swiper';

export default class Banner extends Component {
  render() {
    return (
      <SafeAreaView>
        {/* 需要注意的一点是轮播图必须放在ScrollView才能实现轮播 */}
        <ScrollView style={[styles.scrollContainer]}>
          <Swiper autoplay={true} showsButtons={false} loop={true}>
            <Image
              style={[styles.imageStyle]}
              // *直接设置Image的样式就可以了，设置成Dimension获取屏幕的宽度即可
              // resizeMode="cover"
              source={require('../../assets/images/2c61b17b880611ebb6edd017c2d2eca2.jpg')}
            />
            <Image
              style={[styles.imageStyle]}
              // resizeMode="cover"
              source={require('../../assets/images/01e32cc90dd34191a09a4f866dd6ab31.jpg')}
            />
            <Image
              style={[styles.imageStyle]}
              // resizeMode="contain"
              source={require('../../assets/images/20230301081752281207.jpg')}
            />
          </Swiper>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    height: 200,
  },
  imageStyle: {
    width: Dimensions.get('window').width,
    height: 200,
  },
});
