import React, {memo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

import icon_daily from '../../../../assets/images/icon_daily.png';
import icon_search from '../../../../assets/images/icon_search.png';

const TitleBar = memo(props => {
  const {currentTab, onTabChange = () => {}} = props;

  const navigation = useNavigation();

  const handleTitleBarPress = tab => {
    onTabChange(tab);
  };

  const handleIconPress = type => {
    if (type === 'search') {
      navigation.navigate('search');
    }
  };

  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.asideWrapStyle}
        activeOpacity={0.7}
        onPress={() => handleIconPress('daily')}>
        <Image source={icon_daily} style={styles.iconImgStyle} />
      </TouchableOpacity>
      <View style={styles.centerWrapStyle}>
        <TouchableOpacity
          style={styles.centerTabStyle}
          activeOpacity={0.8}
          onPress={() => handleTitleBarPress('关注')}>
          <Text
            style={[
              styles.textStyle,
              {
                color: currentTab === '关注' ? '#333' : '#666',
                fontWeight: currentTab === '关注' ? 'bold' : 'normal',
              },
            ]}>
            关注
          </Text>
          {currentTab === '关注' && <View style={styles.line}></View>}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.centerTabStyle}
          activeOpacity={0.8}
          onPress={() => handleTitleBarPress('发现')}>
          <Text
            style={[
              styles.textStyle,
              {
                color: currentTab === '发现' ? '#333' : '#666',
                fontWeight: currentTab === '发现' ? 'bold' : 'normal',
              },
            ]}>
            发现
          </Text>
          {currentTab === '发现' && <View style={styles.line}></View>}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.centerTabStyle}
          activeOpacity={0.8}
          onPress={() => handleTitleBarPress('大连')}>
          <Text
            style={[
              styles.textStyle,
              {
                color: currentTab === '大连' ? '#333' : '#666',
                fontWeight: currentTab === '大连' ? 'bold' : 'normal',
              },
            ]}>
            大连
          </Text>
          {currentTab === '大连' && <View style={styles.line}></View>}
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.asideWrapStyle}
        activeOpacity={0.7}
        onPress={() => handleIconPress('search')}>
        <Image source={icon_search} style={styles.iconImgStyle} />
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 48,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    backgroundColor: '#fff',
  },
  asideWrapStyle: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerWrapStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%',
  },
  centerTabStyle: {},
  textStyle: {
    paddingVertical: 5,
    fontSize: 18,
  },
  iconImgStyle: {
    width: 28,
    height: 28,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#ff2442',
  },
});

export default TitleBar;
