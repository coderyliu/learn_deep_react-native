import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';

import NoteCardItem from '../../../../components/note-card-item';

const ListContent = memo(props => {
  const {listData, loadMore = () => {}} = props;
  // console.log(listData.length);

  return (
    // !FlatList不能嵌套在ScrollView内部
    <View style={styles.root}>
      {listData?.map((item, index) => {
        return <NoteCardItem dataInfo={item} index={index}></NoteCardItem>;
      })}
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    paddingVertical: 10,
    backgroundColor: '#eee',
  },
});

export default ListContent;
