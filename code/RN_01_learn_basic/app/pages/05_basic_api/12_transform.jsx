import React, {Component} from 'react';
import {Text, StyleSheet, View, Platform, SafeAreaView} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            width: 100,
            height: 100,
            marginTop: 50,
            backgroundColor: '#bfa',
            // ?transform在RN中通过函数里面多个对象来完成的
            // !rotate等价于rotateZ
            transform: [{rotate: '30deg'}, {translateX: 50}, {scale: 1.5}],
          }}></View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
