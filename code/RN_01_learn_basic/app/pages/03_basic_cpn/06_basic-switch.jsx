import React, {Component} from 'react';
import {Switch, StyleSheet, SafeAreaView} from 'react-native';

export default class BasicSwitch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enable: false,
    };
  }

  handleValueChange() {
    this.setState({
      enable: !this.state.enable,
    });
  }

  render() {
    const {enable} = this.state;

    return (
      // ?在react native中本身就存在flex弹性布局，默认应该是direction,因此，只需要指定justifyContent和alignItems
      <SafeAreaView style={styles.container}>
        <Switch
          trackColor={{false: '#fff', true: '#333'}} //背景色
          thumbColor={enable ? 'red' : 'blue'} //前景色
          value={enable} //能否点击
          onValueChange={() => this.handleValueChange()}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
