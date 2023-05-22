import React, {memo} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import icon_love from '../../../../assets/images/icon_star.png';
import icon_follow from '../../../../assets/images/icon_new_follow.png';
import icon_comment from '../../../../assets/images/icon_comment.png';
import icon_empty from '../../../../assets/images/icon_no_collection.webp';

import MessageCardItem from '../../../../components/message-card-item';
import AppEmpty from '../../../../components/app-empty';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const MessageListContent = memo(props => {
  const {messageList, onLoadData} = props;

  const handleNavItemPress = type => {};

  const renderHeader = () => {
    return (
      <View style={styles.headerStyle}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.headerItemStyle}
          onPress={() => handleNavItemPress('collect')}>
          <Image source={icon_love} style={styles.navIconStyle} />
          <Text style={styles.headerTextStyle}>赞和收藏</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.headerItemStyle}
          onPress={() => handleNavItemPress('follow')}>
          <Image source={icon_follow} style={styles.navIconStyle} />
          <Text style={styles.headerTextStyle}>新增关注</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.headerItemStyle}
          onPress={() => handleNavItemPress('comment')}>
          <Image source={icon_comment} style={styles.navIconStyle} />
          <Text style={styles.headerTextStyle}>评论和@</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return <MessageCardItem dataInfo={item} />;
  };

  return (
    <FlatList
      style={styles.root}
      data={messageList}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onEndReachedThreshold={0.15}
      onEndReached={onLoadData}
      ListHeaderComponent={renderHeader}
      ListEmptyComponent={() => (
        <AppEmpty icon={icon_empty} emptyText="暂无消息" />
      )}></FlatList>
  );
});

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: SCREEN_HEIGHT,
    marginBottom: 50,
    backgroundColor: '#fff',
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  headerItemStyle: {
    alignItems: 'center',
    height: '100%',
  },
  navIconStyle: {
    width: 50,
    height: 50,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  headerTextStyle: {
    color: '#333',
    fontSize: 16,
  },
});

export default MessageListContent;
