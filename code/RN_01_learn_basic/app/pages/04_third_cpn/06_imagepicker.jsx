import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// !注意：这个项目install的是最新的react-native-image-picker，已经有了很大的变动，如果要实现很多效果，还要看以前的版本
// !没有了showImagePicker这个API
const options = {
  title: '选择头像', //标题
  // 自定义的功能
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  // 存储选项
  storageOptions: {
    skipBackup: true,
    path: 'images', //存储路径
  },
  // 取消
  cancelButtonTitle: '取消',
  // 调用照相机
  takePhotoButtonTitle: '去拍照',
  // 从相册选取
  chooseFromLibraryButtonTitle: '从手机相册中选取',
};

export default class Index extends Component {
  constructor() {
    super();

    this.state = {
      avatar: 'https://reactnative.dev/img/tiny_logo.png',
    };
  }

  changeImage = () => {
    launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        // 如果取消
        console.log('User cancelled image picker');
      } else if (response.error) {
        // 如果报错
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        // 如果点击的是自定义按钮
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // 正常逻辑
        // const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatar: response.assets[0].uri,
        });
      }
    });
  };

  render() {
    return (
      <View style={[styles.container]}>
        <TouchableOpacity onPress={this.changeImage}>
          <View style={[styles.avatar]}>
            <Image style={[styles.avatar]} source={{uri: this.state.avatar}} />
          </View>
        </TouchableOpacity>
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
  avatar: {
    width: 200,
    height: 200,
  },
});
