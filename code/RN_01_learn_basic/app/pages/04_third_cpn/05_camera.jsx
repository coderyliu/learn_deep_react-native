import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

// ?RNCamera也是react native提供给我们用于设备相机操作的API 大于0.60版本之后分离出来单独维护

export default class Index extends Component {
  // 照相
  takePicture() {
    if (this.cameraRef) {
      console.log(this.cameraRef);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          // 获取camera组件
          ref={el => (this.cameraRef = el)}
          style={styles.preview}
          // 前置还是后置相机 back后置  front前置
          type={RNCamera.Constants.Type.back}
          // 是否使用闪光灯
          flashMode={RNCamera.Constants.FlashMode.on}
          // 摄像头同意使用权限
          androidCameraPermissionOptions={{
            title: '授权摄像头',
            message: '我们需要您的同意授权使用摄像头',
            buttonPositive: '同意',
            buttonNegative: '取消',
          }}
          // 统一使用视频录制权限
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}>
            <Text style={{fontSize: 20, lineHeight: 20}}> 拍照 </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
