import React, {memo} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  useWindowDimensions,
} from 'react-native';

import icon_heart from '../../../../assets/images/icon_heart.png';
import icon_un_heart from '../../../../assets/images/icon_heart_empty.png';

const CardItem = memo(props => {
  const {
    dataInfo: {note_card},
    index,
  } = props;

  // 屏幕适配
  // const {width: screenWidth} = useWindowDimensions();

  const handleCardItemPress = () => {};

  const handleHeartPress = () => {};

  return (
    <TouchableOpacity
      style={[
        styles.root,
        {
          // width: (screenWidth - 10) >> 1,
          // height:(note_card?.cover?.height / note_card?.cover?.width) * 250 + 100,
          marginRight: index % 2 ? 5 : 0,
        },
      ]}
      activeOpacity={0.7}
      onPress={() => handleCardItemPress()}>
      <Image
        source={{
          uri:
            note_card?.cover?.url +
            '?imageView2/2/w/640/format/webp|imageMogr2/strip',
        }}
        style={[
          styles.coverImgStyle,
          // {height: (note_card?.cover?.height / note_card?.cover?.width) * 250},
        ]}
      />
      <Text style={styles.descTitleStyle}>{note_card?.display_title}</Text>
      <View style={styles.bottomInfoStyle}>
        <View style={styles.leftInfoStyle}>
          <Image
            source={{uri: note_card?.user?.avatar}}
            style={styles.avatarImgStyle}
          />
          <Text style={styles.nicknameStyle}>{note_card?.user?.nickname}</Text>
        </View>
        <TouchableOpacity
          style={styles.rightInfoStyle}
          activeOpacity={0.7}
          onPress={() => handleHeartPress()}>
          <Image
            source={
              note_card?.interact_info?.liked ? icon_heart : icon_un_heart
            }
            style={styles.heartImgStyle}
          />
          <Text>{note_card?.interact_info?.liked_count}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginBottom: 8,
    marginLeft: 5,
    borderRadius: 10,

    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  coverImgStyle: {
    width: '100%',
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  descTitleStyle: {
    paddingHorizontal: 10,
    paddingVertical: 10,

    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomInfoStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  leftInfoStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImgStyle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  nicknameStyle: {
    flex: 1,
    marginLeft: 5,
    overflow: 'hidden',
  },
  rightInfoStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  heartImgStyle: {
    width: 20,
    height: 20,
    marginRight: 2,
    resizeMode: 'contain',
  },
});

export default CardItem;
