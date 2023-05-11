import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Platform,
  SafeAreaView,
  Button,
  Vibration,
} from 'react-native';

export default class Home extends Component {
  handleBtnPress() {
    // !使用前增加权限<uses-permission android:name="android.permission.VIBRATE"/>
    // todo 1.直接使用Vibration.vibrate()  默认震动时间为400ms
    // Vibration.vibrate();

    // todo 2.传入参数指定震动时间
    Vibration.vibrate(800); //800ms just android

    // todo 3.传入数组
    // *android下表示 100ms后震动500ms 在200ms后震动500ms
    // *ios下表示100ms后震动400ms 500ms后震动400ms 在ios中震动时间是固定的400ms
    Vibration.vibrate([100, 500.2, 500]);

    // todo 4.无限震动 true参数
    Vibration.vibrate([100, 200, 300, 400], true);

    // todo 5.如果是无限震动可以通过Vibration.cancel()取消
    Vibration.cancel();
  }

  render() {
    // ?下面介绍有关Vibration，RN中可以实现微信qq震动的效果的API
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.btnView}>
          <Button title="按钮" onPress={() => this.handleBtnPress()} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnView: {
    width: 200,
    padding: Platform.select({ios: 10, android: 20, default: 0}),
  },
});
