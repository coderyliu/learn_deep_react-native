import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Platform,
  SafeAreaView,
  Button,
  PermissionsAndroid,
} from 'react-native';

export default class Home extends Component {
  handleBtnPress() {
    // !注意：如果我们需要用户权限还是要到AndroidManifest.xml中声明
    // todo 1.查看所有权限属性列表
    // console.log(PermissionsAndroid.PERMISSIONS);

    // todo2.检查是否具有某个权限 返回一个promise
    PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ).then(result => {
      console.log(result);
      // 如果不具有这个权限，申请这个权限
      if (!result) {
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ).then(status => {
          console.log(status);
          if (status) {
            // granted
            // 申请权限成功
          } else {
            // denied
            // 申请权限失败
          }
        });
      }
    });

    // todo 3.申请多个权限
    PermissionsAndroid.requestMultiple(['权限1', '权限2']).then(res =>
      console.log(res),
    );
  }

  render() {
    // ?下面介绍有关Android专属APIPermissionsAndroid ，RN中可以对安卓用户权限的请求API
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
