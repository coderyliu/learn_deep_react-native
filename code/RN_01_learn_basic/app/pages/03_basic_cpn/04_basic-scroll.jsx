import React, {Component} from 'react';
import {Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

export default class BasicScroll extends Component {
  render() {
    return (
      <SafeAreaView>
        {/*View 没有滚动功能。当内容超出可视区域后。就无法正常显示, 没有scrollView没有滚动效果 */}
        <ScrollView style={styles.scrollView}>
          {/* 注意：rn中所有的文字都必须包裹在Text中 */}
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
  scrollView: {
    backgroundColor: '#bfa',
  },
});
