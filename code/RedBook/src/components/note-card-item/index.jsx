import React, {memo} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ResizeImage from '../../base-ui/resize-image';
import Heart from '../../base-ui/heart';

const NoteCardItem = memo(props => {
  const {
    dataInfo: {note_card},
    index,
  } = props;

  const navigation = useNavigation();
  const handleCardItemPress = () => {
    navigation.navigate('articleDetail', {articleId: props.dataInfo?.id});
  };

  return (
    <TouchableOpacity
      style={[
        styles.root,
        {
          marginRight: index % 2 ? 5 : 0,
        },
      ]}
      activeOpacity={0.7}
      onPress={() => handleCardItemPress()}>
      <ResizeImage url={note_card?.cover?.url} />
      <Text style={styles.descTitleStyle}>{note_card?.display_title}</Text>
      <View style={styles.bottomInfoStyle}>
        <View style={styles.leftInfoStyle}>
          <Image
            source={{uri: note_card?.user?.avatar}}
            style={styles.avatarImgStyle}
          />
          <Text style={styles.nicknameStyle}>{note_card?.user?.nickname}</Text>
        </View>
        <View style={styles.rightInfoStyle}>
          <Heart
            value={note_card?.interact_info?.liked}
            onValueChange={liked => {
              // TODO
            }}
          />
          <Text>{note_card?.interact_info?.liked_count}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  root: {
    width: '48%',
    marginBottom: 8,
    marginLeft: 5,
    borderRadius: 10,

    backgroundColor: '#fff',
    overflow: 'hidden',
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
    height: '100%',
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
    height: '100%',
  },
});

export default NoteCardItem;
