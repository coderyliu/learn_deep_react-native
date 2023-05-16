import React, {memo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';

const ArticleNavBar = memo(props => {
  const {articleInfo} = props;

  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.leftArrow}
        activeOpacity={0.7}
        onPress={() => navigation.pop()}>
        <Image
          style={styles.arrowImgStyle}
          source={require('../../../../assets/images/icon_arrow.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.userStyle} activeOpacity={0.7}>
        <Image
          style={styles.avatarStyle}
          source={{uri: articleInfo?.user?.avatar}}
        />
        <Text style={styles.nickname}>{articleInfo?.user?.nickname}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.followedStyle,
          {
            backgroundColor: articleInfo?.interact_info?.followed
              ? '#aaa9a9'
              : 'red',
          },
        ]}
        activeOpacity={0.7}>
        <Text
          style={{
            lineHeight: 40,
            color: articleInfo?.interact_info?.followed ? '#333' : '#fff',
            fontSize: 16,
          }}>
          {articleInfo?.interact_info?.followed ? '已关注' : '关注'}
        </Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 60,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  leftArrow: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  arrowImgStyle: {
    width: 30,
    height: 30,
  },
  userStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    marginLeft: 20,
  },
  avatarStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  nickname: {
    marginLeft: 10,
    color: '#333',
    fontSize: 18,
  },
  followedStyle: {
    position: 'absolute',
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 40,
    borderRadius: 30,
  },
});

export default ArticleNavBar;
