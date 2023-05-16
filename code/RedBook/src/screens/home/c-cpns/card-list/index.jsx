import React, {memo} from 'react';
import {useDispatch} from 'react-redux';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  changeCateTypeAction,
  changeCurrentPageAction,
} from '../../../../store/modules/main/home';
import {homeTopFilterList} from '../../../../assets/data/home-data';

import CardItem from '../card-item';

const CardList = memo(props => {
  const {cardList, cateType, loadMore} = props;

  const dispatch = useDispatch();
  const handleTabPress = data => {
    dispatch(changeCurrentPageAction(1));
    dispatch(changeCateTypeAction(data.value));
  };

  const renderItem = ({item, index}) => {
    return <CardItem dataInfo={item} index={index}></CardItem>;
  };

  const renderHeaderComponent = () => {
    return (
      <View style={styles.headerStyle}>
        <ScrollView
          style={styles.tabWrapStyle}
          horizontal={true}
          showsHorizontalScrollIndicator={false} //是否显示滚动条
        >
          {homeTopFilterList.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.tabItemStyle}
                activeOpacity={0.7}
                onPress={() => handleTabPress(item)}>
                <Text
                  style={[
                    styles.headerTextStyle,
                    {
                      color: cateType === item.value ? '#333' : '#666',
                      fontWeight: cateType === item.value ? 'bold' : 'normal',
                    },
                  ]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <TouchableOpacity activeOpacity={0.7} style={styles.openArrow}>
          <Image
            style={styles.openArrowImg}
            source={require('../../../../assets/images/icon_arrow.png')}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.root}
      data={cardList}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      numColumns={2}
      onEndReachedThreshold={0.15}
      onEndReached={loadMore}
      ListHeaderComponent={renderHeaderComponent}
      ListFooterComponent={() => {
        return (
          <View>
            <Text style={styles.footerStyle}>到底了，没有更多数据了...</Text>
          </View>
        );
      }}></FlatList>
  );
});

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 36,
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  tabWrapStyle: {
    flex: 1,
    height: '100%',
  },
  tabItemStyle: {
    width: 60,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextStyle: {
    height: '100%',
    color: '#333',
    fontSize: 16,
  },
  openArrow: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: '100%',
    paddingRight: 10,
    marginTop: -10,
  },
  openArrowImg: {
    width: 20,
    height: 20,
    transform: [{rotate: '-90deg'}],
  },
  footerStyle: {
    height: 30,
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CardList;
