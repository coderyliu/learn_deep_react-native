import React, {memo} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

import GoodsCardItem from '../../../../components/goods-card-item';

const ListContent = memo(props => {
  const {cateList = [], goodsList = [], onLoadData = () => {}} = props;

  const handleCatePress = data => {};

  const renderHeader = () => {
    return (
      <View style={styles.headerStyle}>
        {cateList?.length > 0
          ? cateList?.map(item => {
              return (
                <TouchableOpacity
                  style={styles.headerItemStyle}
                  key={item.id}
                  onPress={() => handleCatePress(item)}>
                  <Image
                    style={styles.headerImgStyle}
                    source={{uri: item?.image}}
                  />
                  <Text numberOfLines={1} style={styles.headerTextStyle}>
                    {item?.name}
                  </Text>
                </TouchableOpacity>
              );
            })
          : ''}
      </View>
    );
  };

  const renderItem = ({item}) => {
    return <GoodsCardItem dataInfo={item} />;
  };

  return (
    <FlatList
      style={styles.root}
      data={goodsList}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      ListHeaderComponent={renderHeader}
      onEndReachedThreshold={0.15}
      onEndReached={onLoadData}></FlatList>
  );
});

const styles = StyleSheet.create({
  root: {
    width: '100%',
    marginBottom: 50,
  },
  headerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  headerItemStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    marginBottom: 20,
  },
  headerImgStyle: {
    width: 42,
    height: 42,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  headerTextStyle: {
    color: '#333',
    fontSize: 16,
  },
});

export default ListContent;
