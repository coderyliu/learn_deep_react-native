import React, {Component} from 'react';
import {StyleSheet, View, Animated, Button} from 'react-native';

// ?Animated中提供给我们可以直接使用动画的组件:
// Animated.View Animated.Text  Animated.ScrollView  Animated.Image Animated.FlatList Animated.sectionList

export default class SimpleAnimate extends Component {
  handleScroll(e) {
    console.log(e);
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.ScrollView onScroll={e => this.handleScroll(e)}>
          <View style={styles.view}></View>
          <View style={styles.view}></View>
          <View style={styles.view}></View>
          <View style={styles.view}></View>
          <View style={styles.view}></View>
          <View style={styles.view}></View>
          <View style={styles.view}></View>
          <View style={styles.view}></View>
          <View style={styles.view}></View>
          <View style={styles.view}></View>
          <View style={styles.view}></View>
          <View style={styles.view}></View>
          <View style={styles.view}></View>
          <View style={styles.view}></View>
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
