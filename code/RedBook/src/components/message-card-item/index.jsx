import React, {memo} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const MessageCardItem = memo(props => {
  const {dataInfo} = props;

  const handleCardItemPress = () => {};

  return (
    <TouchableOpacity
      style={styles.root}
      activeOpacity={0.8}
      onPress={() => handleCardItemPress()}>
      <Image source={{uri: dataInfo?.avatarUrl}} style={styles.coverImgStyle} />
      <View style={styles.contentStyle}>
        <View style={styles.topWrapStyle}>
          <Text numberOfLines={1} style={styles.titleTextStyle}>
            {dataInfo?.name}
          </Text>
          <Text style={styles.timeTextStyle}>{dataInfo?.lastMessageTime}</Text>
        </View>
        <View style={styles.bottomWrapStyle}>
          <Text numberOfLines={1}>{dataInfo?.lastMessage}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 60,
    paddingHorizontal: 10,
  },
  coverImgStyle: {
    width: 50,
    height: 48,
    borderRadius: 50,
    marginRight: 15,
    resizeMode: 'contain',
  },
  contentStyle: {
    flex: 1,
  },
  topWrapStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  titleTextStyle: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  timeTextStyle: {},
  bottomWrapStyle: {},
});

export default MessageCardItem;
