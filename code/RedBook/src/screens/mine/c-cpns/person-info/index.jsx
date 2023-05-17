import React, {memo} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

import icon_qrcode from '../../../../assets/images/icon_qrcode.png';
import icon_male from '../../../../assets/images/icon_male.png';
import icon_female from '../../../../assets/images/icon_female.png';
import icon_setting from '../../../../assets/images/icon_setting.png';

const PersonInfo = memo(props => {
  const {userInfo} = props;

  const handleAvatarPress = () => {};

  const handleQrCodePress = () => {};

  const handleDescPress = () => {};

  const handleTabCountPress = type => {};

  return (
    <View style={styles.root}>
      <View style={styles.topInfoWrapStyle}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleAvatarPress()}>
          <Image
            source={{uri: userInfo?.imageb}}
            style={styles.avatarImgStyle}
          />
        </TouchableOpacity>
        <View style={styles.userNameWrapStyle}>
          <Text style={styles.nameStyle}>{userInfo?.nickname}</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.qrWrapStyle}
            onPress={() => handleQrCodePress()}>
            <Text style={styles.idTextStyle}>小红书号：{userInfo?.red_id}</Text>
            <Image source={icon_qrcode} style={styles.qrCodeStyle} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.descStyle}
        activeOpacity={0.8}
        onPress={() => handleDescPress()}>
        <Text style={{color: '#fff', fontSize: 14}}>
          {userInfo?.desc ? userInfo?.desc : '点击这里，填写简介'}
        </Text>
      </TouchableOpacity>
      <View style={styles.sexWrapStyle}>
        <Image
          source={userInfo?.gender ? icon_female : icon_male}
          style={styles.sexImgStyle}
        />
      </View>
      <View style={styles.bottomWrapStyle}>
        <View style={styles.leftCountStyle}>
          <TouchableOpacity
            style={styles.countWrapStyle}
            activeOpacity={0.7}
            onPress={() => handleTabCountPress('')}>
            <Text style={styles.countTextStyle}>1</Text>
            <Text style={styles.countTextStyle}>关注</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.countWrapStyle}
            activeOpacity={0.7}
            onPress={() => handleTabCountPress('')}>
            <Text style={styles.countTextStyle}>1</Text>
            <Text style={styles.countTextStyle}>粉丝</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.countWrapStyle}
            activeOpacity={0.7}
            onPress={() => handleTabCountPress('')}>
            <Text style={styles.countTextStyle}>1</Text>
            <Text style={styles.countTextStyle}>获赞与收藏</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightOperateStyle}>
          <TouchableOpacity
            style={styles.operateWrapStyle}
            activeOpacity={0.7}
            onPress={() => handleTabCountPress('edit')}>
            <Text style={styles.countTextStyle}>编辑资料</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operateWrapStyle}
            activeOpacity={0.7}
            onPress={() => handleTabCountPress('set')}>
            <Image source={icon_setting} style={styles.setIconStyle} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
  topInfoWrapStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 100,
    paddingHorizontal: 15,
    marginTop: 15,
  },
  avatarImgStyle: {
    width: 96,
    height: 96,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  userNameWrapStyle: {
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    height: '100%',
    marginLeft: 20,
    paddingVertical: 10,
  },
  nameStyle: {
    color: '#fff',
    fontSize: 22,
  },
  qrWrapStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  idTextStyle: {
    color: '#eee',
    fontSize: 14,
  },
  qrCodeStyle: {
    width: 14,
    height: 14,
    marginTop: 3,
    marginLeft: 10,
    tintColor: '#eee',
    resizeMode: 'contain',
  },
  descStyle: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
  },
  sexWrapStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 24,
    paddingHorizontal: 20,
    marginTop: 5,
    marginLeft: 15,
    borderRadius: 12,
    backgroundColor: '#ffffff50',
  },
  sexImgStyle: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
  bottomWrapStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    marginTop: 30,
  },
  leftCountStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countWrapStyle: {
    alignItems: 'center',
    marginRight: 20,
  },
  countTextStyle: {
    color: '#fff',
    fontSize: 14,
  },
  rightOperateStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  operateWrapStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    paddingHorizontal: 10,
    marginLeft: 20,
    borderRadius: 12,
    backgroundColor: '#ffffff50',
  },
  setIconStyle: {
    width: 18,
    height: 18,
    tintColor: '#fff',
    resizeMode: 'contain',
  },
});

export default PersonInfo;
