import React, {Component} from 'react';
import {StyleSheet, View, Animated, Button} from 'react-native';

// ?Animated简单动画的实现

export default class SimpleAnimate extends Component {
  state = {
    translateValue: new Animated.Value(0),
  };

  handleBtnPress() {
    Animated.timing(this.state.translateValue, {
      toValue: 100,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="按钮" onPress={() => this.handleBtnPress()}></Button>
        <Animated.View
          style={[
            styles.view,
            {
              transform: [
                {
                  translateY: this.state.translateValue,
                },
              ],
            },
          ]}></Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
