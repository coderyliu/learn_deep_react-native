import React, {memo, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';

import icon_unselecetd from '../../assets/images/icon_unselected.png';
import icon_selected from '../../assets/images/icon_selected.png';

const AppLogin = memo(() => {
  const [confirmPrivate, setConfirmPrivate] = useState(false);

  // 其他登录
  const handleLoginPress = () => {
    if (!confirmPrivate) {
      return Alert.alert('提示', '请阅读并同意服务隐私条款', [
        {text: '确认', onPress: () => {}},
      ]);
    }
  };

  return (
    <View style={styles.root}>
      {/* logo区域 */}
      <Image
        source={require('../../assets/images/icon_main_logo.png')}
        style={styles.logoStyle}
      />
      {/* 登录区域 */}
      <View style={styles.logWayWrap}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[
            styles.touchableBtnStyle,
            {
              backgroundColor: '#ff2442',
            },
          ]}
          onPress={() => handleLoginPress('phone')}>
          <Text style={styles.touchableBtnTextStyle}>本机号码一键登录</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.touchableBtnStyle,
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              backgroundColor: '#05c160',
            },
          ]}
          onPress={() => handleLoginPress('wx')}>
          <Image
            source={require('../../assets/images/icon_wx.png')}
            style={{width: 30, height: 30, resizeMode: 'contain'}}
          />
          <Text style={styles.touchableBtnTextStyle}>微信登录</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[
            styles.touchableBtnStyle,
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}
          onPress={() => handleLoginPress('other')}>
          <Text style={{marginRight: 5, fontSize: 16, color: '#303080'}}>
            其他登录方式
          </Text>
          <Image
            style={{
              width: 16,
              height: 16,
              marginTop: 4,
              resizeMode: 'contain',
              transform: [{rotate: '180deg'}],
            }}
            source={require('../../assets/images/icon_arrow.png')}
          />
        </TouchableOpacity>
      </View>

      {/* 底部隐私 */}
      <View style={styles.privateWrapStyle}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setConfirmPrivate(!confirmPrivate)}>
          <Image
            style={styles.privateImgStyle}
            source={confirmPrivate ? icon_selected : icon_unselecetd}
          />
        </TouchableOpacity>
        <Text style={styles.commonText}>我已阅读并同意</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.privateTextStyle}>《用户协议》</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.privateTextStyle}>《隐私条款》</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.privateTextStyle}>
            《儿童/青少年个人信息保护规则》
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  logoStyle: {
    width: 200,
    height: 150,
    marginTop: 120,
    resizeMode: 'contain',
  },
  logWayWrap: {
    alignItems: 'center',
    width: '100%',
    marginTop: 150,
  },
  touchableBtnStyle: {
    width: '80%',
    height: 50,
    borderRadius: 50,
  },
  touchableBtnTextStyle: {
    lineHeight: 50,
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  privateWrapStyle: {
    position: 'absolute',
    right: 0,
    bottom: 20,
    left: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  privateImgStyle: {
    width: 20,
    height: 20,
    marginTop: 5,
    marginRight: 5,
    resizeMode: 'contain',
  },
  commonText: {
    color: '#333',
    fontSize: 16,
  },
  privateTextStyle: {
    color: '#505cfa',
  },
});

export default AppLogin;
