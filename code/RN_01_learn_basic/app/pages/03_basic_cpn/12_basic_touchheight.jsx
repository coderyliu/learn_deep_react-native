import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

// ?TouchableHighlight 是一个点击高亮显示的组件
// ?TouchableOpacity 是一个点击触碰透明度的组件

export default class BasicTouchHeight extends Component {
  constructor() {
    super();

    this.state = {
      counter: 1,
    };
  }

  touchPress() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={() => this.touchPress()}>
          <View style={styles.button}>
            <Text style={styles.textStyle}>点击这里</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.textStyle}>透明度</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text style={[styles.textStyle]}>{this.state.counter}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DDD',
  },
  textStyle: {
    padding: 10,
    color: 'purple',
    fontSize: 20,
    textAlign: 'center',
  },
});
