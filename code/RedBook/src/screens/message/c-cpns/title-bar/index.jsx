import React, {memo} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';

import icon_group from '../../../../assets/images/icon_group.png';

const MessageTitleBar = memo(props => {
  const {onGroupBtnPress} = props;

  return (
    <View style={styles.root}>
      <Text style={styles.textStyle}>消息</Text>
      <TouchableOpacity
        style={styles.groupWrapStyle}
        activeOpacity={0.8}
        onPress={() => onGroupBtnPress()}>
        <Image source={icon_group} style={styles.iconStyle} />
        <Text style={styles.groupTextStyle}>群聊</Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 48,
    backgroundColor: '#fff',
  },
  textStyle: {
    color: '#333',
    fontSize: 18,
  },
  groupWrapStyle: {
    position: 'absolute',
    top: 15,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: 24,
    height: 24,
    marginRight: 5,
    resizeMode: 'contain',
  },
  groupTextStyle: {
    color: '#333',
    fontSize: 16,
  },
});

export default MessageTitleBar;
