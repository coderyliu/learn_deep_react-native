import React, {memo} from 'react';
import {useDispatch} from 'react-redux';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import {
  changeCurrentTabAction,
  changeCurrentPageAction,
} from '../../../../store/modules/mine/person';

const ListBar = memo(props => {
  const {currentTab} = props;

  const dispatch = useDispatch();
  const handleBarPress = type => {
    dispatch(changeCurrentPageAction(1));
    dispatch(changeCurrentTabAction(type));
  };

  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.barItemStyle}
        activeOpacity={0.7}
        onPress={() => handleBarPress('note')}>
        <Text
          style={[
            styles.barTextStyle,
            {
              color: currentTab === 'note' ? '#333' : '#666',
              fontWeight: currentTab === 'note' ? 'bold' : 'normal',
            },
          ]}>
          笔记
        </Text>
        {currentTab === 'note' && <View style={styles.line}></View>}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.barItemStyle}
        activeOpacity={0.7}
        onPress={() => handleBarPress('collect')}>
        <Text
          style={[
            styles.barTextStyle,
            {
              color: currentTab === 'collect' ? '#333' : '#666',
              fontWeight: currentTab === 'collect' ? 'bold' : 'normal',
            },
          ]}>
          收藏
        </Text>
        {currentTab === 'collect' && <View style={styles.line}></View>}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.barItemStyle}
        activeOpacity={0.7}
        onPress={() => handleBarPress('like')}>
        <Text
          style={[
            styles.barTextStyle,
            {
              color: currentTab === 'like' ? '#333' : '#666',
              fontWeight: currentTab === 'like' ? 'bold' : 'normal',
            },
          ]}>
          点赞
        </Text>
        {currentTab === 'like' && <View style={styles.line}></View>}
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginTop: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#fff',
  },
  barItemStyle: {},
  barTextStyle: {
    fontSize: 16,
    paddingVertical: 3,
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: '#ff2442',
  },
});

export default ListBar;
