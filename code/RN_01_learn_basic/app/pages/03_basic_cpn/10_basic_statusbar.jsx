import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Platform,
  Button,
} from 'react-native';

// ?StatusBar用于显示手机顶部栏，一般用于显示电量、时间、网络等
// ?在RN中可以通过StatusBar来控制手机顶部

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];
export default class BasicStatusBar extends Component {
  constructor() {
    super();

    this.state = {
      hidden: false,
      statusBarStyle: STYLES[0],
      statusBarTransition: TRANSITIONS[0],
    };
  }

  changeStatusBarVisibility = () => this.setState({hidden: !this.state.hidden});

  changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(this.state.statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      this.setState({
        statusBarStyle: STYLES[0],
      });
    } else {
      this.setState({
        statusBarStyle: STYLES[styleId],
      });
    }
  };

  changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(this.state.statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      this.setState({
        statusBarTransition: TRANSITIONS[0],
      });
    } else {
      this.setState({
        statusBarTransition: TRANSITIONS[transition],
      });
    }
  };

  render() {
    const {hidden, statusBarStyle, statusBarTransition} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          // 状态栏属性更改之间的过渡应该是动画的。支持 backgroundColor、barStyle 和隐藏属性
          animated={true}
          // 状态栏的背景颜色 android生效
          backgroundColor="#61dafb"
          // 设置状态栏文本的颜色
          barStyle={statusBarStyle}
          // 使用 hidden 属性显示和隐藏状态栏时的过渡效果 ios生效
          showHideTransition={statusBarTransition}
          // statusbar是否隐藏
          hidden={hidden}
        />
        <Text style={styles.textStyle}>
          StatusBar Visibility:
          {hidden ? 'Hidden' : 'Visible'}
        </Text>
        <Text style={styles.textStyle}>
          StatusBar Style:
          {statusBarStyle}
        </Text>
        {Platform.OS === 'android' ? (
          <Text style={styles.textStyle}>
            StatusBar Transition:
            {statusBarTransition}
          </Text>
        ) : null}
        <Button
          title="Change StatusBar Style"
          onPress={this.changeStatusBarStyle}
        />
        {/* <View style={styles.buttonsContainer}>
          <Button
            title="Toggle StatusBar"
            onPress={this.changeStatusBarVisibility}
          />
          {Platform.OS === 'android' ? (
            <Button
              title="Change StatusBar Transition"
              onPress={this.changeStatusBarTransition}
            />
          ) : null}
        </View> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
  buttonsContainer: {
    padding: 10,
    marginHorizontal: '',
  },
  textStyle: {
    height: 55,
    lineHeight: 45,
    marginTop: 50,
    color: '#333',
    fontSize: 20,
    textAlign: 'center',
  },
});
